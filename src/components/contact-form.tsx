"use client";

import { CheckCircle, EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { budgetRanges, projectTypes } from "@/data/content";

type SubmitState = "idle" | "success" | "error";

const telegramUsername = "coreformdev";
const contactEmail = "coreformdev@proton.me";

const initialForm = {
  name: "",
  contact: "",
  projectType: "Лендинг",
  budgetRange: "До 20 000 ₽",
  description: "",
};

type FormValues = typeof initialForm;
type FieldErrors = Partial<Record<"name" | "contact" | "description", string>>;

function validate(form: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Как к вам обращаться?";
  if (!form.contact.trim()) errors.contact = "Оставьте Telegram или email для ответа";
  if (form.description.trim().length < 10)
    errors.description = "Пара слов о задаче — так я быстрее пойму объём";
  return errors;
}

function buildMessage(form: FormValues) {
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
  return `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
}

function buildMailtoLink(message: string) {
  const subject = "Заявка на проект — coreform";
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<SubmitState>("idle");

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof FieldErrors];
        return next;
      });
    }
  }

  function submit(channel: "telegram" | "email") {
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    const message = buildMessage(form);
    const link =
      channel === "telegram" ? buildTelegramLink(message) : buildMailtoLink(message);
    window.open(link, channel === "telegram" ? "_blank" : "_self");
    setState("success");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit("telegram");
  }

  if (state === "success") {
    return (
      <div className="grid gap-5 rounded-3xl border border-sky-100/25 bg-sky-100/[0.07] p-8 text-center">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-sky-100/15 text-sky-100">
          <CheckCircle size={30} weight="fill" />
        </span>
        <div className="grid gap-2">
          <h3 className="text-xl font-semibold text-zinc-50">Бриф готов к отправке</h3>
          <p className="mx-auto max-w-sm text-pretty text-sm leading-6 text-zinc-300">
            Я открыл окно с заполненным сообщением. Если оно не появилось — напишите
            напрямую, я отвечаю обычно в течение пары часов.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={buildTelegramLink(buildMessage(form))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sky-100 px-5 text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-white"
          >
            Telegram
            <PaperPlaneTilt size={16} weight="bold" />
          </a>
          <a
            href={buildMailtoLink(buildMessage(form))}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-zinc-100 transition duration-300 hover:border-white/40"
          >
            {contactEmail}
            <EnvelopeSimple size={16} weight="bold" />
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setState("idle");
          }}
          className="mx-auto text-xs font-medium text-zinc-400 underline-offset-4 transition hover:text-zinc-200 hover:underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Имя" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Например, Алексей"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="form-field"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Telegram или Email" htmlFor="contact" error={errors.contact}>
          <input
            id="contact"
            name="contact"
            autoComplete="email"
            placeholder="@username или mail@example.com"
            value={form.contact}
            onChange={(event) => update("contact", event.target.value)}
            className="form-field"
            aria-invalid={Boolean(errors.contact)}
          />
        </Field>
      </div>

      <ChipGroup
        label="Тип проекта"
        options={projectTypes}
        value={form.projectType}
        onChange={(value) => update("projectType", value)}
      />

      <ChipGroup
        label="Бюджет"
        options={budgetRanges}
        value={form.budgetRange}
        onChange={(value) => update("budgetRange", value)}
      />

      <Field label="Описание проекта" htmlFor="description" error={errors.description}>
        <textarea
          id="description"
          name="description"
          placeholder="Что нужно сделать, для кого, есть ли референсы или дедлайн"
          value={form.description}
          onChange={(event) => update("description", event.target.value)}
          className="form-field min-h-32 resize-y"
          aria-invalid={Boolean(errors.description)}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-sky-100 px-6 text-sm font-semibold text-zinc-950 transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98]"
        >
          Написать в Telegram
          <PaperPlaneTilt size={17} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => submit("email")}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-zinc-100 transition duration-300 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 active:scale-[0.98]"
        >
          На почту
          <EnvelopeSimple size={17} weight="bold" />
        </button>
      </div>

      {state === "error" ? (
        <p
          className="rounded-2xl border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm text-red-100"
          role="status"
          aria-live="polite"
        >
          Проверьте выделенные поля — и отправляем.
        </p>
      ) : (
        <p className="text-xs leading-5 text-zinc-400">
          Отвечаю обычно в течение пары часов. Первая консультация бесплатна и ни к чему
          не обязывает.
        </p>
      )}
    </form>
  );
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="mb-1 text-sm font-medium text-zinc-200">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={active}
              className={[
                "min-h-10 rounded-full border px-4 text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200",
                active
                  ? "border-sky-100/60 bg-sky-100/15 text-sky-50"
                  : "border-white/12 text-zinc-300 hover:border-white/30 hover:text-zinc-100",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-zinc-200" htmlFor={htmlFor}>
      {label}
      {children}
      {error ? (
        <span className="text-xs font-normal text-red-200">{error}</span>
      ) : null}
    </label>
  );
}
