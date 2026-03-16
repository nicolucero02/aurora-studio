import { BmiCalculator } from "@/components/bmi-calculator";
import { SectionHeading } from "@/components/section-heading";

export default function CalculatorsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Calculators"
        title="Simple tools to turn raw numbers into useful training context."
        copy="This starter includes a BMI calculator and leaves space to add calories, macros or one-rep-max tools later."
      />
      <BmiCalculator />
    </div>
  );
}
