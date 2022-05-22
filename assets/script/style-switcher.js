/*toggler style switcher*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    let b = document.querySelector(".style-switcher").classList.toggle("open");
    console.log(b);
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})