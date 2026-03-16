const percentages = [60, 70, 75, 80, 85, 90, 95];
const loadPercentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];
const storageKey = "liftcalc-state-v2";
const bmiMarkerMax = 40;

const translations = {
  en: {
    heroTag: "Strength tools for lifters",
    eyebrow: "Precision for every set",
    heroTitle: "Train heavier with cleaner numbers.",
    heroText:
      "Calculate your estimated max, load the bar correctly, check BMI and plan training percentages from one focused dashboard.",
    heroPrimary: "Open calculators",
    heroSecondary: "Recent history",
    stat1Label: "Estimated 1RM",
    stat2Label: "Suggested working set",
    stat3Label: "BMI status",
    badge1: "1RM",
    badge2: "Plates",
    badge3: "Percentages",
    badge4: "BMI",
    feature1Kicker: "Fast",
    feature1Title: "Built for gym use",
    feature1Text: "Large inputs, immediate results and saved history for your next session.",
    feature2Kicker: "Practical",
    feature2Title: "Useful loading output",
    feature2Text: "Know exactly which plates to load on each side in kilograms or pounds.",
    feature3Kicker: "Adaptive",
    feature3Title: "App-like workflow",
    feature3Text: "Switch tools from a single panel, keep your language and theme preferences saved.",
    toolsEyebrow: "Core calculators",
    toolsTitle: "Four tools. One lifting workflow.",
    plateTab: "Plates",
    trainingTab: "Percentages",
    rmTitle: "1RM Calculator",
    rmChip: "Strength estimate",
    weightLabel: "Weight lifted",
    repsLabel: "Repetitions",
    rmResultLabel: "Estimated one-rep max",
    loadTableTitle: "Load percentage table",
    plateTitle: "Plate Calculator",
    plateChip: "Bar loading",
    targetWeightLabel: "Target weight",
    barWeightLabel: "Bar weight",
    platesPerSideLabel: "Plates per side",
    trainingTitle: "Training Percentages",
    trainingChip: "Programming aid",
    baseOneRmLabel: "Base 1RM",
    trainingTableTitle: "Suggested training weights",
    bmiTitle: "BMI Calculator",
    bmiChip: "Health snapshot",
    heightLabel: "Height",
    bmiWeightLabel: "Weight",
    bmiResultLabel: "Body mass index",
    idealWeightTitle: "Approximate ideal weight",
    idealWeightText: "Calculated with BMI 22 as a reference point.",
    bmiVisualTitle: "BMI range",
    bmiUnder: "Underweight",
    bmiNormal: "Normal",
    bmiOver: "Overweight",
    bmiObese: "Obesity",
    historyEyebrow: "Saved locally",
    historyTitle: "Recent history",
    historyEmpty: "Your recent calculations will appear here.",
    historyRm: "1RM",
    historyPlate: "Plate setup",
    historyTraining: "Training",
    historyBmi: "BMI",
    historyUnit: "Unit",
    historyTotal: "total",
    historyBar: "bar",
    bmiIdealPrefix: "Ideal weight",
    underweight: "Underweight",
    healthy: "Healthy weight",
    overweight: "Overweight",
    obesity: "Obesity",
  },
  es: {
    heroTag: "Herramientas de fuerza para lifters",
    eyebrow: "Precisión para cada serie",
    heroTitle: "Entrená más pesado con números más limpios.",
    heroText:
      "Calculá tu máximo estimado, cargá la barra correctamente, revisá tu BMI y planificá porcentajes de entrenamiento desde un solo panel.",
    heroPrimary: "Abrir calculadoras",
    heroSecondary: "Historial reciente",
    stat1Label: "1RM estimado",
    stat2Label: "Serie sugerida",
    stat3Label: "Estado BMI",
    badge1: "1RM",
    badge2: "Discos",
    badge3: "Porcentajes",
    badge4: "BMI",
    feature1Kicker: "Rápida",
    feature1Title: "Pensada para el gimnasio",
    feature1Text: "Inputs grandes, resultados inmediatos e historial guardado para tu próxima sesión.",
    feature2Kicker: "Práctica",
    feature2Title: "Carga útil de barra",
    feature2Text: "Sabé exactamente qué discos cargar por lado en kilogramos o libras.",
    feature3Kicker: "Flexible",
    feature3Title: "Flujo tipo app",
    feature3Text: "Cambiá de herramienta desde un solo panel y guardá idioma y tema.",
    toolsEyebrow: "Calculadoras principales",
    toolsTitle: "Cuatro herramientas. Un flujo real de entrenamiento.",
    plateTab: "Discos",
    trainingTab: "Porcentajes",
    rmTitle: "Calculadora de 1RM",
    rmChip: "Estimación de fuerza",
    weightLabel: "Peso levantado",
    repsLabel: "Repeticiones",
    rmResultLabel: "Máximo estimado a una repetición",
    loadTableTitle: "Tabla de porcentajes de carga",
    plateTitle: "Calculadora de discos",
    plateChip: "Carga de barra",
    targetWeightLabel: "Peso objetivo",
    barWeightLabel: "Peso de la barra",
    platesPerSideLabel: "Discos por lado",
    trainingTitle: "Porcentajes de entrenamiento",
    trainingChip: "Ayuda de programación",
    baseOneRmLabel: "1RM base",
    trainingTableTitle: "Pesos sugeridos de entrenamiento",
    bmiTitle: "Calculadora de BMI",
    bmiChip: "Referencia corporal",
    heightLabel: "Altura",
    bmiWeightLabel: "Peso",
    bmiResultLabel: "Índice de masa corporal",
    idealWeightTitle: "Peso ideal aproximado",
    idealWeightText: "Calculado usando BMI 22 como referencia.",
    bmiVisualTitle: "Rango BMI",
    bmiUnder: "Bajo peso",
    bmiNormal: "Normal",
    bmiOver: "Sobrepeso",
    bmiObese: "Obesidad",
    historyEyebrow: "Guardado local",
    historyTitle: "Historial reciente",
    historyEmpty: "Tus cálculos recientes aparecerán acá.",
    historyRm: "1RM",
    historyPlate: "Carga de discos",
    historyTraining: "Entrenamiento",
    historyBmi: "BMI",
    historyUnit: "Unidad",
    historyTotal: "total",
    historyBar: "barra",
    bmiIdealPrefix: "Peso ideal",
    underweight: "Bajo peso",
    healthy: "Peso saludable",
    overweight: "Sobrepeso",
    obesity: "Obesidad",
  },
};

