"use client";

import { useAppPreferences } from "@/components/app-provider";
import { BmiCalculator } from "@/components/bmi-calculator";
import { SectionHeading } from "@/components/section-heading";

export default function CalculatorsPage() {
  const { t } = useAppPreferences();

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={t.pages.calculators.eyebrow}
        title={t.pages.calculators.title}
        copy={t.pages.calculators.copy}
      />
      <BmiCalculator />
    </div>
  );
}
