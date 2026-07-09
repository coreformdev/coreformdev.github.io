import { processSteps } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section id="process" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Как я работаю"
            description="Управляемый путь от первого брифа до рабочего релиза, где структура появляется раньше скорости."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="sticky top-28 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm leading-6 text-zinc-400">
                Процесс удерживает визуальное направление, технические решения и поставку в одной логике.
              </p>
              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-2/3 rounded-full bg-sky-100/80" />
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-sky-100/0 via-sky-100/30 to-sky-100/0 sm:block" />
            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="relative rounded-[1.4rem] border border-white/10 bg-[#090b10] p-5 transition duration-300 hover:border-sky-100/30 hover:bg-[#0d1118] sm:pl-16">
                    <div className="mb-5 flex size-10 items-center justify-center rounded-full border border-white/12 bg-zinc-950 font-mono text-sm text-sky-100 sm:absolute sm:left-0 sm:top-5">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
