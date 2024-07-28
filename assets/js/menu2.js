const navBar2 = document.querySelector("#navigation-2");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-mobile");
const navBarElem = document.querySelector("nav ul li a");
const mobileLinks = document.querySelectorAll(".menu-mobile li");

function updateNavBarStyles() {
  if (window.innerWidth < 750 || window.scrollY > 0) {
    navBarElem.classList.add("elementos");
  }
}

  menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    closeBtn.style.color = "white";
    menuMobile.classList.add("active");
    navBar2.classList.add("navigation");
    updateNavBarStyles();
  });

  closeBtn.addEventListener("click", () => {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    menuMobile.classList.remove("active");    
    if (window.innerWidth < 970) {
      navBar2.classList.add("navigation");
    } else {
      navBar2.classList.add("navigation");
    }
    updateNavBarStyles();
  });

  function handleResize() {
    if (window.innerWidth >= 850) {
      menuBtn.style.display = "none";
      closeBtn.style.display = "none";
      navBar2.classList.remove("navigation");
    } else {
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      navBar2.classList.remove("navigation");
    }
  }

  // Ejecutar handleResize al cargar la página
  // window.addEventListener("load", handleResize);
  
  // Ejecutar handleResize cada vez que se cambie el tamaño de la pantalla
  window.addEventListener("resize", handleResize);
  

  mobileLinks.forEach((link) =>
    link.addEventListener("click", () => {
      menuMobile.classList.remove("active");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
    })
  );

  
  //* ------------- Logique pour que le fond du navBar change a partir d'un petit scroll d'ecran, et aussi la couleur de certains elements qui se trouvent dans la navBar, et a partir de 300px de scroll la navBar disparait en se montre a noubeau quand on scroll vers la haut ----------------

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && window.scrollY < 300) {
      if (window.scrollY > 300) {
      navBar2.style.display = "none";
    } else {
      navBar2.classList.add("navigation");
    }
  }

  updateNavBarStyles();
  });

  let prevScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < prevScrollY) {
      navBar2.style.display = "flex";
    }

    prevScrollY = currentScrollY;
  });

  // Ejecutamos la función al cargar la página
  window.dispatchEvent(new Event("scroll"));
  

