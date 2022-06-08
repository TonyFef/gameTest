import { modal } from "./modal";

export const modalShower = () => {
    const video = document.querySelector(".vjs-tech");

    video.addEventListener(
        "ended",
        () => {
            modal();
            video.pause();
        },
        { once: true }
    );
};
