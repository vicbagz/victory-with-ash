let navMenu = document.getElementById("site-header");
let sticky = navMenu.offsetTop;

function headerSticky() {
  if (window.pageYOffset > sticky) {
    navMenu.classList.add("sticky");
  } else {
    navMenu.classList.remove("sticky");
  }
}

window.onscroll = function () {
  headerSticky();
};
