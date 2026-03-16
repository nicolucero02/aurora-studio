const STORAGE_KEY = "bmi-calc-history";
const LANGUAGE_KEY = "bmi-calc-language";
const THEME_KEY = "bmi-calc-theme";
const HISTORY_LIMIT = 6;
const BMI_MIN = 16;
const BMI_MAX = 40;
const DEFAULT_HEIGHT = 1.72;

const translations = {
  es: {
    pageTitle: "BMI Calc",
    heroEyebrow: "Health metric experience",
    heroSubtitle: "Una calculadora de IMC con look premium para entender tu rango corporal de forma clara, visual y rápida.",
    heroCardLabel: "¿Qué es el BMI?",
    heroCardText: "El Body Mass Index o IMC estima la relación entre peso y altura. Es una referencia útil para detectar si estás por debajo, dentro o por encima del rango habitual.",
    calculatorTitle: "Calculadora",
    calculatorText: "Ingresá tus datos para obtener el cálculo y una lectura visual de tu resultado.",
    heightLabel: "Altura",
    weightLabel: "Peso",
    meterUnit: "m",
    kgUnit: "kg",
    calculateButton: "Calcular BMI",
    resultTitle: "Resultado",
    resultText: "Tu BMI, tu clasificación y tu peso ideal estimado aparecen aquí.",
    waitingData: "Esperando datos",
    visualScale: "Escala visual",
    notCalculated: "Sin calcular",
    underweightShort: "Bajo",
    healthyShort: "Normal",
    overweightShort: "Sobrepeso",
    obesityShort: "Obesidad",
    scaleGuide16: "inicio visual de la escala",
    scaleGuide185: "desde aca deja de ser bajo peso",
    scaleGuide25: "desde aca empieza sobrepeso",
    scaleGuide30: "desde aca empieza obesidad",
    scaleGuide40: "parte alta de la escala visual",
    guideTitle: "Guia de referencia BMI",
    guideText: "Una lectura rapida de los puntos clave que usa la escala visual del resultado.",
    guideValue: "Valor",
    guideMeaning: "Significado",
    classificationLabel: "Clasificación",
    idealWeightLabel: "Peso ideal estimado",
    historyTitle: "Historial reciente",
    historyText: "Los últimos cálculos se guardan en tu navegador para que puedas compararlos.",
    historyEmpty: "Todavía no hay cálculos guardados.",
    historyHeight: "Altura",
    historyWeight: "Peso",
    historyBmi: "BMI",
    historyStatus: "Estado",
    categories: {
      underweight: "Bajo peso",
      healthy: "Peso saludable",
      overweight: "Sobrepeso",
      obesity: "Obesidad"
    },
    messages: {
      missing: "Completá altura y peso para calcular tu BMI.",
      invalidHeight: "Ingresá una altura válida entre 1.20 m y 2.30 m.",
      invalidWeight: "Ingresá un peso válido entre 20 kg y 300 kg."
    },
    placeholders: {
      weight: "Ingresa tu peso"
    },
    themeLight: "Claro",
    themeDark: "Oscuro"
  },
  en: {
    pageTitle: "BMI Calc",
    heroEyebrow: "Health metric experience",
    heroSubtitle: "A premium BMI calculator built to read your body range quickly, clearly, and with a polished visual experience.",
    heroCardLabel: "What is BMI?",
    heroCardText: "Body Mass Index estimates the relationship between weight and height. It is a useful reference to see whether you fall below, within, or above a common range.",
    calculatorTitle: "Calculator",
    calculatorText: "Enter your data to get the calculation and a visual reading of your result.",
    heightLabel: "Height",
    weightLabel: "Weight",
    meterUnit: "m",
    kgUnit: "kg",
    calculateButton: "Calculate BMI",
    resultTitle: "Result",
    resultText: "Your BMI, classification, and estimated ideal weight appear here.",
    waitingData: "Waiting for data",
    visualScale: "Visual scale",
    notCalculated: "Not calculated",
    underweightShort: "Low",
    healthyShort: "Normal",
    overweightShort: "Overweight",
    obesityShort: "Obesity",
    scaleGuide16: "visual start of the scale",
    scaleGuide185: "low weight ends here",
    scaleGuide25: "overweight starts here",
    scaleGuide30: "obesity starts here",
    scaleGuide40: "upper visual range",
    guideTitle: "BMI Reference Guide",
    guideText: "A quick read of the key points used by the visual result scale.",
    guideValue: "Value",
    guideMeaning: "Meaning",
    classificationLabel: "Classification",
    idealWeightLabel: "Estimated ideal weight",
    historyTitle: "Recent history",
    historyText: "Your latest calculations are stored in the browser so you can compare them later.",
    historyEmpty: "No calculations saved yet.",
    historyHeight: "Height",
    historyWeight: "Weight",
    historyBmi: "BMI",
    historyStatus: "Status",
    categories: {
      underweight: "Underweight",
      healthy: "Healthy weight",
      overweight: "Overweight",
      obesity: "Obesity"
    },
    messages: {
      missing: "Enter height and weight to calculate your BMI.",
      invalidHeight: "Enter a valid height between 1.20 m and 2.30 m.",
      invalidWeight: "Enter a valid weight between 20 kg and 300 kg."
    },
    placeholders: {
      weight: "Enter your weight"
    },
    themeLight: "Light",
    themeDark: "Dark"
  }
};

const form = document.getElementById("bmi-form");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const formMessage = document.getElementById("form-message");

const resultCard = document.getElementById("result-card");
const resultBadge = document.getElementById("result-badge");
const resultValue = document.getElementById("result-value");
const resultCategory = document.getElementById("result-category");
const idealWeight = document.getElementById("ideal-weight");
const scaleStatus = document.getElementById("scale-status");
const scaleMarker = document.getElementById("scale-marker");
const historyList = document.getElementById("history-list");