const plateOptions = {
  kg: [25, 20, 15, 10, 5, 2.5, 1.25],
  lb: [55, 45, 35, 25, 10, 5, 2.5],
};

const state = loadState();

const elements = {
  languageToggle: document.querySelector("#languageToggle"),
  languageOptions: Array.from(document.querySelectorAll("[data-lang-option]")),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  liftWeight: document.querySelector("#liftWeight"),
  liftReps: document.querySelector("#liftReps"),
  oneRmResult: document.querySelector("#oneRmResult"),
  oneRmUnit: document.querySelector("#oneRmUnit"),
  loadTable: document.querySelector("#loadTable"),
  targetWeight: document.querySelector("#targetWeight"),
  barWeight: document.querySelector("#barWeight"),
  targetUnitLabel: document.querySelector("#targetUnitLabel"),
  barUnitLabel: document.querySelector("#barUnitLabel"),
  weightUnitLabel: document.querySelector("#weightUnitLabel"),
  trainingUnitLabel: document.querySelector("#trainingUnitLabel"),
  plateOutput: document.querySelector("#plateOutput"),
  platesPerSide: document.querySelector("#platesPerSide"),
  plateHelper: document.querySelector("#plateHelper"),
  baseOneRm: document.querySelector("#baseOneRm"),
  trainingTable: document.querySelector("#trainingTable"),
  historyGrid: document.querySelector("#historyGrid"),
  heroOneRm: document.querySelector("#heroOneRm"),
  heroUnit: document.querySelector("#heroUnit"),
  heroWorkingSet: document.querySelector("#heroWorkingSet"),
  heroBmiStatus: document.querySelector("#heroBmiStatus"),
  bmiHeight: document.querySelector("#bmiHeight"),
  bmiWeight: document.querySelector("#bmiWeight"),
  bmiResult: document.querySelector("#bmiResult"),
  bmiClassification: document.querySelector("#bmiClassification"),
  idealWeightResult: document.querySelector("#idealWeightResult"),
  bmiIndicator: document.querySelector("#bmiIndicator"),
  segments: Array.from(document.querySelectorAll(".segment")),
  toolTabs: Array.from(document.querySelectorAll(".tool-tab")),
  toolCards: Array.from(document.querySelectorAll(".tool-card")),
};

hydrateUi();
bindEvents();
renderAll();

