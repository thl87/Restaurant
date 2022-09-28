// Burger menu
function responsiveNav() {
    let nav = document.querySelector("ul");
    if (nav.className === "navList") {
        nav.classList.add("responsive");
    } else {
        nav.className = "navList"
    }
}