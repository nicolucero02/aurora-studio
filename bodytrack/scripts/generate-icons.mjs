import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../assets/icons");

const targets = [
  { name: "icon-512.png", size: 512, radius: 120 },
  { name: "icon-maskable-512.png", size: 512, radius: 84 },
  { name: "icon-192.png", size: 192, radius: 44 },
  { name: "apple-touch-icon.png", size: 180, radius: 42 },
];

mkdirSync(outputDir, { recursive: true });

function hex(color) {
  const value = color.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function mix(c1, c2, t) {
  return {
    r: Math.round(lerp(c1.r, c2.r, t)),
    g: Math.round(lerp(c1.g, c2.g, t)),
    b: Math.round(lerp(c1.b, c2.b, t)),
  };
}

function insideRoundedRect(x, y, rect, radius) {
  const { left, top, right, bottom } = rect;
  if (x < left || x >= right || y < top || y >= bottom) {
    return false;
  }

  const innerLeft = left + radius;
  const innerRight = right - radius;
  const innerTop = top + radius;
  const innerBottom = bottom - radius;

  if ((x >= innerLeft && x < innerRight) || (y >= innerTop && y < innerBottom)) {
    return true;
  }

  const cx = x < innerLeft ? innerLeft : innerRight;
  const cy = y < innerTop ? innerTop : innerBottom;
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= radius * radius;
}

function insideCircle(x, y, cx, cy, radius) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= radius * radius;
}

function drawIcon(size, radius) {
  const width = size;
  const height = size;
  const data = Buffer.alloc(width * height * 4);
  const background = hex("#0B1220");
  const blue = hex("#1687FF");
  const teal = hex("#17C4AB");
  const white = hex("#FFFFFF");
  const inset = size * 0.1;
  const innerRect = {
    left: inset,
    top: inset,
    right: size - inset,
    bottom: size - inset,
  };
  const innerRadius = radius * 0.82;
  const bigCircle = { cx: size * 0.5, cy: size * 0.66, r: size * 0.17 };
  const head = { cx: size * 0.5, cy: size * 0.61, r: size * 0.08 };
  const torso = {
    left: size * 0.3,
    top: size * 0.27,
    right: size * 0.7,
    bottom: size * 0.48,
  };
  const torsoRadius = size * 0.06;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let color = background;
      let alpha = 255;

      if (insideRoundedRect(x, y, innerRect, innerRadius)) {
        const t = (x + y) / (width + height);
        color = mix(blue, teal, t);
      }

      if (insideCircle(x, y, bigCircle.cx, bigCircle.cy, bigCircle.r)) {
        color = mix(color, white, 0.72);
      }

      if (insideRoundedRect(x, y, torso, torsoRadius)) {
        color = mix(color, white, 0.9);
      }

      if (insideCircle(x, y, head.cx, head.cy, head.r)) {
        color = white;
      }

      const offset = (y * width + x) * 4;
      data[offset] = color.r;
      data[offset + 1] = color.g;
      data[offset + 2] = color.b;
      data[offset + 3] = alpha;
    }
  }

  return encodePng(width, height, data);
}

function encodePng(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const raw = Buffer.alloc((width * 4 + 1) * height);

  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    rgba.copy(raw, rowStart + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = deflateSync(raw);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crcBuffer = Buffer.concat([typeBuffer, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcBuffer), 0);
  return Buffer.concat([length, typeBuffer, data, crc]);
}

const crcTable = new Uint32Array(256).map((_, index) => {
  let c = index;
  for (let k = 0; k < 8; k += 1) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  return c >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

for (const target of targets) {
  const output = drawIcon(target.size, target.radius);
  writeFileSync(resolve(outputDir, target.name), output);
  console.log(`Created ${target.name}`);
}
