import { Reveal } from "@/components/ui/reveal";

const focus = [
  "Премиальные лендинги",
  "MVP-интерфейсы",
  "Системы дашбордов",
  "Сайты с бэкендом",
];

const principles = [
  "Быстрое выполнение",
  "Чистая архитектура",
  "Сильный визуальный вкус",
  "Поставка, готовая к запуску",
];

export function AboutSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Острый визуал, быстрая загрузка и поддерживаемые системы.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-7 text-zinc-400 sm:text-lg">
              <p>
                Я создаю веб-продукты, которые выглядят сильно, быстро загружаются и остаются поддерживаемыми. Фокус простой: чистые интерфейсы, уверенная фронтенд-реализация, настоящая бэкенд-функциональность и процесс, который быстро превращает идеи в запущенные продукты.
              </p>
              <p>
                Структура важна для меня так же, как визуал. Компоненты, поток данных, адаптивное поведение, производительность и деплой закладываются в работу с первого дня.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <InfoPanel title="Текущий фокус" items={focus} />
            <InfoPanel title="Принципы" items={principles} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-zinc-300"
          >
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}
