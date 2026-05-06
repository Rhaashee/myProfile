const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("aside a, nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove(
            "text-purple-500",
            "font-semibold"
        );

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add(
                "text-purple-500",
                "font-semibold"
            );

        }

    });

});