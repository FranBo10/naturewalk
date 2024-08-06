(self["webpackChunk"] = self["webpackChunk"] || []).push([["menu2"],{

/***/ "./assets/js/menu2.js":
/*!****************************!*\
  !*** ./assets/js/menu2.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var navBar2 = document.querySelector("#navigation-2");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarElem = document.querySelector("nav ul li a");
var navBarUserName = document.querySelector(".logo a span");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
var languageToggle = document.querySelectorAll('#navigation-2 .language-toggle');
languageToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      var subMenu = this.nextElementSibling;
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
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
}
menuBtn === null || menuBtn === void 0 || menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile === null || menuMobile === void 0 || menuMobile.classList.add("active");
  navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  updateNavBarStyles();
});
closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener("click", function () {
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuMobile === null || menuMobile === void 0 || menuMobile.classList.remove("active");
  if (window.innerWidth < 970) {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
  }
  updateNavBarStyles();
});
function handleResize() {
  if (window.innerWidth >= 850) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "none";
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
  }
  updateNavBarStyles();
}

// Ejecutar handleResize al cargar la página
window.addEventListener("resize", handleResize);

// Actualiza el manejador de eventos para los enlaces en el menú móvil
mobileLinks.forEach(function (link) {
  var languageLink = link.querySelector('.language-toggle');
  if (!languageLink) {
    // Excluye el enlace de idiomas
    link.addEventListener("click", function () {
      menuMobile === null || menuMobile === void 0 || menuMobile.classList.remove("active");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      updateNavBarStyles();
    });
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 0 && window.scrollY < 300) {
    if (window.innerWidth >= 750) {
      navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
    } else {
      navBar2 === null || navBar2 === void 0 || navBar2.classList.add("navigation-2");
    }
  } else if (window.scrollY > 300) {
    if (navBar2) navBar2.style.display = "none";
  } else {
    navBar2 === null || navBar2 === void 0 || navBar2.classList.remove("navigation-2");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
  updateNavBarStyles();
});
var prevScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollY = window.scrollY;
  if (currentScrollY < prevScrollY) {
    if (navBar2) navBar2.style.display = "flex";
  }
  prevScrollY = currentScrollY;
});
window.dispatchEvent(new Event("scroll"));
updateNavBarStyles();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/menu2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEEsT0FBTyxlQUFQQSxPQUFPLENBQUVvQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDeEM7RUFDRixDQUFDLE1BQU0sSUFBSVQsTUFBTSxDQUFDWSxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQy9CLElBQUk1QixPQUFPLEVBQUVBLE9BQU8sQ0FBQ3VCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07RUFDN0MsQ0FBQyxNQUFNO0lBQ0w3QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFb0IsU0FBUyxDQUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3pDZixjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDaEQ7RUFFQUssa0JBQWtCLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFJTyxXQUFXLEdBQUdsQixNQUFNLENBQUNZLE9BQU87QUFFaENaLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDdEMsSUFBTXNCLGNBQWMsR0FBR25CLE1BQU0sQ0FBQ1ksT0FBTztFQUVyQyxJQUFJTyxjQUFjLEdBQUdELFdBQVcsRUFBRTtJQUNoQyxJQUFJbEMsT0FBTyxFQUFFQSxPQUFPLENBQUN1QixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0VBQzdDO0VBRUFLLFdBQVcsR0FBR0MsY0FBYztBQUM5QixDQUFDLENBQUM7QUFFRm5CLE1BQU0sQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekNWLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2QmFyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbi0yXCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuY29uc3QgbWVudU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1tb2JpbGVcIik7XHJcbmNvbnN0IG5hdkJhckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsIGxpIGFcIik7XHJcbmNvbnN0IG5hdkJhclVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvIGEgc3BhblwiKTtcclxuY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbW9iaWxlIGxpXCIpO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2VUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmF2aWdhdGlvbi0yIC5sYW5ndWFnZS10b2dnbGUnKTtcclxuXHJcbmxhbmd1YWdlVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAoc3ViTWVudSAmJiBzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3ViTWVudSkge1xyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2QmFyU3R5bGVzKCkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCB8fCB3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG59XHJcblxyXG5tZW51QnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5jbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTcwKSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIH1cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDg1MCkge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIH1cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufVxyXG5cclxuLy8gRWplY3V0YXIgaGFuZGxlUmVzaXplIGFsIGNhcmdhciBsYSBww6FnaW5hXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4vLyBBY3R1YWxpemEgZWwgbWFuZWphZG9yIGRlIGV2ZW50b3MgcGFyYSBsb3MgZW5sYWNlcyBlbiBlbCBtZW7DuiBtw7N2aWxcclxubW9iaWxlTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlTGluayA9IGxpbmsucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG4gIGlmICghbGFuZ3VhZ2VMaW5rKSB7IC8vIEV4Y2x1eWUgZWwgZW5sYWNlIGRlIGlkaW9tYXNcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnNjcm9sbFkgPiAwICYmIHdpbmRvdy5zY3JvbGxZIDwgMzAwKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzUwKSB7XHJcbiAgICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDMwMCkge1xyXG4gICAgaWYgKG5hdkJhcjIpIG5hdkJhcjIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxuICBcclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5sZXQgcHJldlNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbFkgPCBwcmV2U2Nyb2xsWSkge1xyXG4gICAgaWYgKG5hdkJhcjIpIG5hdkJhcjIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH1cclxuXHJcbiAgcHJldlNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcclxufSk7XHJcblxyXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpO1xyXG5cclxudXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiJdLCJuYW1lcyI6WyJuYXZCYXIyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUJ0biIsImNsb3NlQnRuIiwibWVudU1vYmlsZSIsIm5hdkJhckVsZW0iLCJuYXZCYXJVc2VyTmFtZSIsIm1vYmlsZUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxhbmd1YWdlVG9nZ2xlIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN1Yk1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwidXBkYXRlTmF2QmFyU3R5bGVzIiwic2Nyb2xsWSIsImRpc3BsYXkiLCJjb2xvciIsImhhbmRsZVJlc2l6ZSIsImxpbmsiLCJsYW5ndWFnZUxpbmsiLCJwcmV2U2Nyb2xsWSIsImN1cnJlbnRTY3JvbGxZIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==