import AppKit

struct Palette {
    let background = NSColor(calibratedRed: 11/255, green: 18/255, blue: 32/255, alpha: 1)
    let blue = NSColor(calibratedRed: 22/255, green: 135/255, blue: 1, alpha: 1)
    let teal = NSColor(calibratedRed: 23/255, green: 196/255, blue: 171/255, alpha: 1)
}

let palette = Palette()
let fileManager = FileManager.default
let outputDirectory = URL(fileURLWithPath: fileManager.currentDirectoryPath).appendingPathComponent("assets/icons")

let targets: [(String, CGFloat, CGFloat)] = [
    ("icon-512.png", 512, 120),
    ("icon-maskable-512.png", 512, 84),
    ("icon-192.png", 192, 44),
    ("apple-touch-icon.png", 180, 42),
]

func drawIcon(size: CGFloat, cornerRadius: CGFloat) -> NSImage {
    let image = NSImage(size: NSSize(width: size, height: size))
    image.lockFocus()

    let rect = NSRect(x: 0, y: 0, width: size, height: size)
    let outerPath = NSBezierPath(roundedRect: rect, xRadius: cornerRadius, yRadius: cornerRadius)
    palette.background.setFill()
    outerPath.fill()

    let inset = size * 0.1
    let innerRect = rect.insetBy(dx: inset, dy: inset)
    let innerPath = NSBezierPath(roundedRect: innerRect, xRadius: cornerRadius * 0.82, yRadius: cornerRadius * 0.82)

    let gradient = NSGradient(colors: [palette.blue, palette.teal])!
    gradient.draw(in: innerPath, angle: -45)

    let highlight = NSBezierPath(ovalIn: NSRect(x: size * 0.33, y: size * 0.49, width: size * 0.34, height: size * 0.34))
    NSColor.white.withAlphaComponent(0.72).setFill()
    highlight.fill()

    let torsoRect = NSRect(x: size * 0.30, y: size * 0.27, width: size * 0.40, height: size * 0.21)
    let torsoPath = NSBezierPath(roundedRect: torsoRect, xRadius: size * 0.06, yRadius: size * 0.06)
    NSColor.white.withAlphaComponent(0.92).setFill()
    torsoPath.fill()

    let headRect = NSRect(x: size * 0.42, y: size * 0.53, width: size * 0.16, height: size * 0.16)
    let headPath = NSBezierPath(ovalIn: headRect)
    NSColor.white.setFill()
    headPath.fill()

    image.unlockFocus()
    return image
}

func writePNG(image: NSImage, to url: URL) throws {
    guard
        let tiffData = image.tiffRepresentation,
        let bitmap = NSBitmapImageRep(data: tiffData),
        let pngData = bitmap.representation(using: .png, properties: [:])
    else {
        throw NSError(domain: "BodyTrack", code: 1)
    }

    try pngData.write(to: url)
}

for target in targets {
    let image = drawIcon(size: target.1, cornerRadius: target.2)
    try writePNG(image: image, to: outputDirectory.appendingPathComponent(target.0))
    print("Created \(target.0)")
}
