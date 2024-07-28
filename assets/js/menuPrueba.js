const navBar1 = document.querySelector("#navigation");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarElem = document.querySelector("nav ul li a");
const mobileLinks = document.querySelectorAll(".menu-mobile li");

function updateNavBarStyles() {
  const isNavigation = navBar1.classList.contains("navigation");
  const isElemento = navBarElem.classList.contains("elementos");

  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBar1.classList.add("navigation");
    navBarElem.classList.add("elementos");
  } else {
    navBar1.classList.remove("navigation");
    navBarElem.classList.remove("elementos");
  }
}

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");
  navBar1.classList.add("navigation");
  navBarElem.classList.add("elementos");
  updateNavBarStyles();
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove("active");

  // Solo cambia el color de fondo si el ancho de la pantalla es menor a 970px
  if (window.innerWidth < 970) {
    navBar1.classList.add("navigation");
    navBarElem.classList.add("elementos");
  } else {
    navBar1.classList.remove("navigation");
    navBarElem.classList.remove("elementos");
  }

  updateNavBarStyles();
});

function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar1.classList.add("navigation");
    navBarElem.classList.add("elementos");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar1.classList.add("navigation");
    navBarElem.classList.add("elementos");
  }
  updateNavBarStyles();
}

window.addEventListener("resize", handleResize);

mobileLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    updateNavBarStyles();
  })
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 750) {
      navBarElem.classList.add("elementos");
    } else {
      navBar1.classList.add("navigation");
      navBarElem.classList.add("elementos");
    }
  } else if (window.scrollY > 300) {
    navBar1.style.display = "none";
  } else {
    navBar1.classList.remove("navigation");
    navBarElem.classList.remove("elementos");
  }

  updateNavBarStyles();
});

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < prevScrollY) {
    navBar1.style.display = "flex";
  }

  prevScrollY = currentScrollY;
});

window.dispatchEvent(new Event("scroll"));

updateNavBarStyles();
