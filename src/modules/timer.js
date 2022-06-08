import { animate } from "./helpers";
// import { modal } from "./modal";

export const timer = (duration) => {
    const text = document.querySelectorAll(".percentage");
    // const video = document.querySelector(".vjs-tech");
    // console.log(duration);

    // video.addEventListener("ended", () => {
    //     console.log("hello");
    // });
    const leftScale = document.querySelector(".left-scale__path");
    const rightScale = document.querySelector(".right-scale__path");

    animate({
        duration: duration * 1000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            const percentsRemain = Math.round(100 - progress * 100);
            text.forEach((item) => {
                item.textContent = percentsRemain;
                // leftScale.fill = progress;
                if (percentsRemain < 1) {
                    // modal();
                    // video.stop();
                }
                // console.log(Math.round(100 - progress * 100));
            });
        },
    });
};
