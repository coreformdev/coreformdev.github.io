import { navItems, socialLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.14em] text-white">
            coreform
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Премиальные сайты, MVP и дашборды под ключ.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <nav className="flex flex-wrap gap-3" aria-label="Навигация в подвале">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl text-sm text-zinc-600">
        © {new Date().getFullYear()} coreform. Все права защищены.
      </div>
    </footer>
  );
}
