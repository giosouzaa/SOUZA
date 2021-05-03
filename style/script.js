/*Menu responsivo*/

let show = true;

const menuSection = document.querySelector(".menu_section")
const menuToogle = menuSection.querySelector(".menu_toogle")

menuToogle.addEventListener("click"), () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toogle("on",show)
    show = !show;
}