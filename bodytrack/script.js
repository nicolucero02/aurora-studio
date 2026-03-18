const STORAGE_KEY = "bodytrack-history-v1";
const THEME_KEY = "bodytrack-theme";
const LANGUAGE_KEY = "bodytrack-language";
const BMI_MIN = 10;
const BMI_MAX = 40;

const bmiForm = document.querySelector("#bmiForm");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const resetButton = document.querySelector("#resetButton");
const clearHistoryButton = document.querySelector("#clearHistoryButton");
const resultPanel = document.querySelector("#resultPanel");
const emptyState = document.querySelector("#emptyState");
const bmiValue = document.querySelector("#bmiValue");
const bmiState = document.querySelector("#bmiState");
const idealWeight = document.querySelector("#idealWeight");
const statusBadge = document.querySelector("#statusBadge");
const meterIndicator = document.querySelector("#meterIndicator");
const summaryHeight = document.querySelector("#summaryHeight");
const summaryWeight = document.querySelector("#summaryWeight");
const summaryStatus = document.querySelector("#summaryStatus");
const historyList = document.querySelector("#historyList");
const historyEmpty = document.querySelector("#historyEmpty");
const latestBmi = document.querySelector("#latestBmi");
const recordCount = document.querySelector("#recordCount");
const themeToggle = document.querySelector("#themeToggle");
const langEsButton = document.querySelector("#langEs");
const langEnButton = document.querySelector("#langEn");

const translations = {
  es: {
    pageLang: "es",
    heroLabel: "Body Mass Index",
    heroTitle: "Mide tu estado actual con una experiencia refinada, estilo app.",
    heroText: "Guardá registros locales, compará tu evolución y tené la app lista para instalar desde Safari.",
    recordsLabel: "Registros",
    latestBmiLabel: "Último BMI",
    newEntryLabel: "Nuevo registro",
    calculateTitle: "Calculá tu BMI",
    heightLabel: "Altura (metros)",
    weightLabel: "Peso (kg)",
    heightPlaceholder: "1.75",
    weightPlaceholder: "72.4",
    calculateButton: "Calcular",
    clearButton: "Limpiar",
    currentResultLabel: "Resultado actual",
    snapshotTitle: "Tu resumen BMI",
    waitingState: "En espera",
    emptyStateText: "Ingresá altura y peso para ver tu BMI, categoría y rango ideal.",
    summaryHeightLabel: "Altura",
    summaryWeightLabel: "Peso",
    summaryStatusLabel: "Estado",
    timelineLabel: "Historial local",
    savedEntriesTitle: "Registros guardados",
    clearHistoryButton: "Borrar historial",
    historyEmptyText: "Todavía no hay registros. Tus entradas guardadas de BMI aparecerán aquí.",
    idealWeightLabel: "Peso ideal",
    waitingShort: "Listo",
    historyUnitHeight: "m",
    historyUnitWeight: "kg",
    dateLocale: "es-AR",
    ariaThemeToggle: "Cambiar tema de color",
    ariaLanguageSelector: "Selector de idioma",
  },
  en: {
    pageLang: "en",
    heroLabel: "Body Mass Index",
    heroTitle: "Track your current shape with a refined, app-like flow.",
    heroText: "Save local snapshots, compare your trend and keep the experience ready to install from Safari.",
    recordsLabel: "Records",
    latestBmiLabel: "Latest BMI",
    newEntryLabel: "New Entry",
    calculateTitle: "Calculate your BMI",
    heightLabel: "Height (meters)",
    weightLabel: "Weight (kg)",
    heightPlaceholder: "1.75",
    weightPlaceholder: "72.4",
    calculateButton: "Calculate",
    clearButton: "Clear",
    currentResultLabel: "Current Result",
    snapshotTitle: "Your BMI snapshot",
    waitingState: "Waiting",
    emptyStateText: "Enter height and weight to reveal your BMI, category and ideal range.",
    summaryHeightLabel: "Height",
    summaryWeightLabel: "Weight",
    summaryStatusLabel: "Status",
    timelineLabel: "Local Timeline",
    savedEntriesTitle: "Saved entries",
    clearHistoryButton: "Clear history",
    historyEmptyText: "No records yet. Your saved BMI entries will appear here.",
    idealWeightLabel: "Ideal weight",
    waitingShort: "Waiting",
    historyUnitHeight: "m",
    historyUnitWeight: "kg",
    dateLocale: "en-US",
    ariaThemeToggle: "Toggle color theme",
    ariaLanguageSelector: "Language selector",
  },
};

let history = loadHistory();
let currentLanguage = loadLanguage();

function primeStepperValue(input, initialValue) {
  if (!input.value) {
    input.value = initialValue;
  }
}

function setupNumberInputStepper(input, initialValue) {
  input.addEventListener("pointerdown", () => {
    primeStepperValue(input, initialValue);
  });

  input.addEventListener("keydown", (event) => {
    if ((event.key === "ArrowUp" || event.key === "ArrowDown") && !input.value) {
      event.preventDefault();
      input.value = initialValue;
    }
  });
}

function getText(key) {
  return translations[currentLanguage][key];
}

function classifyBmi(bmi) {
  if (bmi < 18.5) {
    return {
      label: currentLanguage === "es" ? "Bajo peso" : "Underweight",
      className: "status-underweight",
      short: currentLanguage === "es" ? "Bajo" : "Low",
    };
  }

  if (bmi < 25) {
    return {
      label: currentLanguage === "es" ? "Peso saludable" : "Healthy weight",
      className: "status-healthy",
      short: currentLanguage === "es" ? "Saludable" : "Healthy",
    };
  }

  if (bmi < 30) {
    return {
      label: currentLanguage === "es" ? "Sobrepeso" : "Overweight",
      className: "status-overweight",
      short: currentLanguage === "es" ? "Alto" : "High",
    };
  }

  return {
    label: currentLanguage === "es" ? "Obesidad" : "Obesity",
    className: "status-obesity",
    short: currentLanguage === "es" ? "Riesgo" : "Risk",
  };
}

