const openContact =
    document.getElementById("open-contact");

const contactModal =
    document.getElementById("contact-modal");

const closeContact =
    document.getElementById("close-modal");

/* OPEN MODAL */

openContact.addEventListener("click", (e) => {

    e.preventDefault();

    contactModal.classList.remove("hidden");

    contactModal.classList.add("flex");

});

/* CLOSE BUTTON */

closeContact.addEventListener("click", () => {

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