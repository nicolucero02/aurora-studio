import { InfoCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/data/content";

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Articles"
        title="Short-form content for programming, nutrition and recovery."
        copy="The article cards are mock content, but the structure is ready for category pages or dynamic routes."
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
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
