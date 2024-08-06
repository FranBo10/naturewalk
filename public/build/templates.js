(self["webpackChunk"] = self["webpackChunk"] || []).push([["templates"],{

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var navBar1 = document.querySelector("#navigation");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");
var menuMobile = document.querySelector(".menu-mobile");
var navBarElem = document.querySelector("nav ul li a");
var navBarUserName = document.querySelector(".logo a span");
var mobileLinks = document.querySelectorAll(".menu-mobile li");
var languageToggle = document.querySelectorAll('#navigation .language-toggle');
languageToggle.forEach(function (toggle) {
  toggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (window.innerWidth < 1024) {
      var subMenu = this.nextElementSibling;
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
menuBtn.addEventListener("click", function () {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  closeBtn.style.color = "white";
  menuMobile.classList.add("active");
  navBarUserName.classList.add("logoNombre");
  navBar1.classList.add("navigation");
  updateNavBarStyles();
});
closeBtn.addEventListener("click", function () {
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
    navBar1 === null || navBar1 === void 0 || navBar1.classList.remove("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  } else {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    navBar1 === null || navBar1 === void 0 || navBar1.classList.add("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.add("logoNombre");
  }
  updateNavBarStyles();
}
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
      navBar1 === null || navBar1 === void 0 || navBar1.classList.add("navigation");
    }
  } else if (window.scrollY > 300) {
    if (navBar1) navBar1.style.display = "none";
  } else {
    navBar1 === null || navBar1 === void 0 || navBar1.classList.remove("navigation");
    navBarUserName === null || navBarUserName === void 0 || navBarUserName.classList.remove("logoNombre");
  }
  updateNavBarStyles();
});
var prevScrollY = window.scrollY;
window.addEventListener("scroll", function () {
  var currentScrollY = window.scrollY;
  if (currentScrollY < prevScrollY) {
    if (navBar1) navBar1.style.display = "flex";
  }
  prevScrollY = currentScrollY;
});
window.dispatchEvent(new Event("scroll"));
updateNavBarStyles();

/***/ }),

/***/ "./assets/js/tour.js":
/*!***************************!*\
  !*** ./assets/js/tour.js ***!
  \***************************/
/***/ (() => {

var mostrarLink = document.getElementById('mostrar-link');
var ocultarLink = document.getElementById('ocultar-link');
var descripcionHidden = document.querySelector('.descripcion-hidden');
mostrarLink.addEventListener('click', function (event) {
  event.preventDefault();
  if (descripcionHidden.classList.contains('descripcion-visible')) {
    descripcionHidden.classList.remove('descripcion-visible');
    mostrarLink.textContent = 'See full description';
    ocultarLink.classList.add('hidden');
  } else {
    descripcionHidden.classList.add('descripcion-visible');
    mostrarLink.textContent = 'Hide description';
    ocultarLink.classList.remove('hidden'); // Removemos la clase 'hidden' si está presente
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/tour.js"), __webpack_exec__("./assets/js/menu.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDckQsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDbkQsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDckQsSUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDekQsSUFBTUksVUFBVSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDeEQsSUFBTUssY0FBYyxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDN0QsSUFBTU0sV0FBVyxHQUFHUCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0FBRWhFLElBQU1DLGNBQWMsR0FBR1QsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQztBQUVoRkMsY0FBYyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsTUFBTSxFQUFJO0VBQy9CQSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTQyxLQUFLLEVBQUU7SUFDL0NBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSUMsTUFBTSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxFQUFFO01BQzVCLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNDLGtCQUFrQjtNQUN2QyxJQUFJRCxPQUFPLEVBQUU7UUFDWCxJQUFJQSxPQUFPLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1VBQ3RDSCxPQUFPLENBQUNFLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUNoQ0osT0FBTyxDQUFDSyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO1FBQzVCLENBQUMsTUFBTTtVQUNMTixPQUFPLENBQUNFLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUM3QlAsT0FBTyxDQUFDSyxLQUFLLENBQUNDLE1BQU0sR0FBR04sT0FBTyxDQUFDUSxZQUFZLEdBQUcsSUFBSTtRQUNwRDtNQUNGO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixTQUFTQyxrQkFBa0JBLENBQUEsRUFBRztFQUM1QixJQUFJWCxNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHLElBQUlELE1BQU0sQ0FBQ1ksT0FBTyxHQUFHLENBQUMsRUFBRTtJQUNqRDVCLE9BQU8sQ0FBQ29CLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNuQ2xCLGNBQWMsQ0FBQ2EsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQzVDO0FBQ0Y7QUFHQXRCLE9BQU8sQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDdENWLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07RUFDOUJ6QixRQUFRLENBQUNtQixLQUFLLENBQUNNLE9BQU8sR0FBRyxPQUFPO0VBQ2hDekIsUUFBUSxDQUFDbUIsS0FBSyxDQUFDTyxLQUFLLEdBQUcsT0FBTztFQUM5QnpCLFVBQVUsQ0FBQ2UsU0FBUyxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ2xDbEIsY0FBYyxDQUFDYSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDMUN6QixPQUFPLENBQUNvQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDbkNFLGtCQUFrQixDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ2QixRQUFRLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3ZDVixPQUFPLENBQUNvQixLQUFLLENBQUNNLE9BQU8sR0FBRyxPQUFPO0VBQy9CekIsUUFBUSxDQUFDbUIsS0FBSyxDQUFDTSxPQUFPLEdBQUcsTUFBTTtFQUMvQnhCLFVBQVUsQ0FBQ2UsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3JDLElBQUlOLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUMzQmpCLE9BQU8sQ0FBQ29CLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLFlBQVksQ0FBQztFQUNyQyxDQUFDLE1BQU07SUFDTHpCLE9BQU8sQ0FBQ29CLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUN4QztFQUVBSyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLFNBQVNJLFlBQVlBLENBQUEsRUFBRztFQUN0QixJQUFJZixNQUFNLENBQUNDLFVBQVUsSUFBSSxHQUFHLEVBQUU7SUFDNUJkLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07SUFDOUJ6QixRQUFRLENBQUNtQixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0lBQy9CN0IsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRW9CLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN2Q2YsY0FBYyxhQUFkQSxjQUFjLGVBQWRBLGNBQWMsQ0FBRWEsU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQ2hELENBQUMsTUFBTTtJQUNMbkIsT0FBTyxDQUFDb0IsS0FBSyxDQUFDTSxPQUFPLEdBQUcsT0FBTztJQUMvQnpCLFFBQVEsQ0FBQ21CLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07SUFDL0I3QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFb0IsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3BDbEIsY0FBYyxhQUFkQSxjQUFjLGVBQWRBLGNBQWMsQ0FBRWEsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQzdDO0VBQ0FFLGtCQUFrQixDQUFDLENBQUM7QUFDdEI7QUFFQVgsTUFBTSxDQUFDSCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVrQixZQUFZLENBQUM7O0FBRS9DO0FBQ0F2QixXQUFXLENBQUNHLE9BQU8sQ0FBQyxVQUFDcUIsSUFBSSxFQUFLO0VBQzVCLElBQU1DLFlBQVksR0FBR0QsSUFBSSxDQUFDOUIsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0VBQzNELElBQUksQ0FBQytCLFlBQVksRUFBRTtJQUFFO0lBQ25CRCxJQUFJLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNuQ1IsVUFBVSxhQUFWQSxVQUFVLGVBQVZBLFVBQVUsQ0FBRWUsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3RDbkIsT0FBTyxDQUFDb0IsS0FBSyxDQUFDTSxPQUFPLEdBQUcsT0FBTztNQUMvQnpCLFFBQVEsQ0FBQ21CLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07TUFDL0JGLGtCQUFrQixDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0VBQ0o7QUFDRixDQUFDLENBQUM7QUFFRlgsTUFBTSxDQUFDSCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtFQUN0QyxJQUFJRyxNQUFNLENBQUNZLE9BQU8sR0FBRyxDQUFDLElBQUlaLE1BQU0sQ0FBQ1ksT0FBTyxHQUFHLEdBQUcsRUFBRTtJQUM5QyxJQUFJWixNQUFNLENBQUNDLFVBQVUsSUFBSSxHQUFHLEVBQUU7TUFDNUJWLGNBQWMsYUFBZEEsY0FBYyxlQUFkQSxjQUFjLENBQUVhLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLFlBQVksQ0FBQztJQUM3QyxDQUFDLE1BQU07TUFDTHpCLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVvQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDdEM7RUFDRixDQUFDLE1BQU0sSUFBSVQsTUFBTSxDQUFDWSxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQy9CLElBQUk1QixPQUFPLEVBQUVBLE9BQU8sQ0FBQ3VCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07RUFDN0MsQ0FBQyxNQUFNO0lBQ0w3QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFb0IsU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3ZDZixjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDaEQ7RUFFQUssa0JBQWtCLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFJTyxXQUFXLEdBQUdsQixNQUFNLENBQUNZLE9BQU87QUFFaENaLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDdEMsSUFBTXNCLGNBQWMsR0FBR25CLE1BQU0sQ0FBQ1ksT0FBTztFQUVyQyxJQUFJTyxjQUFjLEdBQUdELFdBQVcsRUFBRTtJQUNoQyxJQUFJbEMsT0FBTyxFQUFFQSxPQUFPLENBQUN1QixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0VBQzdDO0VBRUFLLFdBQVcsR0FBR0MsY0FBYztBQUM5QixDQUFDLENBQUM7QUFFRm5CLE1BQU0sQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekNWLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUN4SHBCLElBQU1XLFdBQVcsR0FBR3JDLFFBQVEsQ0FBQ3NDLGNBQWMsQ0FBQyxjQUFjLENBQUM7QUFDM0QsSUFBTUMsV0FBVyxHQUFHdkMsUUFBUSxDQUFDc0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUMzRCxJQUFNRSxpQkFBaUIsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBRXZFb0MsV0FBVyxDQUFDekIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUNyREEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixJQUFJMEIsaUJBQWlCLENBQUNyQixTQUFTLENBQUNDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO0lBQy9Eb0IsaUJBQWlCLENBQUNyQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztJQUN6RGdCLFdBQVcsQ0FBQ0ksV0FBVyxHQUFHLHNCQUFzQjtJQUNoREYsV0FBVyxDQUFDcEIsU0FBUyxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQ3JDLENBQUMsTUFBTTtJQUNMZ0IsaUJBQWlCLENBQUNyQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUN0RGEsV0FBVyxDQUFDSSxXQUFXLEdBQUcsa0JBQWtCO0lBQzVDRixXQUFXLENBQUNwQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzFDO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2QmFyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idG5cIik7XHJcbmNvbnN0IG1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbW9iaWxlXCIpO1xyXG5jb25zdCBuYXZCYXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiB1bCBsaSBhXCIpO1xyXG5jb25zdCBuYXZCYXJVc2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nbyBhIHNwYW5cIik7XHJcbmNvbnN0IG1vYmlsZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LW1vYmlsZSBsaVwiKTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdmlnYXRpb24gLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG5cclxubGFuZ3VhZ2VUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChzdWJNZW51KSB7XHJcbiAgICAgICAgaWYgKHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSBzdWJNZW51LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlTmF2QmFyU3R5bGVzKCkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MCB8fCB3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZS5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9IFxyXG59XHJcblxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgbWVudU1vYmlsZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyAgXHJcbiAgbmF2QmFyVXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgbmF2QmFyMS5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCkge1xyXG4gICAgbmF2QmFyMS5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvblwiKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODUwKSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4vLyBBY3R1YWxpemEgZWwgbWFuZWphZG9yIGRlIGV2ZW50b3MgcGFyYSBsb3MgZW5sYWNlcyBlbiBlbCBtZW7DuiBtw7N2aWxcclxubW9iaWxlTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gIGNvbnN0IGxhbmd1YWdlTGluayA9IGxpbmsucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG4gIGlmICghbGFuZ3VhZ2VMaW5rKSB7IC8vIEV4Y2x1eWUgZWwgZW5sYWNlIGRlIGlkaW9tYXNcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnNjcm9sbFkgPiAwICYmIHdpbmRvdy5zY3JvbGxZIDwgMzAwKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzUwKSB7XHJcbiAgICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuICAgIGlmIChuYXZCYXIxKSBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMT8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5sZXQgcHJldlNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbFkgPCBwcmV2U2Nyb2xsWSkge1xyXG4gICAgaWYgKG5hdkJhcjEpIG5hdkJhcjEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH1cclxuXHJcbiAgcHJldlNjcm9sbFkgPSBjdXJyZW50U2Nyb2xsWTtcclxufSk7XHJcblxyXG53aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzY3JvbGxcIikpO1xyXG5cclxudXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiIsImNvbnN0IG1vc3RyYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vc3RyYXItbGluaycpO1xyXG5jb25zdCBvY3VsdGFyTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY3VsdGFyLWxpbmsnKTtcclxuY29uc3QgZGVzY3JpcGNpb25IaWRkZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcGNpb24taGlkZGVuJyk7XHJcblxyXG5tb3N0cmFyTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKSkge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LnJlbW92ZSgnZGVzY3JpcGNpb24tdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnU2VlIGZ1bGwgZGVzY3JpcHRpb24nO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXBjaW9uLXZpc2libGUnKTtcclxuICAgIG1vc3RyYXJMaW5rLnRleHRDb250ZW50ID0gJ0hpZGUgZGVzY3JpcHRpb24nO1xyXG4gICAgb2N1bHRhckxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IC8vIFJlbW92ZW1vcyBsYSBjbGFzZSAnaGlkZGVuJyBzaSBlc3TDoSBwcmVzZW50ZVxyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJuYXZCYXIxIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudUJ0biIsImNsb3NlQnRuIiwibWVudU1vYmlsZSIsIm5hdkJhckVsZW0iLCJuYXZCYXJVc2VyTmFtZSIsIm1vYmlsZUxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxhbmd1YWdlVG9nZ2xlIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN1Yk1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwidXBkYXRlTmF2QmFyU3R5bGVzIiwic2Nyb2xsWSIsImRpc3BsYXkiLCJjb2xvciIsImhhbmRsZVJlc2l6ZSIsImxpbmsiLCJsYW5ndWFnZUxpbmsiLCJwcmV2U2Nyb2xsWSIsImN1cnJlbnRTY3JvbGxZIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwibW9zdHJhckxpbmsiLCJnZXRFbGVtZW50QnlJZCIsIm9jdWx0YXJMaW5rIiwiZGVzY3JpcGNpb25IaWRkZW4iLCJ0ZXh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=