import { timer } from "./timer";
import { buttonMover } from "./buttonMover";

export const videoPlay = (duration) => {
    const leftScale = document.getElementById("left-scale__path");
    const rightScale = document.querySelector(".right-scale__path");

    let length = leftScale.getTotalLength();

    leftScale.style.animationDuration = `${duration.toFixed(2)}s`;
    rightScale.style.animationDuration = `${duration.toFixed(2)}s`;

    leftScale.setAttribute("stroke-dasharray", length);
    leftScale.setAttribute("stroke-dashoffset", length);

    rightScale.style.strokeDasharray = length;
    rightScale.style.strokeDashoffset = length;

    timer(duration.toFixed(2));
    buttonMover(duration);
};
