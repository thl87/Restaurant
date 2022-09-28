// Burger menu
function responsiveNav() {
    let nav = document.querySelector("ul");
    if (nav.className === "navList") {
        nav.classList.add("responsive");
    } else {
        nav.className = "navList"
    }
}



// fetch("./header.html")
//     .then(response => {
//     return response.text()
//     })
//     .then(data => {
//     document.querySelector("header").innerHTML = data;
//     document.querySelector("nav").innerHTML = data;
//     });
