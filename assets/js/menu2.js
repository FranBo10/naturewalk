const navBar2 = document.querySelector("#navigation-2");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarElem = document.querySelector("nav ul li a");
const navBarUserName = document.querySelector(".logo a span");
const mobileLinks = document.querySelectorAll(".menu-mobile li");

const languageToggle = document.querySelectorAll('#navigation-2 .language-toggle');

languageToggle.forEach(toggle => {
  toggle.addEventListener('click', function(event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      const subMenu = this.nextElementSibling;
      if (subMenu && subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        subMenu.style.height = '0';
      } else if (subMenu) {
        subMenu.classList.add('show');
        subMenu.style.height = subMenu.scrollHeight + 'px';
      }
    }
  });
});

function updateNavBarStyles() {
  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBar2?.classList.add("navigation-2");
    navBarUserName?.classList.add("logoNombre");
  } else {
    navBar2?.classList.remove("navigation-2");
    navBarUserName?.classList.remove("logoNombre");
  }
}

menuBtn?.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile?.classList.add("active");
  navBarUserName?.classList.add("logoNombre");
  navBar2?.classList.add("navigation-2");
  updateNavBarStyles();
});

closeBtn?.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile?.classList.remove("active");
  if (window.innerWidth < 970) {
    navBar2?.classList.add("navigation-2");
  } else {
    navBar2?.classList.remove("navigation-2");
  }
  updateNavBarStyles();
});

function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar2?.classList.remove("navigation-2");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar2?.classList.add("navigation-2");
  }
  updateNavBarStyles();
}

// Ejecutar handleResize al cargar la página
window.addEventListener("resize", handleResize);

// Actualiza el manejador de eventos para los enlaces en el menú móvil
mobileLinks.forEach((link) => {
  const languageLink = link.querySelector('.language-toggle');
  if (!languageLink) { // Excluye el enlace de idiomas
    link.addEventListener("click", () => {
      menuMobile?.classList.remove("active");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      updateNavBarStyles();
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 750) {
      navBarUserName?.classList.add("logoNombre");
    } else {
      navBar2?.classList.add("navigation-2");
    }
  } else if (window.scrollY > 300) {
    if (navBar2) navBar2.style.display = "none";
  } else {
    navBar2?.classList.remove("navigation-2");
    navBarUserName?.classList.remove("logoNombre");
  }
  
  updateNavBarStyles();
});

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < prevScrollY) {
    if (navBar2) navBar2.style.display = "flex";
  }

  prevScrollY = currentScrollY;
});

window.dispatchEvent(new Event("scroll"));

updateNavBarStyles();
