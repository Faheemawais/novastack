"use client";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

/* A stack of your project banners that fans out on load and tilts with the mouse. */
function Stack() {
  const items = projects.slice(0, 3);
  const n = items.length;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 120,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className="relative aspect-[5/4] w-full"
    >
      {items.map((p, d) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, scale: 0.9, opacity: 0, rotate: 0 }}
          animate={{
            x: d * 28,
            y: d * -28,
            scale: 1 - d * 0.04,
            opacity: 1,
            rotate: d * 1.5,
          }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 16,
            delay: 0.5 + (n - 1 - d) * 0.14,
          }}
          style={{ zIndex: n - d }}
          className="absolute bottom-0 left-0 aspect-[16/9] w-[82%] overflow-hidden rounded-2xl border border-line shadow-2xl"
        >
          <Image
            src={p.image}
            alt={`${p.title} app preview`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
            priority={d === 0}
          />
          <div className="absolute inset-0 bg-night" style={{ opacity: d * 0.3 }} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            {site.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 + i * 0.12,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3.5 font-semibold text-night transition hover:brightness-110"
            >
              See our work
            </a>
            <a
              href={site.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-7 py-3.5 font-semibold transition hover:border-accent"
            >
              Hire us on Fiverr
            </a>
          </motion.div>
        </div>

        <Stack />
      </div>
    </section>
  );
}