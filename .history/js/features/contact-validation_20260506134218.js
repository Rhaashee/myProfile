function initContactValidation(){

    const contactForm =
        document.getElementById("popup-contact-form");

    const contactName =
        document.getElementById("contact-name");

    const contactEmail =
        document.getElementById("contact-email");

    const formMessage =
        document.getElementById("form-message");

    if(
        !contactForm ||
        !contactName ||
        !contactEmail ||
        !formMessage
    ){
        console.log("Contact form elements not found");
        return;
    }

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
            contactName.value.trim();

        const email =
            contactEmail.value.trim();

        formMessage.textContent = "";

        formMessage.className = "text-sm";

        /* NAME VALIDATION */

        if(name === ""){

            formMessage.textContent =
                "Name is required";

            formMessage.classList.add("text-red-300");

            contactName.focus();

            return;
        }

        if(name.length < 3){

            formMessage.textContent =
                "Name must be atleast 3 characters";

            formMessage.classList.add("text-red-300");

            contactName.focus();

            return;
        }

        /* EMAIL VALIDATION */

        if(email === ""){

            formMessage.textContent =
                "Email is required";

            formMessage.classList.add("text-red-300");

            contactEmail.focus();

            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            formMessage.textContent =
                "Enter valid email";

            formMessage.classList.add("text-red-300");

            contactEmail.focus();

            return;
        }

        /* SUCCESS */

        formMessage.textContent =
            "Message Submitted Successfully ✨";

        formMessage.classList.add("text-green-300");

        console.log("Valid Credentials:", {
            name,
            email
        });

        contactForm.reset();

    });

    contactName.addEventListener("input", () => {

        formMessage.textContent = "";

    });

    contactEmail.addEventListener("input", () => {

        formMessage.textContent = "";

    });

}

initContactValidation();