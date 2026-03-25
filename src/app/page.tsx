import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ChatWidget } from "@/components/chat/chat-widget";
import { LanguageProvider } from "@/components/providers/language-provider";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ContactSection } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <LanguageProvider>
      <>
        <SiteHeader />
        <main className="pb-8">
          <Hero />
          <ServicesSection />
          <ProcessSection />
          <CaseStudiesSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <ChatWidget />
      </>
    </LanguageProvider>
  );
}
