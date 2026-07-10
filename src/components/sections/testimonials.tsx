import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Что говорят клиенты"
            description="Основатели, продуктовые команды и владельцы малого бизнеса, для которых я запускал сайты и веб-продукты."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.05}
              className={cn(index === 0 ? "sm:col-span-2" : "")}
            >
              <figure
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-sky-100/35 hover:bg-white/[0.055] sm:p-7",
                  index === 0 &&
                    "bg-[radial-gradient(circle_at_16%_10%,rgba(143,216,255,0.14),transparent_38%),rgba(255,255,255,0.035)]",
                )}
              >
                <Quotes
                  size={40}
                  weight="fill"
                  className="absolute right-6 top-6 text-white/[0.06] transition duration-500 group-hover:text-sky-100/15"
                />
                <div>
                  <div className="flex gap-1 text-amber-200" aria-hidden>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={15} weight="fill" />
                    ))}
                  </div>
                  <blockquote
                    className={cn(
                      "mt-5 text-pretty leading-7 text-zinc-200",
                      index === 0 ? "text-lg sm:text-xl sm:leading-8" : "text-base",
                    )}
                  >
                    {item.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] font-mono text-sm font-medium text-sky-100">
                    {item.initials}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-white">{item.name}</span>
                    <span className="block text-zinc-500">
                      {item.role} · {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
