const scrollBTN = document.getElementById('scrollBTN');

function FadeIn() {
    scrollBTN.style.bottom = '6%';
}

function FadeOut() {
    scrollBTN.style.bottom = '-10%';
}

onscroll = function() {
    if(scrollY >= 400) {
        setTimeout(FadeIn(), 300);
    }else {
        setTimeout(FadeOut(), 300);
    }
}

scrollBTN.onclick = function() {
    scroll(0, 0);
}
