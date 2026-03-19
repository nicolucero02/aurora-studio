const HIGH_SCORE_STORAGE_KEY = "tap-dash-high-scores";
const FIRST_HINT_STORAGE_KEY = "tap-dash-first-game-hint-seen";

const DIFFICULTIES = {
  easy: {
    label: "Easy",
    baseSpeed: 2.1,
    speedRamp: 0.018,
    maxBoost: 2.4,
    reactionWindowStart: 0.54,
    cueOpacity: 0.56
  },
  normal: {
    label: "Normal",
    baseSpeed: 2.7,
    speedRamp: 0.028,
    maxBoost: 3.8,
    reactionWindowStart: 0.7,
    cueOpacity: 0.42
  },
  hard: {
    label: "Hard",
    baseSpeed: 3.35,
    speedRamp: 0.04,
    maxBoost: 5,
    reactionWindowStart: 0.82,
    cueOpacity: 0.28
  }
};

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("highScore");
const finalScoreEl = document.getElementById("finalScore");
const finalHighScoreEl = document.getElementById("finalHighScore");
const finalDifficultyEl = document.getElementById("finalDifficulty");
const activeDifficultyEl = document.getElementById("activeDifficulty");
const gameHud = document.getElementById("gameHud");

const menuScreen = document.getElementById("menuScreen");
const howToPlayScreen = document.getElementById("howToPlayScreen");
const gameScreen = document.getElementById("gameScreen");
const gameOverOverlay = document.getElementById("gameOverOverlay");
const startButton = document.getElementById("startButton");
const howToPlayButton = document.getElementById("howToPlayButton");
const backToMenuButton = document.getElementById("backToMenuButton");
const restartButton = document.getElementById("restartButton");
const menuButton = document.getElementById("menuButton");
const difficultyPicker = document.getElementById("difficultyPicker");
const difficultyOptions = Array.from(document.querySelectorAll("[data-difficulty]"));

function loadHighScores() {
  try {
    const parsed = JSON.parse(localStorage.getItem(HIGH_SCORE_STORAGE_KEY) || "{}");
    return {
      easy: Number(parsed.easy || 0),
      normal: Number(parsed.normal || 0),
      hard: Number(parsed.hard || 0)
    };
  } catch {
    return { easy: 0, normal: 0, hard: 0 };
  }
}

const state = {
  tiles: [],
  tileSet: new Set(),
  segmentIndex: 0,
  progress: 0,
  desiredAxis: "x",
  score: 0,
  highScores: loadHighScores(),
  highScore: 0,
  difficulty: "normal",
  started: false,
  gameOver: false,
  lastTime: 0,
  speed: 0,
  baseSpeed: 0,
  speedRamp: 0,
  maxBoost: 0,
  reactionWindowStart: 0.7,
  cueOpacity: 0.42,
  cameraLerpX: 0,
  cameraLerpY: 0,
  trail: [],
  pulse: 0,
  inputFlash: 0,
  showFirstGameHint: !localStorage.getItem(FIRST_HINT_STORAGE_KEY),
  showFirstGameHintInRun: false,
  screen: "menu"
};

function syncDifficultySettings() {
  const config = DIFFICULTIES[state.difficulty];
  state.baseSpeed = config.baseSpeed;
  state.speed = config.baseSpeed;
  state.speedRamp = config.speedRamp;
  state.maxBoost = config.maxBoost;
  state.reactionWindowStart = config.reactionWindowStart;
  state.cueOpacity = config.cueOpacity;
  state.highScore = state.highScores[state.difficulty];
  activeDifficultyEl.textContent = config.label;
  highScoreEl.textContent = String(state.highScore);
  finalDifficultyEl.textContent = config.label;
  finalHighScoreEl.textContent = String(state.highScore);
}

function saveHighScores() {
  localStorage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(state.highScores));
}

