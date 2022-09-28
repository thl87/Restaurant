// Burger menu
function responsiveNav() {
    let nav = document.querySelector("ul");
    if (nav.className === "navList") {
        nav.classList.add("responsive");
    } else {
        nav.className = "navList"
    }
}

let navbar = document.querySelector("nav");

navbar.innerHTML += `
    <div class="navDiv">
        <img src="/img/svg/carrotLogo.svg" alt="Logo">
        <ul class="navList">
            <li><a href="/pages/index.html">Home</a></li>
            <li><a href="/pages/about.html">About</a></li>
            <li><a href="/pages/menu.html">Menu</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
            <button class="burgerToggle" onclick="responsiveNav()">
                <img src="/img/svg/burgerMenu.svg" alt="Open">
            </button>
        </ul>
    </div>
`;

let footer = document.querySelector("footer");

footer.innerHTML += `
    <div>
        <h3>© La fière carotte</h3>
        <p>06 07 08 09 10</p>
        <p>4 rue Baron</p>
    </div>
    <div>
        <a href="/">Mentions légales</a>
        <a href="/">Politique de confidentialité</a>
        <a href="/">Conditions d'utilisation</a>
    </div>
    <div>
        <a href="/" title="Tripadvisor">
            <img src="/img/logo/tripadvisor.svg" alt="">
        </a>
        <a href="/" title="Instagram">
            <img src="/img/logo/instagram.svg" alt="Instagram">
        </a>
        <a href="/" title="Facebook">
            <img src="/img/logo/facebook.svg" alt="Facebook">
        </a>
    </div>
`;