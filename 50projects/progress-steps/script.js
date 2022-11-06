const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progress = document.querySelector(".progress");

let curActiveCircle = 1; //当前该亮的圆的数量
prevBtn.addEventListener("click", () => {
    if (curActiveCircle > 1) curActiveCircle--;
    updateProgress();
})

nextBtn.addEventListener("click", () => {
    if (curActiveCircle < circles.length) curActiveCircle++;
    updateProgress();
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < curActiveCircle) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const activeNum = document.querySelectorAll(".circle.active").length; //激活圆的数量
    progress.style.width = (activeNum - 1) / (circles.length - 1) * 100 + "%";

    if (curActiveCircle === 1) prevBtn.disabled = true;
    else if (curActiveCircle === circles.length) nextBtn.disabled = true;
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}