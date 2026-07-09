import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_16%_12%,rgba(143,216,255,.16),transparent_32%),rgba(255,255,255,.035)] p-5 shadow-[0_30px_120px_rgba(0,0,0,.3)] sm:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:p-10">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Есть проект на горизонте?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              Отправьте короткий бриф, и я помогу превратить его в понятный, аккуратный и функциональный веб-продукт.
            </p>
            <div className="mt-8">
              <MagneticButton href="#contact">Начать проект</MagneticButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
