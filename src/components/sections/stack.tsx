import { stackGroups } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function StackSection() {
  return (
    <section id="stack" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Технический стек"
            description="Рабочий инструментарий для фронтенда, бэкенд-функциональности, интеграций и надежного деплоя."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {stackGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="min-h-64 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-sky-100/30 hover:bg-white/[0.055]">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:border-sky-100/45 hover:bg-sky-100/10 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
