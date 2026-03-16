"use client";

import { useAppPreferences } from "@/components/app-provider";
import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export default function ExercisesPage() {
  const { t } = useAppPreferences();

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={t.pages.exercises.eyebrow}
        title={t.pages.exercises.title}
        copy={t.pages.exercises.copy}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {t.exercises.map((exercise) => (
          <InfoCard
            key={exercise.name}
            title={exercise.name}
            description={exercise.description}
            badge={exercise.category}
            meta={`${exercise.muscles} • ${exercise.level}`}
          />
        ))}
      </section>
    </div>
  );
}
