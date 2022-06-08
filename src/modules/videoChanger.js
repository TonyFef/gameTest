import { videoPlay } from "./videoPlay";

export const videoChanger = () => {
    let counter = 2;
    const button = document.querySelector(".vjs-big-play-button");
    const video = document.querySelector(".vjs-tech");

    video.addEventListener("loadedmetadata", () => {
        videoPlay(video.duration);
    });

    button.addEventListener("click", () => {
        video.src = `./videos/video${counter}.mp4`;
        counter++;
        counter > 5 ? (counter = 1) : null;
    });

    video.addEventListener("pause", () => {
        video.play();
    });
};
