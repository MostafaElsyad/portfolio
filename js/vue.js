// Vue Js
const {createApp} = Vue;

const header_component = {
    template:
    `<header class="min-header">
    <a href="" class="logo">mostafa</a>
    <nav class="navigation">
        <a href="#home" class="nav-link">home</a>
        <a href="#skills" class="nav-link">skills</a>
        <a href="#projects" class="nav-link">projects</a>
        <a href="#services" class="nav-link">services</a>
    </nav>
    <nav class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100084809237464" target="_blank" class="social-ico"><i class="fa-brands fa-facebook ico"></i></a>
        <a href="https://www.instagram.com/mustafa_elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-instagram ico"></i></a>
        <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-linkedin ico"></i></a>
        <a href="https://discord.com/channels/@me/Mostafa#9722" target="_blank" class="social-ico"><i class="fa-brands fa-discord ico"></i></a>
        <a href="mailto:frontendwebmarkting@outlook.com" target="_blank" class="social-ico"><i class="fa-regular fa-envelope ico"></i></a>
    </nav>
    <button id="navBTN" class="nav-btn"><i class="fa-solid fa-bars"></i></button>
    </header>`,

    data() {
        return {};
    },
};
const side_nav_component = {
    template:
    `<nav id="sideNav" class="side-nav">
        <a href="#home" class="nav-link">home</a>
        <a href="#skills" class="nav-link">skills</a>
        <a href="#projects" class="nav-link">projects</a>
        <a href="#services" class="nav-link">services</a>
        <nav class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100084809237464" target="_blank" class="social-ico"><i class="fa-brands fa-facebook ico"></i></a>
            <a href="https://www.instagram.com/mustafa_elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-instagram ico"></i></a>
            <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-linkedin ico"></i></a>
            <a href="https://discord.com/channels/@me/Mostafa#9722" target="_blank" class="social-ico"><i class="fa-brands fa-discord ico"></i></a>
            <a href="mailto:frontendwebmarkting@outlook.com" target="_blank" class="social-ico"><i class="fa-regular fa-envelope ico"></i></a>
        </nav>
    </nav>`,

    data() {
        return {};
    },
};
const footer_component = {
    template:
    `<footer>
        <p>Designed by & Copyright back to © <span>mostafa elsyad</span></p>
        <div class="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100084809237464" target="_blank" class="social-ico"><i class="fa-brands fa-facebook ico"></i></a>
            <a href="https://www.instagram.com/mustafa_elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-instagram ico"></i></a>
            <a href="https://www.linkedin.com/in/mostafa-elsyad/" target="_blank" class="social-ico"><i class="fa-brands fa-linkedin ico"></i></a>
            <a href="https://discord.com/channels/@me/Mostafa#9722" target="_blank" class="social-ico"><i class="fa-brands fa-discord ico"></i></a>
            <a href="mailto:frontendwebmarkting@outlook.com" target="_blank" class="social-ico"><i class="fa-regular fa-envelope ico"></i></a>
        </div>
    </footer>`,

    data() {
        return {};
    },
};
const scroll_btn_component = {
    template: `<button id="scrollBTN" class="scroll-btn"><i class="fa-solid fa-arrow-up-long scroll-ico"></i></button>`,
};

const vue_js = createApp ({
    data() {
        return {};
    },

    components: {
        header_component,
        side_nav_component,
        footer_component,
        scroll_btn_component,
    }
}).mount("#app");

// Scroll BTN
const scrollBTN = document.getElementById('scrollBTN');

function FadeIn() {
    scrollBTN.style.bottom = '6%';
};

function FadeOut() {
    scrollBTN.style.bottom = '-10%';
};

onscroll = function() {
    if(scrollY >= 400) {
        setTimeout(FadeIn(), 300);
    }else {
        setTimeout(FadeOut(), 300);
    }
};

scrollBTN.onclick = function() {
scroll(0, 0);
};

// Navigation BTN
const navBTN = document.getElementById('navBTN');
const sideNav = document.getElementById('sideNav');
const closeNav = document.getElementById('closeNav');

navBTN.onclick = function slideNav() {
    if(sideNav.style.transform == 'translateX(100%)') {
        sideNav.style.transform = 'translateX(0)';
        closeNav.style.display = 'flex'
    }else {
        sideNav.style.transform = 'translateX(100%)';
        closeNav.style.display = 'none'
    }
};

closeNav.onclick = function closeNavFunction() {
    sideNav.style.transform = 'translateX(100%)';
    closeNav.style.display = 'none';
};