import { ArrowUpRight, PaperPlaneTilt, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { contactMethods } from "@/data/content";

const methodIcons = {
  Telegram: PaperPlaneTilt,
  Почта: EnvelopeSimple,
} as const;

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
              Опишите задачу в двух словах — за 20 минут разберём цель и я скажу срок и цену. Первая консультация бесплатна и ни к чему не обязывает.
            </p>

            <div className="mt-8 grid gap-3">
              {contactMethods.map((method) => {
                const Icon = methodIcons[method.label as keyof typeof methodIcons];
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/45 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-sky-100/35 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-sky-100">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">
                        {method.value}
                      </span>
                      <span className="block truncate text-xs text-zinc-500">
                        {method.hint}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-zinc-500 transition duration-300 group-hover:text-sky-100"
                    />
                  </a>
                );
              })}
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
