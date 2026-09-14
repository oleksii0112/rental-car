"use client";

import { useEffect, useState } from "react";
import css from "./ScrollToTop.module.css";

const SHOW_AFTER_PX = 500;
const SCROLL_DURATION_MS = 500;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const startY = window.scrollY;
    if (startY === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startY * (1 - eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      className={`${css.button} ${isVisible ? css.visible : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg className={css.icon} width="18" height="10" aria-hidden="true">
        <use href="/sprite.svg#icon-chevron-up" />
      </svg>
    </button>
  );
}
