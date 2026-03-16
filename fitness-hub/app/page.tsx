import Link from "next/link";
import { Hero } from "@/components/hero";
import { InfoCard, MetricCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { articles, exercises, featuredStats, workouts } from "@/data/content";

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <Hero />

      <section className="grid gap-4 md:grid-cols-3">
        {featuredStats.map((stat) => (
          <MetricCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            accent={stat.accent}
          />
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Explore"
          title="Everything you need for training in one place."
          copy="A compact overview of the exercise library, training plans and articles available in this starter project."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Exercises",
              description: `${exercises.length} mock exercise entries with categories, muscles and skill level.`,
              badge: "Library",
              meta: "Browse movements",
            },
            {
              title: "Workouts",
              description: `${workouts.length} sample programs for strength, hypertrophy and general fitness.`,
              badge: "Plans",
              meta: "Follow routines",
            },
            {
              title: "Articles",
              description: `${articles.length} fitness reads covering programming, nutrition and recovery.`,
              badge: "Learn",
              meta: "Read practical guides",
            },
          ].map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="panel grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-coral">
            Tools
          </p>
          <h2 className="section-title">Check your BMI and track basic metrics.</h2>
          <p className="section-copy">
            The calculators section includes a ready-to-use BMI calculator built with
            client-side interactivity.
          </p>
        </div>
        <Link
          href="/calculators"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Open Calculators
        </Link>
      </section>
    </div>
  );
}
