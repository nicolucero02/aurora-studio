import Link from "next/link";

export function Hero() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="panel p-8 sm:p-10">
        <div className="max-w-2xl space-y-6">
          <p className="inline-flex rounded-full bg-coral/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-coral">
            Modern Fitness Platform
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            Build strength, consistency and better habits.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore guided workouts, exercise libraries, evidence-based articles and
            practical calculators in one responsive experience.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/workouts"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Start a Workout
            </Link>
            <Link
              href="/calculators"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Use BMI Calculator
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="panel animate-float p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Weekly streak
          </p>
          <p className="mt-4 text-5xl font-semibold text-ink">12</p>
          <p className="mt-2 text-sm text-slate-600">
            Active training sessions completed with balanced volume and recovery.
          </p>
        </div>
        <div className="panel p-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Focus areas
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Strength", "Mobility", "Hypertrophy", "Conditioning"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Programs designed to work across home, gym and hybrid routines.
          </p>
        </div>
      </div>
    </section>
  );
}
