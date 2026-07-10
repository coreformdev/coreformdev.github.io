import { Plus } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              title="Частые вопросы"
              description="Коротко о цене, сроках, коде и поддержке. Если чего-то не хватает — напишите, отвечу лично."
            />
            <a
              href="#contact"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-5 text-sm font-medium text-white transition duration-300 hover:border-sky-100/45 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98]"
            >
              Задать свой вопрос
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.25rem] border border-white/10 bg-white/[0.035] px-5 py-1 transition duration-300 open:border-sky-100/30 open:bg-white/[0.055] hover:border-white/20 sm:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/12 text-sky-100 transition duration-300 group-open:rotate-45 group-open:border-sky-100/45 group-open:bg-sky-100/10">
                    <Plus size={16} weight="bold" />
                  </span>
                </summary>
                <p className="pb-5 pr-12 text-sm leading-6 text-zinc-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
