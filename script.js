function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// ----------------------------------preloader--------------------------------------------
var loader  = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})


// ----------------------------------scroll indicator-----------------------------------------------------

window.addEventListener("scroll", () => {
    const indicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const hight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = (pageScroll / hight) * 100;

    indicatorBar.style.width = scrollValue + "0%";
});

// -------------------------- skills circle percentage------------------------------------------------------------
ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2200,
    delay: 200,
});
ScrollReveal().reveal("#desktop-nav, #hamburger-nav .logo", { delay: 500 });
ScrollReveal().reveal(
    "#profile, .section__text__p1-2, .prject-btn button, .details-container p, .text-container p, .frendend_backend h3, .contact-info-container p,a",
    { delay: 200, origin: "right" }
);
ScrollReveal().reveal(".title, .section__pic__container img, .project-title , .details-container h3 ", {
    delay: 500,
    origin: "left",
});
ScrollReveal().reveal(".section__pic-container ,#about,  #experience, #projects, #contact, footer  ", {
    delay: 600,
    origin: "bottom",
});
ScrollReveal().reveal(
    "#socials-container img, .details-container img, .contact-info-container img, .nav-links li, .menu-links li,a , .progress-container ",
    { delay: 600, origin: "top", interval: 100 }
);

function startCircularProgress(circularProgressClass, progressValueClass, progressEndValue) {
    let circularProgress = document.querySelector(`.${circularProgressClass}`);
    let progressValue = document.querySelector(`.${progressValueClass}`);

    let progressStartValue = 0;
    let speed = 80;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#000 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
        // console.log(progressStartValue);
    }, speed);
}

// Start four progress bars with different end values
startCircularProgress("circular-progress1", "progress-value1", 99);
startCircularProgress("circular-progress2", "progress-value2", 99);
startCircularProgress("circular-progress3", "progress-value3", 60);
startCircularProgress("circular-progress4", "progress-value4", 75);
startCircularProgress("circular-progress5", "progress-value5", 80);

startCircularProgress("circular-progress6", "progress-value6", 80);
startCircularProgress("circular-progress7", "progress-value7", 85);
startCircularProgress("circular-progress9", "progress-value9", 90);
startCircularProgress("circular-progress10", "progress-value10",85);
startCircularProgress("circular-progress8", "progress-value8", 96);

// -------------------------------------------------------------------
