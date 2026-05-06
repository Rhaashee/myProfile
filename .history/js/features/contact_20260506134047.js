const contactButtons =
    document.querySelectorAll("#open-contact");

const contactModal =
    document.getElementById("contact-modal");

const closeModal =
    document.getElementById("close-modal");

/* OPEN MODAL */

contactButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        contactModal.classList.remove("hidden");

        contactModal.classList.add("flex");

    });

});

/* CLOSE BUTTON */

closeModal.addEventListener("click", () => {

    contactModal.classList.remove("flex");

    contactModal.classList.add("hidden");

});

/* CLICK OUTSIDE */

window.addEventListener("click", (e) => {

    if(e.target === contactModal){

        contactModal.classList.remove("flex");

        contactModal.classList.add("hidden");

    }

});