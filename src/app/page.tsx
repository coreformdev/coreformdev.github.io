import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { StackSection } from "@/components/sections/stack";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WorkSection } from "@/components/sections/work";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-dvh bg-[#07080b] text-zinc-100">
      <SiteHeader />
      <main>
        <HeroSection />
        <WorkSection />
        <TestimonialsSection />
        <ServicesSection />
        <ProcessSection />
        <StackSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
