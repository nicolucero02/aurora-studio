import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { exercises } from "@/data/content";

export default function ExercisesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Exercises"
        title="Movement library for strength, muscle and control."
        copy="Mock exercise data designed for browsing, filtering and future API integration."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {exercises.map((exercise) => (
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
