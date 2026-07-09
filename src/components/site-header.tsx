"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { navItems } from "@/data/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/62 px-4 shadow-[0_16px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:px-5">
        <a
          href="#top"
          className="font-mono text-[0.78rem] font-medium tracking-[0.14em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
          aria-label="К началу страницы"
        >
          DEV/STUDIO
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition duration-300 hover:bg-white/[0.055] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98] md:inline-flex"
        >
          Начать проект
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 md:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.25rem] border border-white/10 bg-zinc-950/92 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="grid gap-1" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-zinc-200 transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 min-h-12 rounded-full bg-sky-100 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
            >
              Начать проект
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
