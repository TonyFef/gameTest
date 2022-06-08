import { animate, getRandom } from "../modules/helpers";

export const buttonMover = (duration) => {
    const button = document.querySelector(".vjs-big-play-button");

    const windowWidthUsable = window.outerWidth * 0.6;
    const windowHeightUsable = window.outerHeight * 0.8;

    let buttonMovingInterval = setInterval(() => {
        animate({
            duration: duration,
            timing(timeFraction) {
                return timeFraction;
            },
            draw: function (progress) {
                button.style.top = getRandom(-windowHeightUsable, windowHeightUsable) * progress + "px";
                button.style.left = getRandom(-windowWidthUsable, windowWidthUsable) * progress + "px";
            },
        });
    }, 1250);

    button.addEventListener(
        "click",
        () => {
            clearInterval(buttonMovingInterval);
            console.log("hello");
        },
        { once: true }
    );
};
