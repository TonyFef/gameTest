import { animate } from "./helpers";

export const timer = (duration) => {
    const text = document.querySelectorAll(".percentage");
    const leftScale = document.getElementById("left-scale__path");
    const rightScale = document.querySelector(".right-scale__path");

    animate({
        duration: duration * 1000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            const percentsRemain = Math.round(100 - progress * 100);
            text.forEach((item) => {
                if (percentsRemain < 30) {
                    item.style.color = "red";
                    leftScale.style.stroke = "red";
                    rightScale.style.stroke = "red";
                }
                item.textContent = percentsRemain;
            });
        },
    });
};
