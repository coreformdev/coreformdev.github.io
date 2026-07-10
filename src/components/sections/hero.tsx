import { ArrowDownRight, BracketsCurly, Database, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { HeroReveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { stats } from "@/data/content";

const heroCards = [
  { title: "Лендинг", meta: "визуальная система", icon: BracketsCurly },
  { title: "Дашборд", meta: "продуктовый UI", icon: Database },
  { title: "Бэкенд API", meta: "серверная логика", icon: BracketsCurly },
  { title: "Деплой", meta: "готово к запуску", icon: RocketLaunch },
];

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_12%,rgba(143,216,255,0.18),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(111,97,255,0.13),transparent_28%),linear-gradient(180deg,#07080b_0%,#0a0d12_50%,#07080b_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto grid min-h-[calc(100dvh-6rem)] max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.28fr_0.72fr] lg:py-10 xl:grid-cols-[1.38fr_0.72fr]">
        <div className="max-w-4xl">
          <HeroReveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-sky-100">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
              </span>
              Свободен для 1-2 проектов в этом месяце
            </p>
          </HeroReveal>

          <HeroReveal delay={0.08}>
            <h1 className="max-w-[16ch] text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:max-w-[17ch] lg:text-[3.9rem] xl:text-[4.35rem]">
              Сайты и веб-продукты, которые{" "}
              <span className="text-sky-100">приводят клиентов</span>, а не просто красиво выглядят.
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
              Премиальные лендинги, MVP и дашборды под ключ: сильный дизайн, настоящий бэкенд и запуск от 1 недели. Фиксированная цена и сроки — до старта работы.
            </p>
          </HeroReveal>

          <HeroReveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#contact">Обсудить проект бесплатно</MagneticButton>
              <MagneticButton href="#work" variant="secondary">
                Смотреть работы
              </MagneticButton>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.32}>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-4 text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </HeroReveal>
        </div>

        <HeroReveal delay={0.2} className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[27rem]">
            <div className="absolute -inset-6 rounded-[2rem] bg-sky-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-medium text-white">Отвечаю в течение пары часов</p>
                  <p className="mt-1 text-xs text-zinc-500">Первая консультация — бесплатно</p>
                </div>
                <ArrowDownRight size={22} className="text-sky-100" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {heroCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="group rounded-[1.1rem] border border-white/10 bg-zinc-950/45 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky-100/35 hover:bg-white/[0.075]"
                    >
                      <div className="mb-9 flex items-center justify-between">
                        <Icon size={22} className="text-sky-100/90" />
                        <span className="font-mono text-[0.68rem] text-zinc-600">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white">{card.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{card.meta}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-[1.1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(143,216,255,0.16),rgba(255,255,255,0.035)_55%,rgba(120,114,255,0.1))] p-4">
                <div className="grid grid-cols-[1fr_0.68fr] gap-3">
                  <div className="space-y-2">
                    <div className="h-3 w-28 rounded-full bg-white/75" />
                    <div className="h-2 w-40 rounded-full bg-white/20" />
                    <div className="h-2 w-32 rounded-full bg-white/12" />
                  </div>
                  <div className="grid grid-cols-3 items-end gap-1.5">
                    <div className="h-10 rounded-t-md bg-sky-100/35" />
                    <div className="h-16 rounded-t-md bg-sky-100/75" />
                    <div className="h-7 rounded-t-md bg-white/18" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroReveal>
      </div>
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/16 to-transparent" />
    </section>
  );
}