const langButtons = document.querySelectorAll("[data-language]");
const themeButtons = document.querySelectorAll("[data-theme]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentLanguage = getStoredLanguage();
let currentTheme = getStoredTheme();
let lastResult = null;

function getStoredLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  return stored === "en" ? "en" : "es";
}

function getStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return systemPrefersDark.matches ? "dark" : "light";
}

function getCopy() {
  return translations[currentLanguage];
}

function getCategory(bmi) {
  const copy = getCopy();

  if (bmi < 18.5) {
    return { key: "underweight", label: copy.categories.underweight, className: "underweight" };
  }

  if (bmi < 25) {
    return { key: "healthy", label: copy.categories.healthy, className: "healthy" };
  }

  if (bmi < 30) {
    return { key: "overweight", label: copy.categories.overweight, className: "overweight" };
  }

  return { key: "obesity", label: copy.categories.obesity, className: "obesity" };
}

function formatNumber(value, decimals = 1) {
  const locale = currentLanguage === "es" ? "es-AR" : "en-US";

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScaleMarker(bmi) {
  const bounded = clamp(bmi, BMI_MIN, BMI_MAX);
  const percentage = ((bounded - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100;
  scaleMarker.style.left = `${percentage}%`;
  scaleMarker.classList.remove("is-hidden");
}

function loadHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function saveToHistory(entry) {
  const current = loadHistory();
  const next = [entry, ...current].slice(0, HISTORY_LIMIT);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

function renderHistory() {
  const entries = loadHistory();
  const copy = getCopy();

  if (!entries.length) {
    historyList.innerHTML = `<p class="history-empty">${copy.historyEmpty}</p>`;
    return;
  }

  historyList.innerHTML = entries.map((entry) => {
    const category = translations[currentLanguage].categories[entry.categoryKey] || entry.category;

    return `
      <article class="history-item">
        <div>
          <span class="history-item-label">${copy.historyHeight}</span>
          <strong>${formatNumber(entry.height, 2)} ${copy.meterUnit}</strong>
        </div>
        <div>
          <span class="history-item-label">${copy.historyWeight}</span>
          <strong>${formatNumber(entry.weight)} ${copy.kgUnit}</strong>
        </div>
        <div>
          <span class="history-item-label">${copy.historyBmi}</span>
          <strong>${formatNumber(entry.bmi)}</strong>
        </div>
        <div>
          <span class="history-item-label">${copy.historyStatus}</span>
          <strong>${category}</strong>
        </div>
      </article>
    `;
  }).join("");
}

function renderResult(result) {
  const category = getCategory(result.bmi);
  const copy = getCopy();

  resultValue.textContent = formatNumber(result.bmi);
  resultCategory.textContent = category.label;
  idealWeight.textContent = `${formatNumber(result.ideal)} ${copy.kgUnit}`;
  scaleStatus.textContent = category.label;
  resultBadge.textContent = category.label;
  resultBadge.className = `status-badge ${category.className}`;
  resultCard.classList.remove("is-empty");
  resultCard.classList.add("is-ready");
  updateScaleMarker(result.bmi);
}

function validateInputs(height, weight) {
  const copy = getCopy();

  if (!height || !weight) {
    return copy.messages.missing;
  }

  if (height < 1.2 || height > 2.3) {
    return copy.messages.invalidHeight;
  }

  if (weight < 20 || weight > 300) {
    return copy.messages.invalidWeight;
  }

  return "";
}

function applyTranslations() {
  const copy = getCopy();

  document.documentElement.lang = currentLanguage;
  document.title = copy.pageTitle;
  heightInput.placeholder = formatNumber(DEFAULT_HEIGHT, 2);
  weightInput.placeholder = copy.placeholders.weight;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  document.getElementById("theme-light").textContent = copy.themeLight;
  document.getElementById("theme-dark").textContent = copy.themeDark;
  updateToggleStates();
  renderHistory();

  if (lastResult) {
    renderResult(lastResult);
  } else {
    resultBadge.textContent = copy.waitingData;
    scaleStatus.textContent = copy.notCalculated;
    idealWeight.textContent = `-- ${copy.kgUnit}`;
    scaleMarker.classList.add("is-hidden");
  }
}

function primeHeightInput() {
  if (!heightInput.value) {
    heightInput.value = DEFAULT_HEIGHT.toFixed(2);
  }
}

function updateToggleStates() {
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === currentLanguage);
  });

  themeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.theme === currentTheme);
  });
}

function applyTheme(theme, persist = true) {
  currentTheme = theme;
  document.body.dataset.theme = theme;

  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }

  updateToggleStates();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyTranslations();
  });
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme, true);
  });
});

heightInput.addEventListener("focus", primeHeightInput, { once: false });

systemPrefersDark.addEventListener("change", (event) => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(event.matches ? "dark" : "light", false);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = Number.parseFloat(heightInput.value);
  const weight = Number.parseFloat(weightInput.value);
  const validationMessage = validateInputs(height, weight);

  formMessage.textContent = validationMessage;

  if (validationMessage) {
    return;
  }

  const bmi = weight / (height * height);
  const ideal = height * height * 22;
  const category = getCategory(bmi);

  lastResult = { bmi, ideal };
  renderResult(lastResult);

  saveToHistory({
    height,
    weight,
    bmi,
    categoryKey: category.key,
    category: category.label
  });

  renderHistory();
});

applyTheme(currentTheme, false);
applyTranslations();
scaleMarker.classList.add("is-hidden");
