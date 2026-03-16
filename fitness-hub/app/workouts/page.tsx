"use client";

import { useAppPreferences } from "@/components/app-provider";
import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export default function WorkoutsPage() {
  const { t } = useAppPreferences();

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={t.pages.workouts.eyebrow}
        title={t.pages.workouts.title}
        copy={t.pages.workouts.copy}
      />
      <section className="grid gap-4 md:grid-cols-2">
        {t.workouts.map((workout) => (
          <InfoCard
            key={workout.title}
            title={workout.title}
            description={workout.description}
            badge={workout.goal}
            meta={workout.duration}
          />
        ))}
      </section>
    </div>
  );
}
