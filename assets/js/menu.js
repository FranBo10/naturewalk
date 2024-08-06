const navBar1 = document.querySelector("#navigation");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarElem = document.querySelector("nav ul li a");
const navBarUserName = document.querySelector(".logo a span");
const mobileLinks = document.querySelectorAll(".menu-mobile li");

const languageToggle = document.querySelectorAll('#navigation .language-toggle');

languageToggle.forEach(toggle => {
  toggle.addEventListener('click', function(event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      const subMenu = this.nextElementSibling;
      if (subMenu) {
        if (subMenu.classList.contains('show')) {
          subMenu.classList.remove('show');
          subMenu.style.height = '0';
        } else {
          subMenu.classList.add('show');
          subMenu.style.height = subMenu.scrollHeight + 'px';
        }
      }
    }
  });
});

function updateNavBarStyles() {
  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBar1.classList.add("navigation");
    navBarUserName.classList.add("logoNombre");
  } 
}


menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");  
  navBarUserName.classList.add("logoNombre");
  navBar1.classList.add("navigation");
  updateNavBarStyles();
});

closeBtn.addEventListener("click", () => {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile.classList.remove("active");
  if (window.innerWidth < 970) {
    navBar1.classList.add("navigation");
  } else {
    navBar1.classList.remove("navigation");
  }

  updateNavBarStyles();
});

function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar1?.classList.remove("navigation");
    navBarUserName?.classList.remove("logoNombre");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar1?.classList.add("navigation");
    navBarUserName?.classList.add("logoNombre");
  }
  updateNavBarStyles();
}

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
      navBar1?.classList.add("navigation");
    }
  } else if (window.scrollY > 300) {
    if (navBar1) navBar1.style.display = "none";
  } else {
    navBar1?.classList.remove("navigation");
    navBarUserName?.classList.remove("logoNombre");
  }

  updateNavBarStyles();
});

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < prevScrollY) {
    if (navBar1) navBar1.style.display = "flex";
  }

  prevScrollY = currentScrollY;
});

window.dispatchEvent(new Event("scroll"));

updateNavBarStyles();
