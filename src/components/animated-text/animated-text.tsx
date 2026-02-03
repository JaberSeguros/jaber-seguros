"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { forwardRef, useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  scrollTriggerStart?: string;
  /** "words" animates each word; "lines" animates each line. Default: "words" */
  type?: "lines" | "words";
}

function setRef<T>(ref: React.Ref<T> | undefined, value: T | null) {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as React.MutableRefObject<T | null>).current = value;
}

export const AnimatedText = forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      children,
      className,
      as: Component = "p",
      scrollTriggerStart = "top 100%",
      type = "words",
    },
    ref,
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const textEl = textRef.current;
      const triggerEl = wrapperRef.current;
      if (!textEl || !triggerEl) return;

      const isLines = type === "lines";

      const split = SplitText.create(textEl, {
        type: isLines ? "lines" : "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          const chunks = isLines ? self.lines : self.words;
          return gsap.from(chunks, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: isLines ? 0.15 : 0.05,
            scrollTrigger: {
              trigger: triggerEl,
              start: scrollTriggerStart,
              toggleActions: "play none none none",
            },
          });
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => {
          t.kill();
        });
      };
    }, [scrollTriggerStart, type]);

    return (
      <div
        ref={(el) => {
          (
            wrapperRef as React.MutableRefObject<HTMLDivElement | null>
          ).current = el;
          setRef(ref, el);
        }}
      >
        {/* Polymorphic Component: ref is HTMLElement at runtime; each tag expects its own ref type */}
        {/* @ts-expect-error RefObject<HTMLElement> not assignable to Ref<HTMLParagraphElement> etc. for dynamic tag */}
        <Component ref={textRef} className={className}>
          {children}
        </Component>
      </div>
    );
  },
);

AnimatedText.displayName = "AnimatedText";
