import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { selectedWork } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

function CasePreview({ index }: { index: number }) {
  if (index === 1) {
    return (
      <div className="grid h-full min-h-56 grid-cols-[0.72fr_1fr] gap-3">
        <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3">
          <div className="mb-4 h-2 w-16 rounded-full bg-white/35" />
          <div className="space-y-2">
            {["w-24", "w-20", "w-28", "w-16"].map((width) => (
              <div key={width} className={cn("h-7 rounded-lg bg-white/[0.07]", width)} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(143,216,255,.26),transparent_38%),rgba(255,255,255,.045)] p-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-white/[0.08]" />
            <div className="h-16 rounded-xl bg-sky-100/25" />
            <div className="h-16 rounded-xl bg-white/[0.08]" />
          </div>
          <div className="mt-3 h-28 rounded-xl border border-white/10 bg-zinc-950/45" />
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="grid h-full min-h-56 grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
          <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(145deg,rgba(255,255,255,.2),rgba(143,216,255,.12),rgba(255,255,255,.04))]" />
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/45 p-3">
            <div className="h-3 w-20 rounded-full bg-white/50" />
            <div className="mt-3 h-2 w-28 rounded-full bg-white/16" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-sky-100/10 p-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-white/[0.08]" />
              <div className="h-10 rounded-lg bg-white/[0.12]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-56 rounded-[1.2rem] border border-white/10 bg-zinc-950/45 p-3">
      <div className="flex gap-1.5 border-b border-white/10 pb-3">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/14" />
        <span className="size-2 rounded-full bg-white/10" />
      </div>
      <div className="grid grid-cols-[1fr_0.72fr] gap-3 pt-3">
        <div className="space-y-3">
          <div className="h-24 rounded-xl bg-[linear-gradient(135deg,rgba(143,216,255,.22),rgba(255,255,255,.06))]" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-xl bg-white/[0.06]" />
            <div className="h-14 rounded-xl bg-white/[0.09]" />
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="h-2 w-16 rounded-full bg-white/30" />
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-white/12" />
            <div className="h-2 w-3/4 rounded-full bg-white/12" />
            <div className="h-2 w-5/6 rounded-full bg-white/12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Избранные работы"
            description="Коммерческие концепции, собранные как реальные продуктовые поверхности: лендинги, интерфейсы, commerce-сценарии и сайты с бэкендом."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {selectedWork.map((work, index) => (
            <Reveal
              key={work.title}
              delay={index * 0.04}
              className={cn(
                "group",
                index === 0 ? "lg:col-span-6" : "lg:col-span-3",
                index === 3 || index === 4 ? "lg:col-span-3" : "",
              )}
            >
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-sky-100/35 hover:bg-white/[0.055] hover:shadow-[0_24px_90px_rgba(143,216,255,0.09)]",
                  index === 0 ? "lg:grid lg:grid-cols-[0.86fr_1.14fr] lg:gap-6 lg:p-6" : "",
                )}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(143,216,255,0.12),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="font-mono text-xs text-zinc-500">{work.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {work.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                      {work.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={withBasePath(work.href)}
                    className="mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-white transition duration-300 hover:border-sky-100/45 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98]"
                  >
                    Открыть сайт
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className={cn("mt-8", index === 0 ? "lg:mt-0" : "")}>
                  <CasePreview index={index} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
