const playButtonStyler = () => {
    const playBtn = document.querySelector(".vjs-big-play-button");

    playBtn.style.position = "relative";
    playBtn.style.backgroundColor = "transparent";
    playBtn.innerHTML =
        '<img class="video-play__button" src="./images/playButtonVector1.svg" alt="/"><img class="video-play__button" src="./images/playButtonVector2.svg" alt="/"><img class="video-play__button" src="./images/playButtonVector3.svg" alt="/"><img class="video-play__button" src="./images/playButtonVector4.svg" alt="/">';
};

export default playButtonStyler;
