import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "./gsap";
import { EASE, DUR } from "./config";

export function useTextReveal(type = "chars") {
  const ref = useRef();

  useGSAP(() => {
    if (!ref.current) return;

    const split = SplitText.create(ref.current, {
      type,
      aria: "hidden",
      charsClass: "char",
      wordsClass: "word",
      linesClass: "line",
    });

    gsap.set(split[type], {
      display: "inline-block",
      fontSize: "inherit",
      lineHeight: "inherit",
    });

    gsap.from(split[type],
      {
        opacity: 0,
        duration: DUR.slow,
        ease: EASE,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      });

      return () => split.revert();
    }, {scope: ref});

  return ref;
}