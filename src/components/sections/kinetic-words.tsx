"use client";

import { motion, useReducedMotion } from "motion/react";

const WORDS = [
  "zamówienia",
  "magazyn",
  "zwroty",
  "faktury",
  "marketplace",
  "kurierzy",
  "reklamacje",
  "preordery",
  "BOK",
] as const;

const CHAOS: ReadonlyArray<{ x: number; y: number; rotate: number }> = [
  { x: -180, y: -120, rotate: -14 },
  { x: 220, y: -180, rotate: 10 },
  { x: -260, y: 40, rotate: -6 },
  { x: 260, y: 80, rotate: 16 },
  { x: -100, y: 190, rotate: -20 },
  { x: 160, y: -40, rotate: 7 },
  { x: -220, y: -30, rotate: 12 },
  { x: 140, y: 230, rotate: -10 },
  { x: -60, y: -220, rotate: 22 },
];

const ROW_HEIGHT = 44;

export function KineticWords() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative h-[400px] w-full overflow-hidden select-none md:h-[420px]"
    >
      {/* Vertical guide line — editorial anchor for the stack */}
      <motion.span
        className="bg-border absolute top-1/2 left-1/2 h-[280px] w-px -translate-x-1/2 -translate-y-1/2 md:h-[360px]"
        initial={reduceMotion ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
      />
      {WORDS.map((word, i) => {
        const chaos = CHAOS[i];
        const targetY = (i - (WORDS.length - 1) / 2) * ROW_HEIGHT;
        const isAccent = word === "BOK" || word === "zamówienia";

        return (
          <motion.div
            key={word}
            className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xl tracking-tight whitespace-nowrap uppercase"
            style={{ color: isAccent ? "var(--accent)" : "var(--foreground)" }}
            initial={
              reduceMotion
                ? { opacity: 1, x: 0, y: targetY, rotate: 0 }
                : { opacity: 0, x: chaos.x, y: chaos.y, rotate: chaos.rotate }
            }
            animate={{ opacity: 1, x: 0, y: targetY, rotate: 0 }}
            transition={{
              delay: 0.35 + i * 0.07,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
}
