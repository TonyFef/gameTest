import { animate } from "./helpers";

export const timer = (duration) => {
    const text = document.querySelectorAll(".percentage");

    animate({
        duration: duration * 1000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            text.forEach((item) => {
                item.textContent = Math.round(100 - progress * 100);
            });
        },
    });
};