function showScreen(nextScreen) {
  state.screen = nextScreen;
  menuScreen.classList.toggle("screen--active", nextScreen === "menu");
  howToPlayScreen.classList.toggle("screen--active", nextScreen === "howto");
  gameScreen.classList.toggle("screen--active", nextScreen === "game");
  gameHud.classList.toggle("hud--hidden", nextScreen !== "game");
  gameOverOverlay.classList.remove("overlay--active");

  if (nextScreen === "game") {
    requestAnimationFrame(resizeCanvas);
  }
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function tileKey(x, y) {
  return `${x},${y}`;
}

function addTile(x, y) {
  const key = tileKey(x, y);
  if (state.tileSet.has(key)) {
    return;
  }
  state.tiles.push({ x, y });
  state.tileSet.add(key);
}

function hasTile(x, y) {
  return state.tileSet.has(tileKey(x, y));
}

function buildPath(minTiles = 50) {
  if (state.tiles.length === 0) {
    addTile(0, 0);
  }

  let current = state.tiles[state.tiles.length - 1];
  let axis =
    state.tiles.length > 2 && state.tiles[state.tiles.length - 1].x === state.tiles[state.tiles.length - 2].x
      ? "y"
      : "x";

  while (state.tiles.length < minTiles) {
    axis = axis === "x" ? "y" : "x";
    const runLength = 2 + Math.floor(Math.random() * 4);

    for (let step = 0; step < runLength; step += 1) {
      current = {
        x: current.x + (axis === "x" ? 1 : 0),
        y: current.y + (axis === "y" ? 1 : 0)
      };
      addTile(current.x, current.y);
    }
  }
}

function getSegmentAxis(index) {
  const current = state.tiles[index];
  const next = state.tiles[index + 1];
  return current.x !== next.x ? "x" : "y";
}

function updateScore(nextScore) {
  state.score = nextScore;
  scoreEl.textContent = String(state.score);
}

function updateDifficultyButtons() {
  for (const option of difficultyOptions) {
    const isActive = option.dataset.difficulty === state.difficulty;
    option.classList.toggle("difficulty-option--active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  }
}

function setDifficulty(nextDifficulty) {
  if (!(nextDifficulty in DIFFICULTIES)) {
    return;
  }

  state.difficulty = nextDifficulty;
  syncDifficultySettings();
  updateDifficultyButtons();
}

function resetGame() {
  state.tiles = [];
  state.tileSet = new Set();
  state.segmentIndex = 0;
  state.progress = 0;
  state.score = 0;
  state.desiredAxis = "x";
  state.started = false;
  state.gameOver = false;
  state.lastTime = 0;
  state.trail = [];
  state.pulse = 0;
  state.inputFlash = 0;

  syncDifficultySettings();

  addTile(0, 0);
  addTile(1, 0);
  addTile(2, 0);
  buildPath(70);

  state.cameraLerpX = state.tiles[0].x;
  state.cameraLerpY = state.tiles[0].y;

  updateScore(0);
}

function startGame() {
  resetGame();
  showScreen("game");
  state.started = true;
  state.lastTime = 0;
  state.desiredAxis = getSegmentAxis(0);
  state.showFirstGameHintInRun = state.showFirstGameHint;
  if (state.showFirstGameHint) {
    localStorage.setItem(FIRST_HINT_STORAGE_KEY, "1");
    state.showFirstGameHint = false;
  }
}

function getPlayerWorldPosition() {
  const from = state.tiles[state.segmentIndex];
  const to = state.tiles[state.segmentIndex + 1];
  return {
    x: from.x + (to.x - from.x) * state.progress,
    y: from.y + (to.y - from.y) * state.progress
  };
}

function endGame() {
  state.gameOver = true;
  state.started = false;

  if (state.score > state.highScores[state.difficulty]) {
    state.highScores[state.difficulty] = state.score;
    saveHighScores();
    syncDifficultySettings();
  }

  finalDifficultyEl.textContent = DIFFICULTIES[state.difficulty].label;
  finalScoreEl.textContent = String(state.score);
  finalHighScoreEl.textContent = String(state.highScores[state.difficulty]);
  gameOverOverlay.classList.add("overlay--active");
}

function triggerTurn() {
  if (!state.started || state.gameOver) {
    return;
  }

  if (state.progress < state.reactionWindowStart) {
    state.inputFlash = 1;
    return;
  }

  state.desiredAxis = state.desiredAxis === "x" ? "y" : "x";
  state.pulse = 1;
  state.showFirstGameHintInRun = false;
}

function advanceSegment() {
  const currentTile = state.tiles[state.segmentIndex + 1];
  const nextX = currentTile.x + (state.desiredAxis === "x" ? 1 : 0);
  const nextY = currentTile.y + (state.desiredAxis === "y" ? 1 : 0);

  if (!hasTile(nextX, nextY)) {
    endGame();
    return;
  }

  state.segmentIndex += 1;
  state.progress = 0;
  updateScore(state.segmentIndex);

  state.speed = state.baseSpeed + Math.min(state.score * state.speedRamp, state.maxBoost);

  if (state.tiles.length - state.segmentIndex < 30) {
    buildPath(state.tiles.length + 40);
  }
}

function update(delta) {
  if (!state.started || state.gameOver) {
    return;
  }

  state.progress += state.speed * delta;
  state.pulse = Math.max(0, state.pulse - delta * 3.2);
  state.inputFlash = Math.max(0, state.inputFlash - delta * 4.4);

  if (state.progress >= 1) {
    advanceSegment();
  }

  const position = getPlayerWorldPosition();
  state.cameraLerpX += (position.x - state.cameraLerpX) * Math.min(1, delta * 7);
  state.cameraLerpY += (position.y - state.cameraLerpY) * Math.min(1, delta * 7);

  state.trail.push({ x: position.x, y: position.y, life: 1 });
  if (state.trail.length > 16) {
    state.trail.shift();
  }

  for (const item of state.trail) {
    item.life = Math.max(0, item.life - delta * 2.4);
  }
}

function isoProject(x, y, cameraX, cameraY, tileWidth, tileHeight, centerX, centerY) {
  return {
    x: centerX + (x - y - (cameraX - cameraY)) * tileWidth * 0.5,
    y: centerY + (x + y - (cameraX + cameraY)) * tileHeight * 0.5
  };
}

function drawDiamond(x, y, width, height, fillStyle, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x, y - height * 0.5);
  ctx.lineTo(x + width * 0.5, y);
  ctx.lineTo(x, y + height * 0.5);
  ctx.lineTo(x - width * 0.5, y);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawScene() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) {
    return;
  }
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#131834");
  gradient.addColorStop(1, "#070910");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const tileWidth = Math.max(44, Math.min(width * 0.11, 76));
  const tileHeight = tileWidth * 0.55;
  const centerX = width * 0.5;
  const centerY = height * 0.35;

  const visibleTiles = state.tiles.slice(state.segmentIndex, state.segmentIndex + 34);

  for (let i = 0; i < visibleTiles.length; i += 1) {
    const tile = visibleTiles[i];
    const projected = isoProject(
      tile.x,
      tile.y,
      state.cameraLerpX,
      state.cameraLerpY,
      tileWidth,
      tileHeight,
      centerX,
      centerY
    );

    const shade = 0.08 + i * 0.016;
    drawDiamond(projected.x, projected.y + tileHeight * 0.4, tileWidth, tileHeight, `rgba(0, 0, 0, ${0.28 + shade})`, 1);
    drawDiamond(projected.x, projected.y, tileWidth, tileHeight, `rgba(255, 255, 255, ${0.06 + shade * 0.4})`, 1);
    drawDiamond(
      projected.x,
      projected.y - 1,
      tileWidth * 0.9,
      tileHeight * 0.78,
      `rgba(82, 229, 199, ${Math.max(0.12, 0.65 - i * 0.02)})`,
      0.9
    );
  }

  const nextTurnTile = state.tiles[state.segmentIndex + 1];
  if (nextTurnTile && state.started && !state.gameOver) {
    const axisNow = getSegmentAxis(state.segmentIndex);
    const projected = isoProject(
      nextTurnTile.x,
      nextTurnTile.y,
      state.cameraLerpX,
      state.cameraLerpY,
      tileWidth,
      tileHeight,
      centerX,
      centerY
    );

    const cueStrength = axisNow !== state.desiredAxis ? state.cueOpacity + state.pulse * 0.22 : 0.12 + state.pulse * 0.16;
    drawDiamond(projected.x, projected.y - 1, tileWidth * 1.18, tileHeight * 1.02, `rgba(255, 209, 102, ${cueStrength})`, 0.75);
  }

  for (const item of state.trail) {
    if (item.life <= 0) {
      continue;
    }

    const projected = isoProject(
      item.x,
      item.y,
      state.cameraLerpX,
      state.cameraLerpY,
      tileWidth,
      tileHeight,
      centerX,
      centerY
    );

    ctx.save();
    ctx.globalAlpha = item.life * 0.32;
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(projected.x, projected.y - tileHeight * 0.42, tileWidth * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const player = getPlayerWorldPosition();
  const projectedPlayer = isoProject(
    player.x,
    player.y,
    state.cameraLerpX,
    state.cameraLerpY,
    tileWidth,
    tileHeight,
    centerX,
    centerY
  );

  const bob = state.started ? Math.sin(performance.now() * 0.01) * 2.5 : 0;

  ctx.save();
  ctx.shadowColor = "rgba(255, 138, 91, 0.55)";
  ctx.shadowBlur = 28;
  ctx.fillStyle = "#ff8a5b";
  ctx.beginPath();
  ctx.arc(projectedPlayer.x, projectedPlayer.y - tileHeight * 0.5 + bob, tileWidth * 0.18, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#fff4ec";
  ctx.beginPath();
  ctx.arc(projectedPlayer.x - tileWidth * 0.04, projectedPlayer.y - tileHeight * 0.55 + bob, tileWidth * 0.045, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = state.inputFlash > 0 ? `rgba(255, 138, 91, ${0.7 * state.inputFlash})` : "rgba(245, 247, 255, 0.6)";
  ctx.font = "600 14px Space Grotesk";
  ctx.fillText(`${DIFFICULTIES[state.difficulty].label}  |  girar desde ${Math.round(state.reactionWindowStart * 100)}%`, 18, height - 24);
  ctx.restore();

  if (state.started && !state.gameOver && state.showFirstGameHintInRun && state.progress >= state.reactionWindowStart - 0.05) {
    ctx.save();
    ctx.fillStyle = "rgba(255, 209, 102, 0.96)";
    ctx.font = "700 18px Space Grotesk";
    ctx.textAlign = "center";
    ctx.fillText("Toca ahora para girar", width * 0.5, height * 0.16);
    ctx.restore();
  }
}

function frame(timestamp) {
  if (!state.lastTime) {
    state.lastTime = timestamp;
  }

  const delta = Math.min((timestamp - state.lastTime) / 1000, 0.032);
  state.lastTime = timestamp;

  update(delta);
  drawScene();
  requestAnimationFrame(frame);
}

function restartFromGameOver() {
  startGame();
}

function returnToMenu() {
  resetGame();
  showScreen("menu");
}

function openHowToPlay() {
  showScreen("howto");
}

function backToMenu() {
  showScreen("menu");
}

startButton.addEventListener("click", startGame);
howToPlayButton.addEventListener("click", openHowToPlay);
backToMenuButton.addEventListener("click", backToMenu);
restartButton.addEventListener("click", restartFromGameOver);
menuButton.addEventListener("click", returnToMenu);

difficultyPicker.addEventListener("click", (event) => {
  const option = event.target.closest("[data-difficulty]");
  if (!option || state.started) {
    return;
  }
  setDifficulty(option.dataset.difficulty);
});

window.addEventListener("resize", resizeCanvas);

canvas.addEventListener("pointerdown", triggerTurn);

window.addEventListener("keydown", (event) => {
  if (event.code !== "Space") {
    return;
  }

  if (state.screen !== "game") {
    return;
  }

  event.preventDefault();
  triggerTurn();
});

setDifficulty("normal");
resetGame();
showScreen("menu");
requestAnimationFrame(frame);
