const STORAGE_PREFIX = "color-flip-best-";

const DIFFICULTIES = {
  easy: {
    label: "Easy",
    baseTime: 3400,
    minTime: 1700,
    decay: 70,
    bonusEvery: 4,
  },
  normal: {
    label: "Normal",
    baseTime: 2600,
    minTime: 1150,
    decay: 95,
    bonusEvery: 3,
  },
  hard: {
    label: "Hard",
    baseTime: 1900,
    minTime: 800,
    decay: 115,
    bonusEvery: 2,
  },
};

const COLORS = [
  { key: "rojo", label: "ROJO", hex: "#ff4d6d" },
  { key: "azul", label: "AZUL", hex: "#3b82f6" },
  { key: "verde", label: "VERDE", hex: "#22c55e" },
  { key: "amarillo", label: "AMARILLO", hex: "#facc15" },
  { key: "violeta", label: "VIOLETA", hex: "#a855f7" },
  { key: "naranja", label: "NARANJA", hex: "#fb923c" },
];

const screens = document.querySelectorAll(".screen");
const app = document.querySelector(".app");
const wordDisplay = document.getElementById("word-display");
const feedback = document.getElementById("feedback");
const timerFill = document.getElementById("timer-fill");
const timerText = document.getElementById("timer-text");
const scoreEl = document.getElementById("score");
const comboEl = document.getElementById("combo");
const bestScoreEl = document.getElementById("best-score");
const currentDifficultyEl = document.getElementById("current-difficulty");
const finalScoreEl = document.getElementById("final-score");
const finalBestScoreEl = document.getElementById("final-best-score");
const finalDifficultyEl = document.getElementById("final-difficulty");

const menuBestEls = {
  easy: document.getElementById("menu-best-easy"),
  normal: document.getElementById("menu-best-normal"),
  hard: document.getElementById("menu-best-hard"),
};

const state = {
  screen: "menu",
  difficulty: "easy",
  score: 0,
  combo: 0,
  best: 0,
  round: 0,
  roundDuration: 0,
  roundStart: 0,
  timerId: 0,
  isPlaying: false,
  currentRound: null,
};

function getBestScore(difficulty) {
  return Number.parseInt(localStorage.getItem(`${STORAGE_PREFIX}${difficulty}`) || "0", 10);
}

function setBestScore(difficulty, score) {
  localStorage.setItem(`${STORAGE_PREFIX}${difficulty}`, String(score));
}

function refreshMenuBestScores() {
  Object.keys(menuBestEls).forEach((difficulty) => {
    menuBestEls[difficulty].textContent = getBestScore(difficulty);
  });
}

function showScreen(name) {
  state.screen = name;
  screens.forEach((screen) => {
    screen.classList.toggle("screen-active", screen.dataset.screen === name);
  });
}

function setDifficulty(nextDifficulty) {
  state.difficulty = nextDifficulty;
  document.querySelectorAll(".difficulty-btn").forEach((button) => {
    const isSelected = button.dataset.difficulty === nextDifficulty;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-checked", String(isSelected));
  });
}

function getRoundDuration() {
  const config = DIFFICULTIES[state.difficulty];
  const speedUp = state.round * config.decay;
  return Math.max(config.baseTime - speedUp, config.minTime);
}

function updateHud() {
  scoreEl.textContent = state.score;
  comboEl.textContent = state.combo;
  bestScoreEl.textContent = state.best;
  currentDifficultyEl.textContent = DIFFICULTIES[state.difficulty].label;
}

function setFeedback(message, tone = "") {
  feedback.textContent = message;
  feedback.classList.remove("is-correct", "is-wrong");
  if (tone === "correct") {
    feedback.classList.add("is-correct");
  }
  if (tone === "wrong") {
    feedback.classList.add("is-wrong");
  }
}

function pulseGame(type) {
  app.classList.remove("flash-correct", "flash-wrong");
  void app.offsetWidth;
  app.classList.add(type === "correct" ? "flash-correct" : "flash-wrong");
  window.setTimeout(() => {
    app.classList.remove("flash-correct", "flash-wrong");
  }, 240);
}

