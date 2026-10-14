"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Recent work
        </h2>
        <p className="mt-4 max-w-md text-muted">
          Apps we have designed, built, and launched for clients.
        </p>

        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`flex flex-col gap-8 md:items-center md:gap-14 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <motion.div
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ clipPath: "inset(0 0 0% 0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface md:w-3/5"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="md:w-2/5"
              >
                <p className="text-sm text-muted">{project.date}</p>
                <h3 className="mt-1 font-display text-3xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-1 text-muted">{project.subtitle}</p>
                <p className="mt-5 leading-relaxed text-fg/80">
                  {project.description}
                </p>

                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5 text-sm">
                  <div>
                    <dt className="text-muted">Platform</dt>
                    <dd className="mt-1 font-semibold">{project.platform}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Duration</dt>
                    <dd className="mt-1 font-semibold">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Budget</dt>
                    <dd className="mt-1 font-semibold">{project.price}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-night transition hover:brightness-110"
                  >
                    View live app
                  </a>
                )}
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}