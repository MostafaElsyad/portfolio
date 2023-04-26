const navBTN = document.getElementById('navBTN');
const sideNav = document.getElementById('sideNav');
const closeNav = document.getElementById('closeNav');

let turn = 0;

function slideNav() {
    if(turn == 1) {
        sideNav.style.transform = 'translateX(0)';
        closeNav.style.display = 'flex'
    }else {
        sideNav.style.transform = 'translateX(100%)';
        closeNav.style.display = 'none'
    }
}

navBTN.onclick = function() {
    turn = 1;
    slideNav();
}

closeNav.onclick = function() {
    turn = 0;
    slideNav();
}
