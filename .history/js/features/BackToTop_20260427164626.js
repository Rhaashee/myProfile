const swiperButton = document.getElementById("hoom-swiper");

// hide button initially
swiperButton.style.display = "none";

// scroll to top on click
swiperButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"   // smooth scroll (better UX)
    });
});

// show button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        swiperButton.style.display = "block";
    } else {
        swiperButton.style.display = "none";
    }
});