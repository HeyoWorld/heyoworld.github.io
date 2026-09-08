import React, { useRef, useState } from "react";
import { ContentData, Language } from "../types";
import { submitInquiry } from "../form";
export const Contact = ({
  content,
  services,
  lang,
}: {
  content: ContentData["contact"];
  services: ContentData["services"]["items"];
  lang: Language;
}) => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const busy = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") || "")) return;
    for (const key of ["name", "email", "message"]) {
      const field = form.elements.namedItem(key) as
        HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(
        field.value.trim()
          ? ""
          : lang === "zh"
            ? "请填写此项。"
            : "Please complete this field.",
      );
      if (!field.reportValidity()) return;
    }
    busy.current = true;
    setStatus("submitting");
    try {
      await submitInquiry(data, lang);
      form.reset();
      setStatus("success");
      requestAnimationFrame(() => resultRef.current?.focus());
    } catch {
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">{content.label}</p>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
          <div className="direct-email">
            <span>{content.direct}</span>
            <a href="mailto:hello@heyoworld.com">
              hello@heyoworld.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="form-panel">
          {status === "success" ? (
            <div
              className="success-panel"
              ref={resultRef}
              tabIndex={-1}
              role="status"
            >
              <span className="success-icon" aria-hidden="true">
                ✓
              </span>
              <h3>{content.success}</h3>
              <p>{content.successNote}</p>
              <button className="button" onClick={() => setStatus("idle")}>
                {content.again}
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              aria-busy={status === "submitting"}
              onInput={(e) => {
                const field = e.target as HTMLInputElement;
                if (field.setCustomValidity) field.setCustomValidity("");
              }}
            >
              <fieldset disabled={status === "submitting"}>
                <legend className="sr-only">{content.title}</legend>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">
                      {content.name}
                      <span aria-label={content.required}> *</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      {content.email}
                      <span aria-label={content.required}> *</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="service">{content.service}</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="">{content.choose}</option>
                    {services.map((s, i) => (
                      <option
                        key={i}
                        value={
                          [
                            "UK applications",
                            "Academic support",
                            "Study abroad preparation",
                          ][i]
                        }
                      >
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">
                    {content.message}
                    <span aria-label={content.required}> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={5000}
                    placeholder={content.placeholder}
                  />
                </div>
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="company-site">Leave this field empty</label>
                  <input
                    id="company-site"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <p className="form-note">{content.note}</p>
                <button type="submit" className="button submit-button">
                  {status === "submitting"
                    ? content.submitting
                    : content.submit}
                  <span aria-hidden="true">↗</span>
                </button>
              </fieldset>
              {status === "error" && (
                <p className="form-error" role="alert">
                  {content.error}
                </p>
              )}
              <p className="privacy-note">{content.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
