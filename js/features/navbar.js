window.addEventListener("scroll",()=>{
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#ffffff";
    }
    else{
        navbar.style.background = "white";
    }
});