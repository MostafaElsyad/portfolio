const {createApp} = Vue;

const main_header_component = {
    template:
    `<header class="main-header header">
        <a href="" class="logo heading">mostafa</a>
        <nav class="navigation">
            <a href="#home" class="nav-link font">Home</a>
            <a href="#features" class="nav-link font">Features</a>
            <a href="#services" class="nav-link font">Services</a>
            <a href="#projects" class="nav-link font">Projects</a>
            <a href="#about" class="nav-link font">About Me</a>
        </nav>
        <button id="nav-btn" class="nav-btn"><i class="fa-solid fa-bars"></i></button>
    </header>`,

    data() {
        return {};
    },
}

const nav_header_component = {
    template:
    `<header id="nav-header" class="nav-header header">
        <a href="" class="logo heading">mostafa</a>
        <nav class="navigation">
            <a href="#home" class="nav-link font">Home</a>
            <a href="#features" class="nav-link font">Features</a>
            <a href="#services" class="nav-link font">Services</a>
            <a href="#projects" class="nav-link font">Projects</a>
            <a href="#about" class="nav-link font">About Me</a>
        </nav>
        <button id="nav-btn" class="nav-btn"><i class="fa-solid fa-bars"></i></button>
    </header>`,

    data() {
        return {};
    },
}

const side_nav_Component = {
    template:
    `<aside id="side-nav" class="side-nav">
            <a href="#home" class="nav-link font">home</a>
            <a href="#features" class="nav-link font">features</a>
            <a href="#services" class="nav-link font">services</a>
            <a href="#projects" class="nav-link font">projects</a>
            <a href="#about" class="nav-link font">about us</a>
    </aside>`,

    data() {
        return {};
    },
}

const side_nav_background_Component = {
    template:
    `<div id="side-nav-background" class="side-nav-background"></div>`,

    data() {
        return {};
    },
}

const footer_component = {
    template:
    `<footer class="footer">
        <p class="paragraph">copyright back to <i class="fa-solid fa-copyright"></i> <span>mostafa ahmed</span></p>
        <nav class="social-icons">
            <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="nav-link font"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://khamsat.com/user/mostafa_ahmed_elsyad" target="_blank" class="nav-link font"><i class="fa-solid fa-5"></i></a>
            <a href="https://www.freelancer.com/u/MostafaElsyad" target="_blank" class="nav-link font"><i class="fa-solid fa-dove"></i></a>
            <a href="https://www.youtube.com/channel/UCkXJ712M6t23MMUkSTd2N4g" target="_blank" class="nav-link font"><i class="fa-brands fa-youtube"></i></a>
        </nav>
    </footer>`,

    data() {
        return {};
    },
}

const vue_js = createApp({
    components: {
        main_header_component,
        nav_header_component,
        footer_component,
    },

    data() {
        return {
            projects: [
                home_based = {img: "img/projects/home-based.jpeg", heading: "home based", type: "front-end / template", href: "https://mostafaelsyad.github.io/Home-Based/"},
                hotel = {img: "img/projects/hotel.jpeg", heading: "hotel", type: "front-end / template", href: "https://mostafaelsyad.github.io/hotel/"},
                futura = {img: "img/projects/futura.jpeg", heading: "futura", type: "front-end / template", href: "https://mostafaelsyad.github.io/Futura/"},
                gtvoid = {img: "img/projects/gtvoid.jpeg", heading: "gtvoid", type: "wordpress / website", href: "https://gtvoid.com/"},            
                lopping = {img: "img/projects/looping.jpeg", heading: "lopping", type: "vue js / framework", href: "https://mostafaelsyad.github.io/Looping_Vue.Js_Products/"},            
                puzzle = {img: "img/projects/puzzle.jpeg", heading: "puzzle", type: "javascript / programming language", href: "https://mostafaelsyad.github.io/puzzle/"},            
                crud = {img: "img/projects/crud.jpeg", heading: "crud", type: "javascript / programming language", href: "https://mostafaelsyad.github.io/crud/"},
                XO = {img: "img/projects/xo.jpeg", heading: "XO", type: "javascript / programming language", href: "https://mostafaelsyad.github.io/JavaScript_XO/"}
                game troves = {img: "img/projects/game-troves.jpeg", heading: "game troves", type: "front-end / template", href: "https://mostafaelsyad.github.io/Game_Troves/"}
            ]
        };
    },
}).mount("#app");

// JavaScript
const navHeader = document.getElementById("nav-header");

onscroll = function() {
    if(scrollY >= 500) {
        navHeader.style.transform = "translateY(0)";
    }else {
        navHeader.style.transform = "translateY(-100%)";
    }
}

const sideNav = document.getElementById("side-nav");
const sideNavBackground = document.getElementById("side-nav-background");
const navBTN = document.getElementById("nav-btn");

navBTN.onclick = function side_nav() {
    if(sideNav.style.transform = "translateX(100%)") {
        sideNav.style.transform = "translateX(0)";
        sideNavBackground.style.display = "flex";
    } else if(sideNav.style.transform = "translateX(0)"){
        sideNav.style.transform = "translateX(100%)";
        sideNavBackground.style.display = "none";
    }
}

sideNavBackground.onclick = function sideNavBackgroundFunction() {
    sideNav.style.transform = "translateX(100%)";
    sideNavBackground.style.display = "none";
}
