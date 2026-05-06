const swiperButton = document.getElementById("home-swiper");

// safety check (important)
if (swiperButton) {

    // hide initially
    swiperButton.style.display = "none";

    // scroll to top
    swiperButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // show on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            swiperButton.style.display = "block";
        } else {
            swiperButton.style.display = "none";
        }
    });

}