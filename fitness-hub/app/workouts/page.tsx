import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { workouts } from "@/data/content";

export default function WorkoutsPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Workouts"
        title="Training plans with clear goals and time commitment."
        copy="Each mock plan is structured so you can later replace the local content with CMS or API-backed data."
      />
      <section className="grid gap-4 md:grid-cols-2">
        {workouts.map((workout) => (
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
