import { animate } from "../modules/helpers";

export const buttonMover = (duration) => {
    const button = document.querySelector(".vjs-big-play-button");
    // console.log(button);

    // console.log(duration);

    // setTimeout(() => {
    //     const rightString = button.style.bottom.toString();
    //     const rightNumber = rightString.substring(0, rightString.length - 2);
    //     console.log(rightNumber);
    // }, 3000);

    // animate({
    //     duration: duration * 1000,
    //     timing(timeFraction) {
    //         return timeFraction;
    //     },
    //     draw(progress) {
    //         const string = button.style.right.toString();
    //         const rightNumber = string.substring(0, string.length - 2);

    //         if (rightNumber < 1200) {
    //             button.style.right = progress * 1000 + "px";
    //             button.style.bottom = progress * 1000 + "px";
    //         }
    //         // if (button.style.right < "1200px") {
    //         //     button.style.right = progress * 5000 + "px";
    //         // }
    //         // console.log(button.style.right);
    //     },
    // });
};
