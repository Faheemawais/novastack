"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1fr_1.4fr]">
        <div className="self-start md:sticky md:top-28">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            What we build
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            From the first screen to the App Store listing, one team handles the
            whole build.
          </p>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {site.services.map((s) => (
            <motion.li
              key={s.title}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="py-7"
            >
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-muted">
                {s.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}