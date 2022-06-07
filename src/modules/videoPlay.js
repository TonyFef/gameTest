import { timer } from "./timer";
import { buttonMover } from "./buttonMover";

export const videoPlay = () => {
    const leftScale = document.querySelector(".left-scale__path");
    const rightScale = document.querySelector(".right-scale__path");
    const video = document.querySelector(".vjs-tech");

    const duration = video.duration;
    const length = leftScale.getTotalLength();
    const currentTime = video.currentTime;

    if (currentTime > 0) {
        leftScale.style.animationDuration = `${duration}s`;
        rightScale.style.animationDuration = `${duration}s`;

        leftScale.style.strokeDasharray = length;
        rightScale.style.strokeDasharray = length;

        leftScale.style.strokeDashoffset = length;
        rightScale.style.strokeDashoffset = length;

        timer(duration);
    }
    timer(duration);
    buttonMover(duration)

};