function bindEvents() {
  elements.languageToggle.addEventListener("click", () => {
    state.language = state.language === "en" ? "es" : "en";
    persistState();
    renderTranslations();
    renderAll();
  });

  elements.themeToggle.addEventListener("click", () => {
    state.themePreference = resolveThemePreference() === "dark" ? "light" : "dark";
    applyTheme();
    persistState();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!state.themePreference) {
      applyTheme();
    }
  });

  [elements.liftWeight, elements.liftReps].forEach((input) =>
    input.addEventListener("input", () => {
      state.lastRm = {
        weight: toNumber(elements.liftWeight.value),
        reps: toNumber(elements.liftReps.value),
      };
      renderOneRm();
      saveRmHistory();
    }),
  );

  [elements.targetWeight, elements.barWeight].forEach((input) =>
    input.addEventListener("input", () => {
      state.lastPlate = {
        targetWeight: toNumber(elements.targetWeight.value),
        barWeight: toNumber(elements.barWeight.value),
        unit: state.unit,
      };
      renderPlateCalculator();
      savePlateHistory();
    }),
  );

  elements.baseOneRm.addEventListener("input", () => {
    state.lastTraining = {
      oneRm: toNumber(elements.baseOneRm.value),
      unit: state.unit,
    };
    renderTrainingPercentages();
    saveTrainingHistory();
  });

  [elements.bmiHeight, elements.bmiWeight].forEach((input) =>
    input.addEventListener("input", () => {
      state.lastBmi = {
        height: toNumber(elements.bmiHeight.value),
        weight: toNumber(elements.bmiWeight.value),
      };
      renderBmi();
      saveBmiHistory();
    }),
  );

  elements.segments.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.unit === state.unit) return;

      convertUnits(state.unit, button.dataset.unit);
      state.unit = button.dataset.unit;
      state.lastPlate.unit = state.unit;
      state.lastTraining.unit = state.unit;
      persistState();
      renderUnits();
      syncInputs();
      renderAll();
    });
  });

  elements.toolTabs.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTool(button.dataset.tool);
      persistState();
    });
  });
}

function hydrateUi() {
  syncInputs();
  renderTranslations();
  applyTheme();
  renderUnits();
  setActiveTool(state.activeTool);
}

function syncInputs() {
  elements.liftWeight.value = state.lastRm.weight;
  elements.liftReps.value = state.lastRm.reps;
  elements.targetWeight.value = state.lastPlate.targetWeight;
  elements.barWeight.value = state.lastPlate.barWeight;
  elements.baseOneRm.value = state.lastTraining.oneRm;
  elements.bmiHeight.value = state.lastBmi.height;
  elements.bmiWeight.value = state.lastBmi.weight;
}

function renderAll() {
  renderOneRm();
  renderPlateCalculator();
  renderTrainingPercentages();
  renderBmi();
  renderHistory();
}

function renderTranslations() {
  const copy = translations[state.language];
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });
  renderLanguageToggle();
}

function applyTheme() {
  const theme = resolveThemePreference();
  document.body.dataset.theme = theme;
  elements.themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
}

function renderLanguageToggle() {
  elements.languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === state.language);
  });
}

function resolveThemePreference() {
  if (state.themePreference) return state.themePreference;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function renderUnits() {
  const unit = state.unit;
  [
    elements.targetUnitLabel,
    elements.barUnitLabel,
    elements.weightUnitLabel,
    elements.trainingUnitLabel,
    elements.oneRmUnit,
    elements.heroUnit,
  ].forEach((node) => {
    node.textContent = unit;
  });
  elements.segments.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.unit === unit);
  });
}

function setActiveTool(tool) {
  state.activeTool = tool;
  elements.toolTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tool === tool);
    button.setAttribute("aria-selected", String(button.dataset.tool === tool));
  });
  elements.toolCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.panel === tool);
  });
}

function renderOneRm() {
  const weight = toNumber(elements.liftWeight.value);
  const reps = Math.max(1, toNumber(elements.liftReps.value));
  const oneRm = calculateOneRm(weight, reps);

  elements.oneRmResult.textContent = formatNumber(oneRm);
  elements.heroOneRm.textContent = formatNumber(oneRm);
  elements.heroWorkingSet.textContent = `${formatNumber(oneRm * 0.8)} ${state.unit}`;
  elements.loadTable.innerHTML = loadPercentages
    .map(
      (percent) => `
        <div class="table-row">
          <span>${percent}%</span>
          <strong>${formatNumber(oneRm * (percent / 100))} ${state.unit}</strong>
        </div>
      `,
    )
    .join("");
}

