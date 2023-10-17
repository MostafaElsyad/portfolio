const {createApp} = Vue;

const main_header_component = {
    template:
    `<header class="main-header header">
        <a href="index.html" class="logo">mustafa</a>
        <nav class="navigation">
            <a href="#home" class="nav-link">Home</a>
            <a href="#portfolio" class="nav-link">Portfolio</a>
            <a href="" class="nav-link">Services</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button id="nav-header-btn" class="nav-header-btn"><i class="fa-solid fa-bars"></i></button>
    </header>`,

    data() {
        return {};
    },
}

const side_nav = {
    template:
    `<div id="side-nav" class="side-nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#portfolio" class="nav-link">Portfolio</a>
        <a href="" class="nav-link">Services</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
        <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100084809237464" target="_blank" class="nav-link facebook-link"><i class="fa-brands fa-facebook ico facebook-ico"></i></a>
            <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="nav-link linkedin-link"><i class="fa-brands fa-linkedin ico linkedin-ico"></i></a>
            <a href="https://www.instagram.com/mustafa_elsyad/" target="_blank" class="nav-link instagram-link"><i class="fa-brands fa-instagram ico instagram-ico"></i></a>
            <a href="https://www.youtube.com/channel/UCkXJ712M6t23MMUkSTd2N4g" target="_blank" class="nav-link youtube-link"><i class="fa-brands fa-youtube ico youtube-ico"></i></a>
        </div>
    </div>`,

    data() {
        return {};
    },
}

const close_nav = {
    template:
    `<div id="close-nav" class="close-nav"></div>`,

    data() {
        return {};
    },
}

const scroll_btn = {
    template:
    `<button id="scroll-btn" class="scroll-btn btn"><i class="fa-solid fa-chevron-up"></i></button>`,

    data() {
        return {};
    },
}

const footer_component = {
    template:
    `<footer class="main-footer">
        <a href="index.html" class="logo">mustafa</a>
        <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100084809237464" target="_blank" class="nav-link facebook-link"><i class="fa-brands fa-facebook ico facebook-ico"></i></a>
            <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="nav-link linkedin-link"><i class="fa-brands fa-linkedin ico linkedin-ico"></i></a>
            <a href="https://www.instagram.com/mustafa_elsyad/" target="_blank" class="nav-link instagram-link"><i class="fa-brands fa-instagram ico instagram-ico"></i></a>
            <a href="https://www.youtube.com/channel/UCkXJ712M6t23MMUkSTd2N4g" target="_blank" class="nav-link youtube-link"><i class="fa-brands fa-youtube ico youtube-ico"></i></a>
        </div>
        <p class="paragraph"><i class="fa-solid fa-copyright ico"></i> 2024 <span>mustafa</span> all rights reserved</p>
        </footer>`,

        data() {
            return {};
        },
}

