"use client";

import { useMemo, useState } from "react";

function getBmiCategory(bmi: number) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

export function BmiCalculator() {
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");

  const result = useMemo(() => {
    const heightCm = Number(height);
    const weightKg = Number(weight);

    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
      return null;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    return {
      bmi: bmi.toFixed(1),
      category: getBmiCategory(bmi),
    };
  }, [height, weight]);

  return (
    <div className="panel grid gap-8 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-coral">
            BMI Calculator
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
            Estimate your body mass index in seconds.
          </h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          Enter your height in centimeters and your body weight in kilograms to
          calculate your BMI using standard metric units.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Height (cm)</span>
            <input
              type="number"
              min="1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-coral focus:bg-white"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Weight (kg)</span>
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-coral focus:bg-white"
            />
          </label>
        </div>
      </div>
      <div className="rounded-[28px] bg-ink p-6 text-white">
        <p className="text-sm uppercase tracking-[0.24em] text-white/60">Result</p>
        {result ? (
          <>
            <p className="mt-6 text-6xl font-semibold">{result.bmi}</p>
            <p className="mt-3 text-xl text-mint">{result.category}</p>
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <p>Underweight: below 18.5</p>
              <p>Normal weight: 18.5 to 24.9</p>
              <p>Overweight: 25 to 29.9</p>
              <p>Obesity: 30 or higher</p>
            </div>
          </>
        ) : (
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
            Enter valid height and weight values to calculate your BMI.
          </p>
        )}
      </div>
    </div>
  );
}
