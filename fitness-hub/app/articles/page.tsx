"use client";

import { useAppPreferences } from "@/components/app-provider";
import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export default function ArticlesPage() {
  const { t } = useAppPreferences();

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow={t.pages.articles.eyebrow}
        title={t.pages.articles.title}
        copy={t.pages.articles.copy}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {t.articles.map((article) => (
          <InfoCard
            key={article.title}
            title={article.title}
            description={article.description}
            badge={article.tag}
            meta={article.readTime}
          />
        ))}
      </section>
    </div>
  );
}
