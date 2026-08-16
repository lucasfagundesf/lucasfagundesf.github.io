import { gsap } from "./gsap";
import { EASE, DUR } from "./config";

export function scrollTimeLine(ref) {
  const line = ref.querySelector(".line");
  const items = ref.querySelectorAll(".inicio");
  const secondTopics = items[1].querySelectorAll(".topic");
  const thirdTopics = items[2].querySelectorAll(".topic");
  const circles = ref.querySelectorAll(".circle");
  const firstContent = items[0].querySelectorAll("h2,  p");
  const secondContent = items[1].querySelectorAll("h2, p");
  const thirdContent = items[2].querySelectorAll("h2,  p");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: "top top",
      end: "15%",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  gsap.set(line, {
    scaleX: 0,
    transformOrigin: "left center",
  });
  gsap.set(items, {
    opacity: 0,
    y: 30,
  });
  gsap.set([...secondTopics, ...thirdTopics], {
    opacity: 0,
    y: 20,
  });
  gsap.set(circles, {
    scale: 0,
  });
  gsap.set([...firstContent, ...secondContent, ...thirdContent], {
    opacity: 0,
    y: 20,
  });

  // Primeito Item
  tl.to(items[0], {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    ease: EASE,
  });
  // Circulo aparece
  tl.to(
    circles[0],
    {
      scale: 1,
      duration: DUR.fast,
      ease: "back.out(1.7)",
    },
    "<",
  );

  //Titulo e desc
  tl.to(firstContent, {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    ease: EASE,
  });

  //Linha começa a aparecer
  tl.to(line, {
    scaleX: 0.5,
    duration: DUR.slow,
    ease: EASE,
  });
  //Segundo Item
  tl.to(items[1], {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    ease: EASE,
  });
  tl.to(circles[1], {
    scale: 1,
    duration: DUR.fast,
    ease: "back.out(1.7)",
  });
  tl.to(secondContent, {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    stagger: 0.1,
    ease: EASE,
  });
  tl.to(secondTopics, {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    stagger: 0.15,
    ease: EASE,
  });
  tl.to(line, {
    scaleX: 1,
    duration: DUR.slow,
    ease: EASE,
  });
  tl.to(items[2], {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: EASE,
  });
  tl.to(circles[2], {
    scale: 1,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
  tl.to(thirdContent, {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    stagger: 0.1,
    ease: EASE,
  });
  tl.to(thirdTopics, {
    opacity: 1,
    y: 0,
    duration: DUR.fast,
    stagger: 0.15,
    ease: EASE,
  });

  return tl;
}