const vue_js = createApp({
    components: {
        main_header_component,
        side_nav,
        close_nav,
        scroll_btn,
        footer_component,
    },

    data() {
        return{
            projects: [
                looping = {img: "img/portfolio/vue_js_img/looping.jpeg", heading: "looping", paragraph: "Vue-js / Framework", id: 0, alt: "Vue js", link: "#"},
                xo = {img: "../img/portfolio/javascript_img/xo.jpeg", heading: "XO", paragraph: "JavaScript / Programming Language", id: 1, alt: "XO JavaScript porject", link: "#"},
                crud = {img: "../img/portfolio/javascript_img/crud.jpeg", heading: "crud", paragraph: "JavaScript / Programming Language", id: 2, alt: "CRUD JavaScript project", link: "#"},
                puzzle = {img: "../img/portfolio/javascript_img/puzzle.jpeg", heading: "puzzle", paragraph: "JavaScript / Programming Language", id: 3, alt: "Puzzle JavaScript project", link: "#"},
                hotel = {img: "../img/portfolio/websites_img/hotel.jpeg", heading: "hotel", paragraph: "Front-end / Template", id: 4, alt: "Hotel website", link: "#"},
                futura = {img: "../img/portfolio/websites_img/futura.jpeg", heading: "futura", paragraph: "Front-end / Template", id: 5, alt: "Education Futura website", link: "#"},
                home_based = {img: "../img/portfolio/websites_img/home_based.jpeg", heading: "home based", paragraph: "Front-end / Template", id: 6, alt: "Home Based website", link: "#"},
                gtvoid = {img: "../img/portfolio/websites_img/gtvoid.jpeg", heading: "GTVoid", paragraph: "Web Development / WordPress", id: 7, alt: "GTVoid website", link: "#"},
            ],

            vue_js: [
                looping = {img: "../img/portfolio/vue_js_img/looping.jpeg", heading: "looping", paragraph: "Vue-js / Framework", id: 0, alt: "Vue js", link: "#"},
            ],

            javascript: [
                xo = {img: "../img/portfolio/javascript_img/xo.jpeg", heading: "XO", paragraph: "JavaScript / Programming Language", id: 1, alt: "XO JavaScript porject", link: "#"},
                crud = {img: "../img/portfolio/javascript_img/crud.jpeg", heading: "crud", paragraph: "JavaScript / Programming Language", id: 2, alt: "CRUD JavaScript project", link: "#"},
                puzzle = {img: "../img/portfolio/javascript_img/puzzle.jpeg", heading: "puzzle", paragraph: "JavaScript / Programming Language", id: 3, alt: "Puzzle JavaScript project", link: "#"},
            ],

            websites: [
                hotel = {img: "../img/portfolio/websites_img/hotel.jpeg", heading: "hotel", paragraph: "Front-end / Template", id: 4, alt: "Hotel website", link: "#"},
                futura = {img: "../img/portfolio/websites_img/futura.jpeg", heading: "futura", paragraph: "Front-end / Template", id: 5, alt: "Education Futura website", link: "#"},
                home_based = {img: "../img/portfolio/websites_img/home_based.jpeg", heading: "home based", paragraph: "Front-end / Template", id: 6, alt: "Home Based website", link: "#"},
                gtvoid = {img: "../img/portfolio/websites_img/gtvoid.jpeg", heading: "GTVoid", paragraph: "Web Development / WordPress", id: 7, alt: "GTVoid website", link: "#"},
            ]
        };
    },
}).mount("#app");

// Active BTNs JavaScript
btns_container = document.getElementById("btns-portfolio-container");
portfolio_container = document.getElementById("portfolio-container");
btns = btns_container.getElementsByClassName("nav-portfolio-btn");
card = portfolio_container.getElementsByClassName("project-card")

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active-nav-portfolio-btn");
        current[0].className = current[0].className.replace(" active-nav-portfolio-btn", "");
        this.className += " active-nav-portfolio-btn";

        // if(btns.className == "vue_js") {
            
        // }else if(btns.className == "javascript") {

        // }else if(btns.className == "websites") {

        // }
    });
}

// Navigation Header BTN
const nav_btn = document.getElementById("nav-header-btn");
const sideNav = document.getElementById("side-nav");
const closeNav = document.getElementById("close-nav");

nav_btn.onclick = function slideNav() {
    if(sideNav.style.transform == 'translateX(100%)') {
        sideNav.style.transform = 'translateX(0)';
        closeNav.style.display = 'flex';
    }else {
        sideNav.style.transform = 'translateX(100%)';
        closeNav.style.display = "none";
    }
}

closeNav.onclick = function closeNavFunction() {
    sideNav.style.transform = 'translateX(100%)';
    closeNav.style.display = 'none';
}

// Scroll BTN
const scrollBTN = document.getElementById("scroll-btn");

onscroll = function() {
    if(scrollY >= 400) {
        scrollBTN.style.transform = "translateY(0)"
    }else {
        scrollBTN.style.transform = "translateY(150%)"
    }
}

scrollBTN.onclick = () => {
    scroll(0, 0);
}