function renderPlateCalculator() {
  const targetWeight = toNumber(elements.targetWeight.value);
  const barWeight = toNumber(elements.barWeight.value);
  const result = calculatePlateLoad(targetWeight, barWeight, state.unit);
  const copy = translations[state.language];

  elements.platesPerSide.textContent = `${formatNumber(result.perSide)} ${state.unit}`;
  elements.plateOutput.innerHTML = result.plates.length
    ? result.plates.map(({ size, count }) => `<div class="plate-chip">${count} x ${formatNumber(size)} ${state.unit}</div>`).join("")
    : `<div class="plate-chip">0</div>`;

  if (result.isBelowBar) {
    elements.plateHelper.textContent = state.language === "es" ? "El peso objetivo es menor que el peso de la barra." : "Target weight is lower than the bar weight.";
  } else if (result.remainder > 0) {
    elements.plateHelper.textContent =
      state.language === "es"
        ? `Se muestra la carga más cercana posible. Peso restante no cubierto: ${formatNumber(result.remainder)} ${state.unit}`
        : `Closest possible load shown. Remaining unmatched weight: ${formatNumber(result.remainder)} ${state.unit}`;
  } else {
    elements.plateHelper.textContent =
      state.language === "es" ? "Cargá estos discos en cada lado de la barra." : "Load these plates on each side of the bar.";
  }
}

function renderTrainingPercentages() {
  const oneRm = toNumber(elements.baseOneRm.value);
  elements.trainingTable.innerHTML = percentages
    .map(
      (percent) => `
        <div class="table-row">
          <span>${percent}%</span>
          <strong>${formatNumber(oneRm * (percent / 100))} ${state.unit}</strong>
        </div>
      `,
    )
    .join("");
}

function renderBmi() {
  const result = calculateBmi(state.lastBmi.height, state.lastBmi.weight);
  const copy = translations[state.language];

  elements.bmiResult.textContent = formatNumber(result.bmi);
  elements.bmiClassification.textContent = copy[result.statusKey];
  elements.idealWeightResult.textContent = formatNumber(result.idealWeight);
  elements.heroBmiStatus.textContent = copy[result.statusKey];
  elements.bmiIndicator.style.left = `${(Math.min(result.bmi, bmiMarkerMax) / bmiMarkerMax) * 100}%`;
}

function renderHistory() {
  const copy = translations[state.language];
  if (!state.history.length) {
    elements.historyGrid.innerHTML = `<div class="empty-history">${copy.historyEmpty}</div>`;
    return;
  }

  elements.historyGrid.innerHTML = state.history
    .slice(0, 8)
    .map((item) => {
      if (item.type === "rm") {
        return `
          <article class="history-card">
            <div class="history-card-header">
              <h3>${copy.historyRm}</h3>
              <span class="history-tag">${item.unit}</span>
            </div>
            <p>${formatNumber(item.weight)} x ${item.reps}</p>
            <strong>${formatNumber(item.result)} ${item.unit}</strong>
          </article>
        `;
      }

      if (item.type === "plate") {
        const summary = item.plates.length ? item.plates.map(({ size, count }) => `${count}x${formatNumber(size)}`).join(" · ") : "0";
        return `
          <article class="history-card">
            <div class="history-card-header">
              <h3>${copy.historyPlate}</h3>
              <span class="history-tag">${item.unit}</span>
            </div>
            <p>${formatNumber(item.targetWeight)} ${copy.historyTotal} / ${formatNumber(item.barWeight)} ${copy.historyBar}</p>
            <strong>${summary}</strong>
          </article>
        `;
      }

      if (item.type === "training") {
        return `
          <article class="history-card">
            <div class="history-card-header">
              <h3>${copy.historyTraining}</h3>
              <span class="history-tag">${item.unit}</span>
            </div>
            <p>${copy.historyUnit}: ${item.unit}</p>
            <strong>1RM ${formatNumber(item.oneRm)} ${item.unit}</strong>
          </article>
        `;
      }

      return `
        <article class="history-card">
          <div class="history-card-header">
            <h3>${copy.historyBmi}</h3>
            <span class="history-tag">kg/cm</span>
          </div>
          <p>${formatNumber(item.height)} cm / ${formatNumber(item.weight)} kg</p>
          <strong>${formatNumber(item.bmi)} BMI · ${copy[item.statusKey]}</strong>
        </article>
      `;
    })
    .join("");
}

function calculateOneRm(weight, reps) {
  if (!weight || !reps) return 0;
  return weight * (1 + reps / 30);
}

function calculatePlateLoad(targetWeight, barWeight, unit) {
  if (targetWeight < barWeight) {
    return { perSide: 0, plates: [], remainder: 0, isBelowBar: true };
  }

  let remaining = (targetWeight - barWeight) / 2;
  const plates = [];

  for (const size of plateOptions[unit]) {
    const count = Math.floor(remaining / size);
    if (count > 0) {
      plates.push({ size, count });
      remaining = roundToNearest(remaining - count * size, 2);
    }
  }

  return {
    perSide: (targetWeight - barWeight) / 2,
    plates,
    remainder: remaining,
    isBelowBar: false,
  };
}

