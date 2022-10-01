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

//Menu modal
const menuDetails = [
    {name: 'Tartines veggie', url: '/img/imgMenu/imgFood1.jpg', price: '7'},
    {name: 'Salade et mélange légumes quinoa', url: '/img/imgMenu/imgFood2.jpg', price: '8'},
    {name: 'Crumble vegan et son mélange de fruits', url: '/img/imgMenu/imgFood3.jpg', price: '8'},
    {name: 'Salade composée complète', url: '/img/imgMenu/imgFood4.jpg', price: '10'},
    {name: 'Soupe de lentilles', url: '/img/imgMenu/imgFood5.jpg', price: '11'},
    {name: 'Hamburger vegan', url: '/img/imgMenu/imgFood6.jpg', price: '13'},
    {name: 'Gâteau à la carotte', url: '/img/imgMenu/imgFood7.jpg', price: '8'},
    {name: 'Smoothie', url: '/img/imgMenu/imgFood8.jpg', price: '6'},
    {name: 'Gâteau au chocolat vegan', url: '/img/imgMenu/imgFood9.jpg', price: '9'},
]
const menuButton = document.querySelectorAll(".plate");

for (let i = 0; i < menuDetails.length; i++) {
    menuButton[i].addEventListener("click", function() {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.style.display = "block";
        document.body.appendChild(modal);

        const modalInner = document.createElement("div");
        modalInner.classList.add("modalInner");
        modal.appendChild(modalInner);

        const modalTitle = document.createElement("h2");
        modalTitle.classList.add("modalTitle");
        modalTitle.innerHTML = menuDetails[i].name;
        modalInner.appendChild(modalTitle);

        const modalSubtitle = document.createElement("p");
        modalSubtitle.classList.add("modalSubtitle");
        modalSubtitle.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
        modalInner.appendChild(modalSubtitle);

        const modalImg = document.createElement("img");
        modalImg.classList.add("modalImg");
        modalImg.src = menuDetails[i].url;
        modalInner.appendChild(modalImg);

        const modalTxt = document.createElement("p");
        modalTxt.classList.add("modalTxt");
        modalTxt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus ipsa enim corporis maxime ad placeat cumque, animi aliquam sapiente ex, numquam ducimus! Iste saepe nemo officia? At, possimus velit. Modi exercitationem, dolore quisquam laudantium, odio iure, corrupti excepturi aspernatur rerum beatae tempora veniam laboriosam impedit ducimus provident asperiores accusantium quos ut nobis nostrum quo doloribus aliquam? Quas, assumenda debitis!";
        modalInner.appendChild(modalTxt);

        const modalOtherTitle = document.createElement("h3");
        modalOtherTitle.classList.add("modalOtherTitle");
        modalOtherTitle.innerHTML = "Allergènes";
        modalInner.appendChild(modalOtherTitle);

        const modalList = document.createElement("ul");
        modalList.classList.add("modalList");
        modalInner.appendChild(modalList);

        const random = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < random; j++) {
            const modalListEl = document.createElement("li");
            modalListEl.classList.add("modalListEl");
            modalListEl.innerHTML = "lorem";
            modalList.appendChild(modalListEl);
        }

        const modalPrice = document.createElement("p");
        modalPrice.classList.add("modalPrice");
        modalPrice.innerHTML = menuDetails[i].price + ' Euros';
        modalInner.appendChild(modalPrice);

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
};