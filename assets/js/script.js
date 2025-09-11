const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-btn");
const toggleVideoBtn = document.getElementById("toggle-video");
const mainContent = document.getElementById("main-content");
const overlayDark = document.getElementById("overlay-dark");
const musicPlayer = document.getElementById("music-player");

let isPlaying = true;
let videoMode = false;

video.play().catch(() => {
    isPlaying = true;
    soundBtn.innerHTML = '<i class="fas fa-play"></i>';
});

soundBtn.addEventListener("click", () => {
    if (isPlaying) {
        video.pause();
        soundBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        video.play();
        soundBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

toggleVideoBtn.addEventListener("click", () => {
    videoMode = !videoMode;
    if (videoMode) {
        video.style.filter = "none";
        overlayDark.style.background = "transparent";
        mainContent.classList.add("hidden-fade");
        toggleVideoBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        video.style.filter = "blur(6px) brightness(0.7)";
        overlayDark.style.background = "rgba(0,0,0,0.5)";
        mainContent.classList.remove("hidden-fade");
        toggleVideoBtn.innerHTML = '<i class="fas fa-video"></i>';
    }
});

let isDragging = false, offsetX, offsetY;

musicPlayer.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - musicPlayer.getBoundingClientRect().left;
    offsetY = e.clientY - musicPlayer.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        musicPlayer.style.left = `${e.clientX - offsetX}px`;
        musicPlayer.style.top = `${e.clientY - offsetY}px`;
        musicPlayer.style.right = "auto";
        musicPlayer.style.bottom = "auto";
        musicPlayer.style.position = "fixed";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});