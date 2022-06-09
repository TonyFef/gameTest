import { animate, getRandom } from "../modules/helpers";

export const buttonMover = (duration) => {
    const button = document.querySelector(".vjs-big-play-button");
    let windowWidthUsable;
    let windowHeightUsable;

    const windowWidth = window.outerWidth;
    console.log(windowWidth);

    if (windowWidth > 1400) {
        windowWidthUsable = window.outerWidth * 0.6;
        windowHeightUsable = window.outerHeight * 0.8;
    } else if (windowWidth > 800 && windowWidth <= 1400) {
        windowWidthUsable = window.outerWidth * 0.4;
        windowHeightUsable = window.outerHeight * 0.7;
    } else if (windowWidth > 500 && windowWidth <= 800) {
        windowWidthUsable = window.outerWidth * 0.4;
        windowHeightUsable = window.outerHeight * 0.5;
    } else if (windowWidth <= 500) {
        windowWidthUsable = window.outerWidth * 0.55;
        windowHeightUsable = window.outerHeight * 0.5;
    }

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
