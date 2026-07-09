"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { budgetRanges, projectTypes } from "@/data/content";

type SubmitState = "idle" | "success" | "error";

const telegramUsername = "ekyousuk";

const initialForm = {
  name: "",
  contact: "",
  projectType: "Лендинг",
  budgetRange: "30 000-70 000 ₽",
  description: "",
};

function buildTelegramMessage(form: typeof initialForm) {
  return [
    "Привет! Хочу обсудить проект.",
    "",
    `Имя: ${form.name.trim()}`,
    `Контакт: ${form.contact.trim()}`,
    `Тип проекта: ${form.projectType}`,
    `Бюджет: ${form.budgetRange}`,
    "",
    "Описание:",
    form.description.trim(),
  ].join("\n");
}

function buildTelegramLink(message: string) {
  return `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}&profile`;
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.contact.trim() || !form.description.trim()) {
      setState("error");
      setMessage("Заполните имя, контакт и описание проекта.");
      return;
    }

    const telegramLink = buildTelegramLink(buildTelegramMessage(form));
    window.location.href = telegramLink;
    setState("success");
    setMessage("Открываю Telegram с готовым текстом брифа.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="form-field"
            required
          />
        </Field>
        <Field label="Telegram или Email" htmlFor="contact">
          <input
            id="contact"
            name="contact"
            autoComplete="email"
            value={form.contact}
            onChange={(event) => setForm({ ...form, contact: event.target.value })}
            className="form-field"
            required
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Тип проекта" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={(event) => setForm({ ...form, projectType: event.target.value })}
            className="form-field"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Бюджет" htmlFor="budgetRange">
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={(event) => setForm({ ...form, budgetRange: event.target.value })}
            className="form-field"
          >
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Описание проекта" htmlFor="description">
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={(event) => setForm({ ...form, description: event.target.value })}
          className="form-field min-h-36 resize-y"
          required
        />
      </Field>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-100 px-6 text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
      >
        Написать в Telegram
        <PaperPlaneTilt size={17} weight="bold" />
      </button>

      {message ? (
        <p
          className={[
            "rounded-2xl border px-4 py-3 text-sm",
            state === "success"
              ? "border-sky-100/30 bg-sky-100/10 text-sky-50"
              : "border-red-300/30 bg-red-400/10 text-red-100",
          ].join(" ")}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-zinc-200" htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );
}
