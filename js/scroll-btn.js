const scrollBTN = document.getElementById('scrollBTN');

onscroll = function() {
  if(scrollY >= 400) {
    scrollBTN.style.display = 'flex';
  }else {
    scrollBTN.style.display = 'none';
  }
}
