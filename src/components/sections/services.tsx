import {
  Browser,
  ChartLineUp,
  Database,
  PlugsConnected,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const serviceDetails = [
  {
    icon: Browser,
    signal: "Оффер · первый экран · заявка",
    detail: "Для запусков, продуктов и экспертных услуг",
    visual: "landing",
  },
  {
    icon: Database,
    signal: "Авторизация · данные · рабочий сценарий",
    detail: "Минимальный продукт без временной архитектуры",
    visual: "mvp",
  },
  {
    icon: ChartLineUp,
    signal: "Таблицы · аналитика · роли",
    detail: "Интерфейс для регулярной работы команды",
    visual: "dashboard",
  },
  {
    icon: Storefront,
    signal: "Позиционирование · услуги · лиды",
    detail: "Коммерческий сайт, который легко расширять",
    visual: "website",
  },
  {
    icon: PlugsConnected,
    signal: "API · формы · интеграции",
    detail: "Серверная часть без декоративной имитации",
    visual: "backend",
  },
];

const serviceLayouts = [
  "lg:col-span-7 lg:row-span-2 lg:min-h-[34rem]",
  "lg:col-span-5 lg:min-h-[16.5rem]",
  "lg:col-span-5 lg:min-h-[16.5rem]",
  "lg:col-span-6 lg:min-h-[20rem]",
  "lg:col-span-6 lg:min-h-[20rem]",
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Что я делаю"
            description="Сфокусированная веб-разработка для команд, которым важны дизайн, фронтенд, бэкенд и уверенный запуск."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.04}
              className={serviceLayouts[index]}
            >
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const detail = serviceDetails[index];
  const Icon = detail.icon;
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "group relative h-full min-h-80 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090b10] p-5 transition duration-500 hover:-translate-y-1 hover:border-sky-100/35 hover:bg-[#0d1118] hover:shadow-[0_24px_90px_rgba(143,216,255,0.08)] sm:p-6",
        isFeatured && "bg-[radial-gradient(circle_at_24%_16%,rgba(143,216,255,0.16),transparent_34%),#090b10]",
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_32%,rgba(143,216,255,0.08))] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-sky-100">
            <Icon size={22} />
          </span>
          <div>
            <p className="font-mono text-xs text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-xs text-zinc-500">{service.label}</p>
          </div>
        </div>
        <span className="hidden rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500 transition duration-300 group-hover:border-sky-100/35 group-hover:text-sky-100 sm:inline-flex">
          {detail.detail}
        </span>
      </div>

      <div className={cn("mt-10", isFeatured ? "max-w-xl" : "max-w-md")}>
        <h3
          className={cn(
            "text-2xl font-semibold tracking-tight text-white",
            isFeatured && "text-3xl sm:text-4xl",
          )}
        >
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {detail.signal.split(" · ").map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-400"
          >
            {item}
          </span>
        ))}
      </div>

      <div className={cn("mt-8", isFeatured ? "lg:absolute lg:inset-x-6 lg:bottom-6" : "")}>
        <ServiceVisual variant={detail.visual} featured={isFeatured} />
      </div>
    </article>
  );
}

function ServiceVisual({
  variant,
  featured,
}: {
  variant: string;
  featured?: boolean;
}) {
  if (variant === "landing") {
    return (
      <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-zinc-950/55 p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/30" />
            <span className="size-2 rounded-full bg-white/18" />
            <span className="size-2 rounded-full bg-white/12" />
          </div>
          <span className="font-mono text-[0.65rem] text-zinc-600">поток заявки</span>
        </div>
        <div className="grid gap-3 pt-4 sm:grid-cols-[1fr_0.72fr]">
          <div className="space-y-3">
            <div className="h-4 w-2/3 rounded-full bg-white/70" />
            <div className="h-3 w-full rounded-full bg-white/18" />
            <div className="h-3 w-4/5 rounded-full bg-white/12" />
            <div className="mt-5 flex gap-2">
              <div className="h-9 w-28 rounded-full bg-sky-100/85" />
              <div className="h-9 w-24 rounded-full border border-white/12" />
            </div>
          </div>
          <div className="min-h-28 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(143,216,255,.28),transparent_42%),rgba(255,255,255,.045)]" />
        </div>
      </div>
    );
  }

  if (variant === "dashboard") {
    return (
      <div className="grid grid-cols-3 items-end gap-2 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-3">
        <div className="h-14 rounded-xl bg-white/[0.08]" />
        <div className="h-24 rounded-xl bg-sky-100/35" />
        <div className="h-[4.5rem] rounded-xl bg-white/[0.12]" />
      </div>
    );
  }

  if (variant === "backend") {
    return (
      <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-3">
        <div className="grid grid-cols-[0.7fr_1fr_0.7fr] items-center gap-2">
          <div className="h-12 rounded-2xl bg-white/[0.06]" />
          <div className="h-16 rounded-2xl border border-sky-100/25 bg-sky-100/10" />
          <div className="h-12 rounded-2xl bg-white/[0.06]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-2 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-3",
        featured ? "grid-cols-3" : "grid-cols-2",
      )}
    >
      <div className="h-12 rounded-xl bg-white/[0.08]" />
      <div className="h-12 rounded-xl bg-white/[0.12]" />
      {featured ? <div className="h-12 rounded-xl bg-sky-100/25" /> : null}
    </div>
  );
}
