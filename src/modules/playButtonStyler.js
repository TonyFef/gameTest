const playButtonStyler = () => {
    const playBtn = document.querySelector(".vjs-big-play-button");

    playBtn.style.position = "relative";
    playBtn.style.backgroundColor = "transparent";
    playBtn.innerHTML =
        '<img class="video-play__button" src="./images/vector1.svg" alt="/"><img class="video-play__button" src="./images/vector2.svg" alt="/"><img class="video-play__button" src="./images/vector3.svg" alt="/"><img class="video-play__button" src="./images/vector4.svg" alt="/">';
};

export default playButtonStyler;
