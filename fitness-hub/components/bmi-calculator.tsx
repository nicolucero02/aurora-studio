"use client";

import { useMemo, useState } from "react";
import { useAppPreferences } from "@/components/app-provider";

function getBmiCategory(
  bmi: number,
  labels: {
    underweight: string;
    normal: string;
    overweight: string;
    obesity: string;
  },
) {
  if (bmi < 18.5) return labels.underweight;
  if (bmi < 25) return labels.normal;
  if (bmi < 30) return labels.overweight;
  return labels.obesity;
}

export function BmiCalculator() {
  const { t } = useAppPreferences();
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
      category: getBmiCategory(bmi, t.bmi.categories),
    };
  }, [height, weight, t.bmi.categories]);

  return (
    <div className="panel grid gap-8 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
      <div className="space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            {t.bmi.eyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-text-strong">
            {t.bmi.title}
          </h3>
        </div>
        <p className="text-sm leading-6 text-text-soft">{t.bmi.copy}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-text-main">{t.bmi.height}</span>
            <input
              type="number"
              min="1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              className="w-full rounded-2xl border border-border bg-surface-subtle px-4 py-3 text-text-strong outline-none transition focus:border-brand focus:bg-panel-strong"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-text-strong">{t.bmi.weight}</span>
            <input
              type="number"
              min="1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className="w-full rounded-2xl border border-border bg-surface-subtle px-4 py-3 text-text-strong outline-none transition focus:border-brand focus:bg-panel-strong"
            />
          </label>
        </div>
      </div>
      <div className="rounded-[28px] border border-border bg-[#0f172a] p-6 text-white shadow-[0_20px_50px_rgba(2,6,23,0.26)] dark:bg-[#111827]">
        <p className="text-sm uppercase tracking-[0.24em] text-white/60">{t.bmi.result}</p>
        {result ? (
          <>
            <p className="mt-6 text-6xl font-semibold">{result.bmi}</p>
            <p className="mt-3 text-xl text-brand">{result.category}</p>
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              {t.bmi.ranges.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </>
        ) : (
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
            {t.bmi.empty}
          </p>
        )}
      </div>
    </div>
  );
}
