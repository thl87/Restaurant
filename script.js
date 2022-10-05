// Burger menu
function responsiveNav() {
    let burger = document.querySelector(".burgerToggle")
    let nav = document.querySelector("ul");
    if (nav.className === "navList") {
        nav.classList.add("responsive");
        burger.classList.add("toggled")
    } else {
        nav.className = "navList";
        burger.classList = "burgerToggle";
    }
}


let navbar = document.querySelector("nav");
navbar.innerHTML += `
    <div class="navDiv">
        <a href="/pages/index.html" class="navLogo">
            <img class="imgLogo" src="/img/svg/carrotLogo.svg" alt="Logo">
            <p class="mainTitle">La f<img src="/img/svg/carrot.svg" alt="i">ère carotte</p>
        </a>
        <ul class="navList">
            <div class="navInner">
                <li><a href="/pages/menu.html">Menu</a></li>
                <span>-</span>
                <li><a href="/pages/about.html">A Propos</a></li>
                <span>-</span>
                <li><a href="/pages/contact.html">Contact</a></li>
            </div>
            <button class="burgerToggle" onclick="responsiveNav()">
                <div></div>
            </button>
        </ul>
    </div>
`;


let footer = document.querySelector("footer");
footer.innerHTML += `
    <section class="mainSectionFooter">
        <div class="footerDesc">
            <h2>La fière carotte</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi voluptates molestias pariatur dolor et, sed eaque ipsum non sunt autem aperiam veniam laboriosam deleniti sit tempora. Tempora, eaque in!</p>
        </div>
        <div class="footerOpenings">
            <h2>Horaires</h2>
            <p>Lundi : 11h - 14h / 19h - 21h</p>
            <p>Mardi : 11h - 14h / 19h - 21h</p>
            <p>Mercredi : 11h - 14h / 19h - 21h</p>
            <p>Jeudi : 11h - 14h / 19h - 21h</p>
            <p>Vendredi : 11h - 14h / 19h - 00h</p>
            <p>Samedi : 11h - 15h / 19h - 00h</p>
            <p>Dimanche : 11h - 15h / 19h - 23h</p>
        </div>
        <div class="footerAddress">
            <p>4 rue Baron</p>
            <p>06 07 08 09 10</p>
        </div>
    </section>
    <hr />
    <section class="secondSectionFooter">
        <div class="footerSocials">
            <a href="#">
                <img src="/img/logo/facebook.svg" alt="Facebook" width="30" height="30">
            </a>
            <a href="#">
                <img src="/img/logo/instagram.svg" alt="Instagram" width="30" height="30">
            </a>
            <a href="#">
                <img src="/img/logo/tripadvisor.svg" alt="Tripadvisor" width="30" height="30">
            </a>
        </div>
        <div class="footerLinks">
            <a href="/pages/mentions.html">Mentions légales</a>
            <span>-</span>
            <a href="#">Politique de confidentialité</a>
            <span>-</span>
            <a href="#">Conditions d'utilisation</a>
            <span>-</span>
            <a href="#">Sitemap</a>
        </div>
        <div class="footerCopyright">
            <p>© 2022 La fière carotte</p>
        </div>
    </section>
`;