const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("fade-up");
        }

    });

});

const hiddenElements = document.querySelectorAll(".card");

hiddenElements.forEach(el => observer.observe(el));