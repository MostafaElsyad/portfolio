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
}

closeNav.onclick = function closeNavFunction() {
    sideNav.style.transform = 'translateX(100%)';
    closeNav.style.display = 'none';
}