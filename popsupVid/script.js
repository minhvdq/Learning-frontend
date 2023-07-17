const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));
video.addEventListener("click", () => {
    event.stopPropagation();
    video.play();
});
box.addEventListener("click", () => box.classList.add("hidden"));