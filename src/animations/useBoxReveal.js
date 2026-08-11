import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./gsap";
import { EASE, DUR } from "./config";

export function useBoxReveal() {
  const ref = useRef();

  useGSAP(() => {
    gsap.from(ref.current, 
    {
      y: -100,
      opacity: 0,
      duration: DUR.slow,
      ease: EASE,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      })      
    }, {scope: ref});

  return ref;
}