function calculateIdealWeightRange(height) {
  const min = 18.5 * height * height;
  const max = 24.9 * height * height;
  return `${min.toFixed(1)} - ${max.toFixed(1)} ${getText("historyUnitWeight")}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getIndicatorPosition(bmi) {
  const normalized = ((clamp(bmi, BMI_MIN, BMI_MAX) - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100;
  return `${normalized}%`;
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat(getText("dateLocale"), {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function loadLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return stored === "es" || stored === "en" ? stored : "en";
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error("Unable to read local history", error);
    return [];
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function renderHistory() {
  historyList.innerHTML = "";

  if (!history.length) {
    historyEmpty.hidden = false;
    latestBmi.textContent = "--";
    recordCount.textContent = "0";
    return;
  }

  historyEmpty.hidden = true;
  recordCount.textContent = String(history.length);
  latestBmi.textContent = history[0].bmi.toFixed(1);

  history.forEach((entry, index) => {
    const item = document.createElement("article");
    item.className = "history-item";

    const classification = classifyBmi(entry.bmi);
    const statusClass = classification.className;

    item.innerHTML = `
      <div class="history-item__index">${index + 1}</div>
      <div class="history-item__meta">
        <strong>${formatDate(entry.timestamp)}</strong>
        <span>${entry.height.toFixed(2)} ${getText("historyUnitHeight")} · ${entry.weight.toFixed(1)} ${getText("historyUnitWeight")}</span>
      </div>
      <div class="history-item__value">
        <strong>${entry.bmi.toFixed(1)}</strong>
        <span class="${statusClass}">${classification.label}</span>
      </div>
    `;

    historyList.appendChild(item);
  });
}

function renderResult(entry) {
  const classification = classifyBmi(entry.bmi);

  emptyState.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  bmiValue.textContent = entry.bmi.toFixed(1);
  bmiState.textContent = classification.label;
  idealWeight.textContent = `${getText("idealWeightLabel")}: ${calculateIdealWeightRange(entry.height)}`;
  statusBadge.textContent = classification.short;
  statusBadge.className = `status-badge ${classification.className}`;
  summaryHeight.textContent = `${entry.height.toFixed(2)} ${getText("historyUnitHeight")}`;
  summaryWeight.textContent = `${entry.weight.toFixed(1)} ${getText("historyUnitWeight")}`;
  summaryStatus.textContent = classification.label;
  summaryStatus.className = classification.className;
  meterIndicator.style.left = getIndicatorPosition(entry.bmi);
  meterIndicator.classList.remove("is-animating");
  window.requestAnimationFrame(() => {
    meterIndicator.classList.add("is-animating");
    window.setTimeout(() => {
      meterIndicator.classList.remove("is-animating");
    }, 280);
  });
}

function createEntry(height, weight) {
  const bmi = weight / (height * height);
  const classification = classifyBmi(bmi);

  return {
    timestamp: Date.now(),
    height,
    weight,
    bmi,
    status: classification.label,
  };
}

function handleSubmit(event) {
  event.preventDefault();

  const height = Number.parseFloat(heightInput.value);
  const weight = Number.parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    return;
  }

  const entry = createEntry(height, weight);
  history.unshift(entry);
  saveHistory();
  renderResult(entry);
  renderHistory();
}

function resetCurrentView(options = {}) {
  if (!options.preserveForm) {
    bmiForm.reset();
  }

  resultPanel.classList.add("hidden");
  emptyState.classList.remove("hidden");
  statusBadge.textContent = getText("waitingState");
  statusBadge.className = "status-badge";
  meterIndicator.style.left = "8%";
}

function clearHistory() {
  history = [];
  saveHistory();
  renderHistory();
  resetCurrentView();
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    document.body.removeAttribute("data-theme");
    themeToggle.setAttribute("aria-pressed", "false");
  }

  themeToggle.setAttribute("aria-label", getText("ariaThemeToggle"));
  localStorage.setItem(THEME_KEY, theme);
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = getText("pageLang");
  localStorage.setItem(LANGUAGE_KEY, language);

  langEsButton.classList.toggle("is-active", language === "es");
  langEnButton.classList.toggle("is-active", language === "en");
  document.querySelector(".language-switch").setAttribute("aria-label", getText("ariaLanguageSelector"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = getText(key);
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    element.placeholder = getText(element.dataset.placeholderKey);
  });

  themeToggle.setAttribute("aria-label", getText("ariaThemeToggle"));
  renderHistory();

  if (history.length) {
    renderResult(history[0]);
  } else {
    resetCurrentView({ preserveForm: true });
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.error("Service worker registration failed", error);
      });
    });
  }
}

bmiForm.addEventListener("submit", handleSubmit);
resetButton.addEventListener("click", resetCurrentView);
clearHistoryButton.addEventListener("click", clearHistory);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});
langEsButton.addEventListener("click", () => applyLanguage("es"));
langEnButton.addEventListener("click", () => applyLanguage("en"));

initializeTheme();
applyLanguage(currentLanguage);
setupNumberInputStepper(heightInput, "1.72");
setupNumberInputStepper(weightInput, "20");
renderHistory();

if (history.length) {
  renderResult(history[0]);
}

registerServiceWorker();
