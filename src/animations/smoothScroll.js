import { ScrollSmoother } from "./gsap";

export function smoothScroll(ref) {
    return ScrollSmoother.create({
        ref,
        content: ref.firstElementChild,
        smooth:1.5,
        effects: true
    });
}