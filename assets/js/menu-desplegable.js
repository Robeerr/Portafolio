document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout__menu-toggle")
    let iconBars = document.querySelector(".menu-toggle__icon.fa-bars")
    let iconXmark = document.querySelector(".menu-toggle__icon.fa-xmark")
    let aside = document.querySelector(".layout__aside")

    button.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout__aside--visible");

        if (!visible) {
            aside.classList.add("layout__aside--visible");
            iconBars.style.opacity = 0;
            iconXmark.style.opacity = 1;
        } else {
            aside.classList.remove("layout__aside--visible");
            iconBars.style.opacity = 1;
            iconXmark.style.opacity = 0;
        }
    })
    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth);

        if (size >= 1060) {
            aside.classList.remove("layout__aside--visible");
            iconBars.style.opacity = 1;
            iconXmark.style.opacity = 0;
        }
    });
})
