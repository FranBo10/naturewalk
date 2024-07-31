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
console.log(navBar2);
console.log(menuBtn);
console.log(closeBtn);
console.log(menuMobile);
console.log(navBarElem);
console.log(navBarUserName);
console.log(mobileLinks);
console.log(languageToggle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUN2RCxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUNuRCxJQUFNRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUNyRCxJQUFNRyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN6RCxJQUFNSSxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN4RCxJQUFNSyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUM3RCxJQUFNTSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7QUFFaEUsSUFBTUMsY0FBYyxHQUFHVCxRQUFRLENBQUNRLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDO0FBRWxGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osT0FBTyxDQUFDO0FBQ3BCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDO0FBQ3BCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsUUFBUSxDQUFDO0FBQ3JCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsVUFBVSxDQUFDO0FBQ3ZCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sVUFBVSxDQUFDO0FBQ3ZCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsY0FBYyxDQUFDO0FBQzNCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxDQUFDO0FBQ3hCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDO0FBRTNCQSxjQUFjLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxNQUFNLEVBQUk7RUFDL0JBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLEtBQUssRUFBRTtJQUMvQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFJQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxJQUFJLEVBQUU7TUFDNUIsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCO01BQ3ZDLElBQUlELE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqREgsT0FBTyxDQUFDRSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaENKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRztNQUM1QixDQUFDLE1BQU0sSUFBSU4sT0FBTyxFQUFFO1FBQ2xCQSxPQUFPLENBQUNFLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QlAsT0FBTyxDQUFDSyxLQUFLLENBQUNDLE1BQU0sR0FBR04sT0FBTyxDQUFDUSxZQUFZLEdBQUcsSUFBSTtNQUNwRDtJQUNGO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsU0FBU0Msa0JBQWtCQSxDQUFBLEVBQUc7RUFDNUIsSUFBSVgsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRyxJQUFJRCxNQUFNLENBQUNZLE9BQU8sR0FBRyxDQUFDLEVBQUU7SUFDakQ5QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFc0IsU0FBUyxDQUFDSyxHQUFHLENBQUMsY0FBYyxDQUFDO0lBQ3RDcEIsY0FBYyxhQUFkQSxjQUFjLGVBQWRBLGNBQWMsQ0FBRWUsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQzdDLENBQUMsTUFBTTtJQUNMM0IsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXNCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN6Q2pCLGNBQWMsYUFBZEEsY0FBYyxlQUFkQSxjQUFjLENBQUVlLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUNoRDtBQUNGO0FBRUFyQixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN2Q1osT0FBTyxDQUFDc0IsS0FBSyxDQUFDTSxPQUFPLEdBQUcsTUFBTTtFQUM5QjNCLFFBQVEsQ0FBQ3FCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE9BQU87RUFDaEMzQixRQUFRLENBQUNxQixLQUFLLENBQUNPLEtBQUssR0FBRyxPQUFPO0VBQzlCM0IsVUFBVSxhQUFWQSxVQUFVLGVBQVZBLFVBQVUsQ0FBRWlCLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNuQ3BCLGNBQWMsYUFBZEEsY0FBYyxlQUFkQSxjQUFjLENBQUVlLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLFlBQVksQ0FBQztFQUMzQzNCLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVzQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDdENFLGtCQUFrQixDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUZ6QixRQUFRLGFBQVJBLFFBQVEsZUFBUkEsUUFBUSxDQUFFVyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN4Q1osT0FBTyxDQUFDc0IsS0FBSyxDQUFDTSxPQUFPLEdBQUcsT0FBTztFQUMvQjNCLFFBQVEsQ0FBQ3FCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07RUFDL0IxQixVQUFVLGFBQVZBLFVBQVUsZUFBVkEsVUFBVSxDQUFFaUIsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQ3RDLElBQUlOLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUMzQm5CLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVzQixTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDeEMsQ0FBQyxNQUFNO0lBQ0wzQixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFc0IsU0FBUyxDQUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO0VBQzNDO0VBQ0FLLGtCQUFrQixDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsU0FBU0ksWUFBWUEsQ0FBQSxFQUFHO0VBQ3RCLElBQUlmLE1BQU0sQ0FBQ0MsVUFBVSxJQUFJLEdBQUcsRUFBRTtJQUM1QmhCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE1BQU07SUFDOUIzQixRQUFRLENBQUNxQixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0lBQy9CL0IsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXNCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztFQUMzQyxDQUFDLE1BQU07SUFDTHJCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FBQ00sT0FBTyxHQUFHLE9BQU87SUFDL0IzQixRQUFRLENBQUNxQixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0lBQy9CL0IsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXNCLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUN4QztFQUNBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RCOztBQUVBO0FBQ0FYLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFa0IsWUFBWSxDQUFDOztBQUUvQztBQUNBekIsV0FBVyxDQUFDSyxPQUFPLENBQUMsVUFBQ3FCLElBQUksRUFBSztFQUM1QixJQUFNQyxZQUFZLEdBQUdELElBQUksQ0FBQ2hDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUMzRCxJQUFJLENBQUNpQyxZQUFZLEVBQUU7SUFBRTtJQUNuQkQsSUFBSSxDQUFDbkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDbkNWLFVBQVUsYUFBVkEsVUFBVSxlQUFWQSxVQUFVLENBQUVpQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDdENyQixPQUFPLENBQUNzQixLQUFLLENBQUNNLE9BQU8sR0FBRyxPQUFPO01BQy9CM0IsUUFBUSxDQUFDcUIsS0FBSyxDQUFDTSxPQUFPLEdBQUcsTUFBTTtNQUMvQkYsa0JBQWtCLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQztBQUVGWCxNQUFNLENBQUNILGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3RDLElBQUlHLE1BQU0sQ0FBQ1ksT0FBTyxHQUFHLENBQUMsSUFBSVosTUFBTSxDQUFDWSxPQUFPLEdBQUcsR0FBRyxFQUFFO0lBQzlDLElBQUlaLE1BQU0sQ0FBQ0MsVUFBVSxJQUFJLEdBQUcsRUFBRTtNQUM1QlosY0FBYyxhQUFkQSxjQUFjLGVBQWRBLGNBQWMsQ0FBRWUsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUMsTUFBTTtNQUNMM0IsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRXNCLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN4QztFQUNGLENBQUMsTUFBTSxJQUFJVCxNQUFNLENBQUNZLE9BQU8sR0FBRyxHQUFHLEVBQUU7SUFDL0IsSUFBSTlCLE9BQU8sRUFBRUEsT0FBTyxDQUFDeUIsS0FBSyxDQUFDTSxPQUFPLEdBQUcsTUFBTTtFQUM3QyxDQUFDLE1BQU07SUFDTC9CLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUVzQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDekNqQixjQUFjLGFBQWRBLGNBQWMsZUFBZEEsY0FBYyxDQUFFZSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7RUFDaEQ7RUFFQUssa0JBQWtCLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFJTyxXQUFXLEdBQUdsQixNQUFNLENBQUNZLE9BQU87QUFFaENaLE1BQU0sQ0FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDdEMsSUFBTXNCLGNBQWMsR0FBR25CLE1BQU0sQ0FBQ1ksT0FBTztFQUVyQyxJQUFJTyxjQUFjLEdBQUdELFdBQVcsRUFBRTtJQUNoQyxJQUFJcEMsT0FBTyxFQUFFQSxPQUFPLENBQUN5QixLQUFLLENBQUNNLE9BQU8sR0FBRyxNQUFNO0VBQzdDO0VBRUFLLFdBQVcsR0FBR0MsY0FBYztBQUM5QixDQUFDLENBQUM7QUFFRm5CLE1BQU0sQ0FBQ29CLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekNWLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2QmFyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbi0yXCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ0blwiKTtcclxuY29uc3QgbWVudU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1tb2JpbGVcIik7XHJcbmNvbnN0IG5hdkJhckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IHVsIGxpIGFcIik7XHJcbmNvbnN0IG5hdkJhclVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvIGEgc3BhblwiKTtcclxuY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbW9iaWxlIGxpXCIpO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2VUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmF2aWdhdGlvbi0yIC5sYW5ndWFnZS10b2dnbGUnKTtcclxuXHJcbmNvbnNvbGUubG9nKG5hdkJhcjIpO1xyXG5jb25zb2xlLmxvZyhtZW51QnRuKTtcclxuY29uc29sZS5sb2coY2xvc2VCdG4pO1xyXG5jb25zb2xlLmxvZyhtZW51TW9iaWxlKTtcclxuY29uc29sZS5sb2cobmF2QmFyRWxlbSk7XHJcbmNvbnNvbGUubG9nKG5hdkJhclVzZXJOYW1lKTtcclxuY29uc29sZS5sb2cobW9iaWxlTGlua3MpO1xyXG5jb25zb2xlLmxvZyhsYW5ndWFnZVRvZ2dsZSk7XHJcblxyXG5sYW5ndWFnZVRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XHJcbiAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMDI0KSB7XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgaWYgKHN1Yk1lbnUgJiYgc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHN1Yk1lbnUpIHtcclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLmhlaWdodCA9IHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkJhclN0eWxlcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTAgfHwgd2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuYXZCYXIyPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxufVxyXG5cclxubWVudUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBtZW51TW9iaWxlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk3MCkge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA4NTApIHtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICB9XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn1cclxuXHJcbi8vIEVqZWN1dGFyIGhhbmRsZVJlc2l6ZSBhbCBjYXJnYXIgbGEgcMOhZ2luYVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuLy8gQWN0dWFsaXphIGVsIG1hbmVqYWRvciBkZSBldmVudG9zIHBhcmEgbG9zIGVubGFjZXMgZW4gZWwgbWVuw7ogbcOzdmlsXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBjb25zdCBsYW5ndWFnZUxpbmsgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZS10b2dnbGUnKTtcclxuICBpZiAoIWxhbmd1YWdlTGluaykgeyAvLyBFeGNsdXllIGVsIGVubGFjZSBkZSBpZGlvbWFzXHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAzMDApIHtcclxuICAgIGlmIChuYXZCYXIyKSBuYXZCYXIyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuICAgIGlmIChuYXZCYXIyKSBuYXZCYXIyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcblxyXG4gIHByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbnVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4iXSwibmFtZXMiOlsibmF2QmFyMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVCdG4iLCJjbG9zZUJ0biIsIm1lbnVNb2JpbGUiLCJuYXZCYXJFbGVtIiwibmF2QmFyVXNlck5hbWUiLCJtb2JpbGVMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsYW5ndWFnZVRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3ViTWVudSIsIm5leHRFbGVtZW50U2libGluZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJ1cGRhdGVOYXZCYXJTdHlsZXMiLCJzY3JvbGxZIiwiZGlzcGxheSIsImNvbG9yIiwiaGFuZGxlUmVzaXplIiwibGluayIsImxhbmd1YWdlTGluayIsInByZXZTY3JvbGxZIiwiY3VycmVudFNjcm9sbFkiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9