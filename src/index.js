import playButtonStyler from "./modules/playButtonStyler";
import { videoChanger } from "./modules/videoChanger";
import { modalShower } from "./modules/modalShower";

document.addEventListener(
    "DOMContentLoaded",
    () => {
        modalShower();
        videoChanger();
        playButtonStyler();
    },
    { once: true }
);
