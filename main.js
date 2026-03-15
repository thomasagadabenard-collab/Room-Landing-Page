let hamburger = document.querySelector(".hamburger-image");

let close = document.querySelector(".close");

let disappear = document.querySelector(".disappear")

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    disappear.classList.add("active");

    close.addEventListener("click", () => {
        disappear.classList.remove("active");
    })
})