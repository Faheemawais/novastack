"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-line py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Tell us what you want to build
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Send a short description of your idea and we will reply by email.
            You can also message us directly on Fiverr.
          </p>
          <p className="mt-8">
            <a
              href={`mailto:${site.email}`}
              className="font-semibold underline decoration-accent underline-offset-4"
            >
              {site.email}
            </a>
          </p>
          <a
            href={site.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:border-accent"
          >
            Order on Fiverr
          </a>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <label className="block">
            <span className="text-sm text-muted">Name</span>
            <input name="name" required className={field} />
          </label>
          <label className="block">
            <span className="text-sm text-muted">Email</span>
            <input name="email" type="email" required className={field} />
          </label>
          <label className="block">
            <span className="text-sm text-muted">About your project</span>
            <textarea
              name="message"
              required
              rows={5}
              className={`${field} resize-none`}
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-accent py-3.5 font-semibold text-night transition hover:brightness-110 disabled:opacity-60"
          >
            {status === "sending" ? "Sending" : "Send message"}
          </button>
          <div role="status" aria-live="polite" className="text-sm">
            {status === "sent" && (
              <p className="text-emerald-400">
                Message sent. We will reply to your email soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400">
                Message not sent. Check your connection and try again, or email
                us at {site.email}.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}