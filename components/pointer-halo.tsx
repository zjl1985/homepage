"use client";
import { useReducedMotion } from "@/lib/use-reduced-motion";


import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Decorative feedback only; the native pointer remains visible. */
export function PointerHalo() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const visibleRef = useRef(false);
  const interactiveRef = useRef(false);
  const px = useMotionValue(-100);
  const py = useMotionValue(-100);
  const x = useSpring(px, { stiffness: 500, damping: 35, mass: .45 });
  const y = useSpring(py, { stiffness: 500, damping: 35, mass: .45 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, [reduce]);

  useEffect(() => {
    if (!enabled || reduce) return;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      px.set(event.clientX); py.set(event.clientY);
      if (!visibleRef.current) { visibleRef.current = true; setVisible(true); }
      const target = event.target;
      const next = target instanceof Element && Boolean(target.closest("a, button, summary, [role=button]"));
      if (next !== interactiveRef.current) { interactiveRef.current = next; setInteractive(next); }
    };
    const hide = () => { visibleRef.current = false; interactiveRef.current = false; setVisible(false); setInteractive(false); };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => { window.removeEventListener("pointermove", move); document.removeEventListener("pointerleave", hide); window.removeEventListener("blur", hide); };
  }, [enabled, reduce, px, py]);

  if (!enabled || reduce) return null;
  return <motion.span aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[80] size-5 rounded-full border border-accent" style={{ x, y, translateX: "-50%", translateY: "-50%" }} animate={{ opacity: visible ? (interactive ? .4 : .7) : 0, scale: interactive ? 1.65 : 1 }} transition={{ duration: .2 }} />;
}
