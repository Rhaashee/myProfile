const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("aside a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 250;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        const dot = link.querySelector("span");

        /* REMOVE ACTIVE STYLE */

        link.classList.remove(
            "text-purple-500",
            "font-semibold"
        );

        link.classList.add("text-slate-500");

        dot.classList.remove("bg-purple-500");
        dot.classList.add("bg-slate-300");

        /* ADD ACTIVE STYLE */

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.remove("text-slate-500");

            link.classList.add(
                "text-purple-500",
                "font-semibold"
            );

            dot.classList.remove("bg-slate-300");
            dot.classList.add("bg-purple-500");

        }

    });

});