function calculateBmi(heightCm, weightKg) {
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? weightKg / (heightM * heightM) : 0;
  const idealWeight = heightM > 0 ? heightM * heightM * 22 : 0;
  let statusKey = "underweight";

  if (bmi >= 30) {
    statusKey = "obesity";
  } else if (bmi >= 25) {
    statusKey = "overweight";
  } else if (bmi >= 18.5) {
    statusKey = "healthy";
  }

  return {
    bmi,
    idealWeight,
    statusKey,
  };
}

function saveRmHistory() {
  const weight = state.lastRm.weight;
  const reps = Math.max(1, state.lastRm.reps);
  pushHistory("rm", {
    weight,
    reps,
    result: calculateOneRm(weight, reps),
    unit: state.unit,
  });
  persistState();
  renderHistory();
}

function savePlateHistory() {
  const { targetWeight, barWeight } = state.lastPlate;
  const result = calculatePlateLoad(targetWeight, barWeight, state.unit);
  pushHistory("plate", {
    targetWeight,
    barWeight,
    perSide: result.perSide,
    plates: result.plates,
    unit: state.unit,
  });
  persistState();
  renderHistory();
}

function saveTrainingHistory() {
  pushHistory("training", {
    oneRm: state.lastTraining.oneRm,
    unit: state.unit,
  });
  persistState();
  renderHistory();
}

function saveBmiHistory() {
  const result = calculateBmi(state.lastBmi.height, state.lastBmi.weight);
  pushHistory("bmi", {
    height: state.lastBmi.height,
    weight: state.lastBmi.weight,
    bmi: result.bmi,
    idealWeight: result.idealWeight,
    statusKey: result.statusKey,
  });
  persistState();
  renderHistory();
}

function pushHistory(type, payload) {
  const serialized = JSON.stringify({ type, ...payload });
  const lastEntry = state.history[0];
  if (lastEntry && JSON.stringify({ type: lastEntry.type, ...sanitizeHistoryEntry(lastEntry) }) === serialized) {
    return;
  }

  state.history.unshift({
    type,
    ...payload,
    createdAt: Date.now(),
  });
  state.history = state.history.slice(0, 8);
}

function sanitizeHistoryEntry(entry) {
  const { createdAt, type, ...rest } = entry;
  return rest;
}

function loadState() {
  const defaults = {
    language: "es",
    themePreference: null,
    unit: "kg",
    activeTool: "rm",
    lastRm: { weight: 100, reps: 5 },
    lastPlate: { targetWeight: 100, barWeight: 20, unit: "kg" },
    lastTraining: { oneRm: 120, unit: "kg" },
    lastBmi: { height: 175, weight: 67 },
    history: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      ...defaults,
      ...saved,
      lastRm: { ...defaults.lastRm, ...saved?.lastRm },
      lastPlate: { ...defaults.lastPlate, ...saved?.lastPlate },
      lastTraining: { ...defaults.lastTraining, ...saved?.lastTraining },
      lastBmi: { ...defaults.lastBmi, ...saved?.lastBmi },
      history: Array.isArray(saved?.history) ? saved.history : [],
    };
  } catch {
    return defaults;
  }
}

function persistState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      language: state.language,
      themePreference: state.themePreference,
      unit: state.unit,
      activeTool: state.activeTool,
      lastRm: state.lastRm,
      lastPlate: state.lastPlate,
      lastTraining: state.lastTraining,
      lastBmi: state.lastBmi,
      history: state.history,
    }),
  );
}

function convertUnits(fromUnit, toUnit) {
  state.lastRm.weight = convertValue(state.lastRm.weight, fromUnit, toUnit);
  state.lastPlate.targetWeight = convertValue(state.lastPlate.targetWeight, fromUnit, toUnit);
  state.lastPlate.barWeight = convertValue(state.lastPlate.barWeight, fromUnit, toUnit);
  state.lastTraining.oneRm = convertValue(state.lastTraining.oneRm, fromUnit, toUnit);
}

function convertValue(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) return value;
  const converted = fromUnit === "kg" ? value * 2.20462 : value / 2.20462;
  return roundToNearest(converted, 1);
}

function toNumber(value) {
  return Number.parseFloat(value) || 0;
}

function formatNumber(value) {
  return new Intl.NumberFormat(state.language, {
    minimumFractionDigits: value % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(value);
}

function roundToNearest(value, precision) {
  return Number(value.toFixed(precision));
}
