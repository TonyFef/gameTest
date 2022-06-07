const firstModule = () => {
    const rootDiv = document.querySelector(".root");
    const _API_KEY = "563492ad6f917000010000019e2d093c109e4a508be5b655a984aef2";
    const link = '"https://api.pexels.com/videos/popular"';

    const videojs = document.querySelector(".vjs-control-bar");
    const playBtn = document.querySelector(".vjs-big-play-button");
    playBtn.style.position = "relative";
    playBtn.style.backgroundColor = "transparent";
    playBtn.innerHTML =
        '<img class="video-play__button" src="./images/vector1.svg" alt="/"><img class="video-play__button" src="./images/vector2.svg" alt="/"><img class="video-play__button" src="./images/vector3.svg" alt="/"><img class="video-play__button" src="./images/vector4.svg" alt="/">';
    // videojs.style.display = "none";
    // console.log(playBtn);

    const leftWing = document.querySelector(".left-scale");
    // leftWing.style.strokeOpacity = "35%";
    // console.log(leftWing);
};

export default firstModule;