function pickRound() {
  const isMatch = Math.random() >= 0.5;
  const word = COLORS[Math.floor(Math.random() * COLORS.length)];
  let ink = word;

  if (!isMatch) {
    const alternatives = COLORS.filter((color) => color.key !== word.key);
    ink = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  return { word, ink, isMatch };
}

function renderRound() {
  stopTimer();
  state.currentRound = pickRound();
  wordDisplay.textContent = state.currentRound.word.label;
  wordDisplay.style.color = state.currentRound.ink.hex;

  state.roundDuration = getRoundDuration();
  state.roundStart = performance.now();
  setFeedback("Nueva ronda");
  updateTimer(performance.now());
}

function updateTimer(now) {
  if (!state.isPlaying) {
    return;
  }

  const elapsed = now - state.roundStart;
  const remaining = Math.max(0, state.roundDuration - elapsed);
  const progress = remaining / state.roundDuration;

  timerFill.style.transform = `scaleX(${progress})`;
  timerText.textContent = `${Math.ceil(progress * 100)}%`;

  if (remaining <= 0) {
    endGame("Se terminó el tiempo");
    return;
  }

  state.timerId = window.requestAnimationFrame(updateTimer);
}

function stopTimer() {
  window.cancelAnimationFrame(state.timerId);
}

function startGame() {
  stopTimer();
  state.score = 0;
  state.combo = 0;
  state.round = 0;
  state.isPlaying = true;
  state.best = getBestScore(state.difficulty);

  updateHud();
  showScreen("game");
  renderRound();
}

function advanceRound() {
  state.round += 1;
  renderRound();
}

function handleAnswer(userSaysMatch) {
  if (!state.isPlaying || !state.currentRound) {
    return;
  }

  const isCorrect = state.currentRound.isMatch === userSaysMatch;

  if (!isCorrect) {
    endGame("Respuesta incorrecta");
    return;
  }

  state.combo += 1;
  const comboBonus = state.combo % DIFFICULTIES[state.difficulty].bonusEvery === 0 ? 2 : 0;
  state.score += 1 + comboBonus;

  if (state.score > state.best) {
    state.best = state.score;
    setBestScore(state.difficulty, state.best);
    refreshMenuBestScores();
  }

  setFeedback(comboBonus ? `Perfecto. Combo x${state.combo} + bonus` : `Correcto. Combo x${state.combo}`, "correct");
  pulseGame("correct");
  updateHud();
  advanceRound();
}

function endGame(reason) {
  stopTimer();
  state.isPlaying = false;
  setFeedback(reason, "wrong");
  pulseGame("wrong");

  finalScoreEl.textContent = state.score;
  finalBestScoreEl.textContent = state.best;
  finalDifficultyEl.textContent = DIFFICULTIES[state.difficulty].label;

  window.setTimeout(() => {
    showScreen("gameover");
  }, 340);
}

function bindEvents() {
  document.getElementById("play-btn").addEventListener("click", startGame);
  document.getElementById("how-to-btn").addEventListener("click", () => showScreen("howto"));
  document.getElementById("back-to-menu-btn").addEventListener("click", () => showScreen("menu"));
  document.getElementById("retry-btn").addEventListener("click", startGame);
  document.getElementById("menu-btn").addEventListener("click", () => showScreen("menu"));
  document.getElementById("match-btn").addEventListener("click", () => handleAnswer(true));
  document.getElementById("mismatch-btn").addEventListener("click", () => handleAnswer(false));

  document.querySelectorAll(".difficulty-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setDifficulty(button.dataset.difficulty);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (state.screen !== "game" || !state.isPlaying) {
      return;
    }

    if (event.key === "ArrowLeft") {
      handleAnswer(true);
    }

    if (event.key === "ArrowRight") {
      handleAnswer(false);
    }
  });
}

function init() {
  refreshMenuBestScores();
  setDifficulty(state.difficulty);
  updateHud();
  bindEvents();
  showScreen("menu");
}

init();
