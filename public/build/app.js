(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu */ "./assets/js/menu.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_menu2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu2 */ "./assets/js/menu2.js");
/* harmony import */ var _js_menu2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_menu2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_tour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/tour */ "./assets/js/tour.js");
/* harmony import */ var _js_tour__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_tour__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/avatars */ "./assets/js/avatars.js");
/* harmony import */ var _js_avatars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_avatars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/cookies */ "./assets/js/cookies.js");
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/valoraciones */ "./assets/js/valoraciones.js");
/* harmony import */ var _js_valoraciones__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_valoraciones__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/cuenta */ "./assets/js/cuenta.js");
/* harmony import */ var _js_cuenta__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_cuenta__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/calendario */ "./assets/js/calendario.js");
/* harmony import */ var _js_calendario__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_calendario__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");









// import './controllers/cookie-consent-controller';

// const $ = require('jquery');
// // this "modifies" the jquery module: adding behavior to it
// // the bootstrap module doesn't export/return anything
// require('bootstrap');

// // or you can include specific pieces
// // require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

/***/ }),

/***/ "./assets/js/avatars.js":
/*!******************************!*\
  !*** ./assets/js/avatars.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
var select = document.querySelectorAll(".select");
var options = document.querySelectorAll(".options");
var selectedImage = document.querySelectorAll(".selectedImage");
var selectAvatar = document.querySelectorAll(".selectAvatar");
var avatarInput = document.querySelectorAll('input[name="registration_form[avatar]"]');
var avatarInputCuenta = document.querySelector('input[name="user_form[avatar]"]');
var modal = document.querySelectorAll(".container"); // Modifica esto según la clase o ID de tu modal

select.forEach(function (sel) {
  sel.addEventListener("click", function () {
    sel.classList.toggle("active");
    options.forEach(function (opt) {
      opt.classList.toggle("active");
      opt.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var selectAvatars = document.querySelectorAll(".selectAvatar");
  selectAvatars.forEach(function (selectAvatar) {
    selectAvatar.addEventListener("click", function (event) {
      event.preventDefault();
      var imagePath = this.querySelector("img").src;
      var avatar = imagePath.split('/').pop().split('.')[0];
      selectedImage.forEach(function (selImg) {
        selImg.src = imagePath;
        selImg.value = avatar;
      });
      avatarInput.forEach(function (avatarInp) {
        avatarInp.value = avatar;
      });
      if (avatarInputCuenta) {
        avatarInputCuenta.value = avatar;
      }
      console.log('Avatar seleccionado:', avatar);

      // Envía el avatar seleccionado al servidor
      actualizarAvatarEnSession(avatar);
      options.forEach(function (opt) {
        opt.classList.toggle("active");
        opt.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
      select.forEach(function (sel) {
        sel.classList.toggle("active");
      });
    });
  });

  // Nueva función para enviar el avatar seleccionado al servidor
  function actualizarAvatarEnSession(avatar) {
    $.ajax({
      type: 'POST',
      url: '/actualizar-avatar-session',
      // Ajusta la URL según tu configuración
      data: {
        avatar: avatar
      },
      success: function success(response) {
        console.log('Avatar actualizado en la sesión correctamente');
      },
      error: function error(_error) {
        console.error('Error al actualizar el avatar en la sesión');
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/calendario.js":
/*!*********************************!*\
  !*** ./assets/js/calendario.js ***!
  \*********************************/
/***/ (() => {

//* ------------ Traitement du Calendar -----------------

//   document.addEventListener("DOMContentLoaded", () => {
//     let calendarEl = document.getElementById("calendario");

//     $.ajaxSetup({
//       headers:{
//           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
//       }
//     });

//     let events = eventData.map(event => ({
//       id: event.id,
//       title: event.titulo,
//       start: event.inicio,
//       end: event.fin,
//       cantidad: event.cantidadAsistentes,
//       usuario: event.usuario
//   }));

//     let calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'multiMonthYear',
//       locale: "es",
//       timeZone: "Europe/Paris",
//       headerToolbar: {
//           start: "prev, next today",
//           center: "title",
//           end: "dayGridMonth, timeGridWeek, list",
//       },
//       buttonText: {
//           today: "Hoy",
//           month: "Mes",
//           week: "Semana",
//           list: "Día"
//       },
//       events: events,
//       selectable: true,
//       editable: true,
//       allDaySlot: false,
//       eventClick: function (start, end) {
//         $('#reservaModal').modal('toggle');

//         // Desvincular el controlador de clic previo
//         $('#guardarBtn').off('click').click(function() {
//             let title = $('#title').val();
//             let start_date = moment(start).format('YYYY-MM-DD');
//             let end_date = moment(end).format('YYYY-MM-DD');

//             let requestData = {
//                 title: title,
//                 start_date: start_date,
//                 end_date: end_date
//             };

//             console.log(requestData)

//             $.ajax({
//                 url: "{{ path('store') }}",
//                 method: "POST",
//                 dataType: "json",
//                 data: requestData,
//                 success: function(response) {
//                     $('#reservaModal').modal('hide');
//                     $('#calendario').fullCalendar('renderEvent', {
//                         title: response.title,
//                         start: response.start_date,
//                         end: response.end_date
//                     });
//                 },
//                 error: function(error) {
//                     if (error.responseJSON && error.responseJSON.errors) {
//                         for (const field in error.responseJSON.errors) {
//                             $('#' + field + 'error').html(error.responseJSON.errors[field]);
//                         }
//                     }
//                 }
//             });
//         });
//     },

//   });

//   calendar.render();
// });

/***/ }),

/***/ "./assets/js/cookies.js":
/*!******************************!*\
  !*** ./assets/js/cookies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var cookieBox = document.querySelector('.wrapper');
  var buttons = document.querySelectorAll('.button');
  var connect = function connect() {
    if (!sessionStorage.getItem("cookieAccepted")) {
      cookieBox.classList.add("show");
    }
  };
  var acceptOrDecline = function acceptOrDecline() {
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        sessionStorage.setItem("cookieAccepted", "true");
        cookieBox.classList.remove("show");
        if (button.id === "aceptar") {
          document.cookie = "cookieBy=FreetourGo; max-age=" + 60 * 60 * 24 * 30;
          localStorage.setItem('cookieConsent', 'accepted');
        } else if (button.id === "declinar") {
          localStorage.setItem('cookieConsent', 'declined');
        }
      });
    });
  };
  window.addEventListener("load", function () {
    if (!localStorage.getItem('cookieConsent')) {
      connect();
      acceptOrDecline();
    } else {
      sessionStorage.setItem("cookieAccepted", "true");
    }
  });
});

/***/ }),

/***/ "./assets/js/cuenta.js":
/*!*****************************!*\
  !*** ./assets/js/cuenta.js ***!
  \*****************************/
/***/ (() => {

var footer = document.querySelector('footer');
var mainContainer = document.getElementById("main-container");
document.addEventListener("DOMContentLoaded", function () {
  var datosPersoContainer = document.querySelector(".datos_perso-container");
  var datosPersoElementos = datosPersoContainer.querySelector(".datos_perso-elementos");
  var persoFormContainer = datosPersoContainer.querySelector(".perso_form-container");
  datosPersoElementos.addEventListener("click", function () {
    persoFormContainer.classList.toggle("active");
    datosPersoElementos.classList.toggle("active");
  });
});

/***/ }),

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

/***/ }),

/***/ "./assets/js/valoraciones.js":
/*!***********************************!*\
  !*** ./assets/js/valoraciones.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll(".stars .la-star");
  var nota = document.querySelector("#nota");
  var _iterator = _createForOfIteratorHelper(stars),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      star = _step.value;
      star.addEventListener("mouseover", function () {
        resetStars();
        this.style.color = "gold";
        this.classList.add("las");
        this.classList.remove("lar");
        var previousStar = this.previousElementSibling;
        while (previousStar) {
          previousStar.style.color = "gold";
          previousStar.classList.add("las");
          previousStar.classList.remove("lar");
          previousStar = previousStar.previousElementSibling;
        }
      });
      star.addEventListener("mouseout", function () {
        resetStars(nota.value);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      var valorNota = parseInt(this.dataset.value);
      nota.value = valorNota;
      console.log(nota.value);
    });
  });
  function resetStars() {
    var nota = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var _iterator2 = _createForOfIteratorHelper(stars),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        star = _step2.value;
        if (star.dataset.value > nota) {
          star.style.color = "black";
          star.classList.add("lar");
          star.classList.remove("las");
        } else {
          star.style.color = "gold";
          star.classList.add("las");
          star.classList.remove("lar");
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  document.getElementById('submit-btn').addEventListener('click', function (event) {
    var notaValue = document.getElementById('nota').value;
    if (notaValue == 0) {
      event.preventDefault();
      var errorDiv = document.createElement('div');
      errorDiv.classList.add('alert', 'alert-danger');
      errorDiv.innerText = 'La nota no puede ser 0. Por favor, seleccione al menos una estrella.';
      document.querySelector('.valoracion').appendChild(errorDiv);
    }
  });
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-db9b6e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXZhdGFycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FsZW5kYXJpby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VlbnRhLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tZW51Mi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdG91ci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmFsb3JhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzPzVmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2pzL21lbnUnO1xuaW1wb3J0ICcuL2pzL21lbnUyJztcbmltcG9ydCAnLi9qcy90b3VyJztcbmltcG9ydCAnLi9qcy9hdmF0YXJzJztcbmltcG9ydCAnLi9qcy9jb29raWVzJztcbmltcG9ydCAnLi9qcy92YWxvcmFjaW9uZXMnO1xuaW1wb3J0ICcuL2pzL2N1ZW50YSc7XG5pbXBvcnQgJy4vanMvY2FsZW5kYXJpbyc7XG5pbXBvcnQgJy4vc2Nzcy9hcHAuc2Nzcyc7XG4vLyBpbXBvcnQgJy4vY29udHJvbGxlcnMvY29va2llLWNvbnNlbnQtY29udHJvbGxlcic7XG5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIC8vIHRoaXMgXCJtb2RpZmllc1wiIHRoZSBqcXVlcnkgbW9kdWxlOiBhZGRpbmcgYmVoYXZpb3IgdG8gaXRcbi8vIC8vIHRoZSBib290c3RyYXAgbW9kdWxlIGRvZXNuJ3QgZXhwb3J0L3JldHVybiBhbnl0aGluZ1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIC8vIG9yIHlvdSBjYW4gaW5jbHVkZSBzcGVjaWZpYyBwaWVjZXNcbi8vIC8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnKTtcbi8vIHJlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcblxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgICAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcbi8vIH0pOyIsImNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpO1xyXG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25zXCIpO1xyXG5jb25zdCBzZWxlY3RlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEltYWdlXCIpO1xyXG5jb25zdCBzZWxlY3RBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuY29uc3QgYXZhdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICdpbnB1dFtuYW1lPVwicmVnaXN0cmF0aW9uX2Zvcm1bYXZhdGFyXVwiXSdcclxuKTtcclxuY29uc3QgYXZhdGFySW5wdXRDdWVudGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcl9mb3JtW2F2YXRhcl1cIl0nKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7IC8vIE1vZGlmaWNhIGVzdG8gc2Vnw7puIGxhIGNsYXNlIG8gSUQgZGUgdHUgbW9kYWxcclxuXHJcbnNlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcclxuICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG9wdC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdEF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuXHJcbiAgc2VsZWN0QXZhdGFycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RBdmF0YXIpIHtcclxuICAgICAgc2VsZWN0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYztcclxuICAgICAgICAgIGNvbnN0IGF2YXRhciA9IGltYWdlUGF0aC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF07XHJcblxyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxJbWcpIHtcclxuICAgICAgICAgICAgICBzZWxJbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICAgIHNlbEltZy52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF2YXRhcklucHV0LmZvckVhY2goZnVuY3Rpb24gKGF2YXRhcklucCkge1xyXG4gICAgICAgICAgICAgIGF2YXRhcklucC52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChhdmF0YXJJbnB1dEN1ZW50YSkge1xyXG4gICAgICAgICAgICBhdmF0YXJJbnB1dEN1ZW50YS52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIHNlbGVjY2lvbmFkbzonLCBhdmF0YXIpO1xyXG5cclxuICAgICAgICAgIC8vIEVudsOtYSBlbCBhdmF0YXIgc2VsZWNjaW9uYWRvIGFsIHNlcnZpZG9yXHJcbiAgICAgICAgICBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XHJcbiAgICAgICAgICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgb3B0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZWxlY3QuZm9yRWFjaChmdW5jdGlvbiAoc2VsKSB7XHJcbiAgICAgICAgICAgICAgc2VsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE51ZXZhIGZ1bmNpw7NuIHBhcmEgZW52aWFyIGVsIGF2YXRhciBzZWxlY2Npb25hZG8gYWwgc2Vydmlkb3JcclxuICBmdW5jdGlvbiBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYWN0dWFsaXphci1hdmF0YXItc2Vzc2lvbicsIC8vIEFqdXN0YSBsYSBVUkwgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXHJcbiAgICAgIGRhdGE6IHsgYXZhdGFyOiBhdmF0YXIgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIGFjdHVhbGl6YWRvIGVuIGxhIHNlc2nDs24gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBhY3R1YWxpemFyIGVsIGF2YXRhciBlbiBsYSBzZXNpw7NuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4iLCIvLyogLS0tLS0tLS0tLS0tIFRyYWl0ZW1lbnQgZHUgQ2FsZW5kYXIgLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIGxldCBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxlbmRhcmlvXCIpO1xyXG5cclxuICAvLyAgICAgJC5hamF4U2V0dXAoe1xyXG4gIC8vICAgICAgIGhlYWRlcnM6e1xyXG4gIC8vICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSxcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gICAgICBcclxuICAvLyAgICAgbGV0IGV2ZW50cyA9IGV2ZW50RGF0YS5tYXAoZXZlbnQgPT4gKHtcclxuICAvLyAgICAgICBpZDogZXZlbnQuaWQsXHJcbiAgLy8gICAgICAgdGl0bGU6IGV2ZW50LnRpdHVsbyxcclxuICAvLyAgICAgICBzdGFydDogZXZlbnQuaW5pY2lvLFxyXG4gIC8vICAgICAgIGVuZDogZXZlbnQuZmluLFxyXG4gIC8vICAgICAgIGNhbnRpZGFkOiBldmVudC5jYW50aWRhZEFzaXN0ZW50ZXMsXHJcbiAgLy8gICAgICAgdXN1YXJpbzogZXZlbnQudXN1YXJpb1xyXG4gIC8vICAgfSkpO1xyXG5cclxuICAvLyAgICAgbGV0IGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XHJcbiAgLy8gICAgICAgaW5pdGlhbFZpZXc6ICdtdWx0aU1vbnRoWWVhcicsXHJcbiAgLy8gICAgICAgbG9jYWxlOiBcImVzXCIsXHJcbiAgLy8gICAgICAgdGltZVpvbmU6IFwiRXVyb3BlL1BhcmlzXCIsXHJcbiAgLy8gICAgICAgaGVhZGVyVG9vbGJhcjoge1xyXG4gIC8vICAgICAgICAgICBzdGFydDogXCJwcmV2LCBuZXh0IHRvZGF5XCIsXHJcbiAgLy8gICAgICAgICAgIGNlbnRlcjogXCJ0aXRsZVwiLFxyXG4gIC8vICAgICAgICAgICBlbmQ6IFwiZGF5R3JpZE1vbnRoLCB0aW1lR3JpZFdlZWssIGxpc3RcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAvLyAgICAgICAgICAgdG9kYXk6IFwiSG95XCIsXHJcbiAgLy8gICAgICAgICAgIG1vbnRoOiBcIk1lc1wiLFxyXG4gIC8vICAgICAgICAgICB3ZWVrOiBcIlNlbWFuYVwiLFxyXG4gIC8vICAgICAgICAgICBsaXN0OiBcIkTDrWFcIlxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZXZlbnRzOiBldmVudHMsXHJcbiAgLy8gICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAvLyAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAvLyAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xyXG4gIC8vICAgICAgICAgJCgnI3Jlc2VydmFNb2RhbCcpLm1vZGFsKCd0b2dnbGUnKTtcclxuXHJcbiAgLy8gICAgICAgICAvLyBEZXN2aW5jdWxhciBlbCBjb250cm9sYWRvciBkZSBjbGljIHByZXZpb1xyXG4gIC8vICAgICAgICAgJCgnI2d1YXJkYXJCdG4nKS5vZmYoJ2NsaWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHRpdGxlID0gJCgnI3RpdGxlJykudmFsKCk7XHJcbiAgLy8gICAgICAgICAgICAgbGV0IHN0YXJ0X2RhdGUgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gIC8vICAgICAgICAgICAgIGxldCBlbmRfZGF0ZSA9IG1vbWVudChlbmQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgICAgICAgICAgICAgc3RhcnRfZGF0ZTogc3RhcnRfZGF0ZSxcclxuICAvLyAgICAgICAgICAgICAgICAgZW5kX2RhdGU6IGVuZF9kYXRlXHJcbiAgLy8gICAgICAgICAgICAgfTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdERhdGEpXHJcblxyXG4gIC8vICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgLy8gICAgICAgICAgICAgICAgIHVybDogXCJ7eyBwYXRoKCdzdG9yZScpIH19XCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAvLyAgICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjcmVzZXJ2YU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICQoJyNjYWxlbmRhcmlvJykuZnVsbENhbGVuZGFyKCdyZW5kZXJFdmVudCcsIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UudGl0bGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHJlc3BvbnNlLnN0YXJ0X2RhdGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiByZXNwb25zZS5lbmRfZGF0ZVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlSlNPTiAmJiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgZmllbGQgKyAnZXJyb3InKS5odG1sKGVycm9yLnJlc3BvbnNlSlNPTi5lcnJvcnNbZmllbGRdKTtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICB9LFxyXG4gICAgICAgIFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgLy8gfSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY29va2llQWNjZXB0ZWRcIikpIHtcclxuICAgICAgICAgICAgY29va2llQm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWNjZXB0T3JEZWNsaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgICAgICBjb29raWVCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJhY2VwdGFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZUJ5PUZyZWV0b3VyR287IG1heC1hZ2U9XCIgKyA2MCAqIDYwICogMjQgKiAzMDtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llQ29uc2VudCcsICdhY2NlcHRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgPT09IFwiZGVjbGluYXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVDb25zZW50JywgJ2RlY2xpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZUNvbnNlbnQnKSkge1xyXG4gICAgICAgICAgICBjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGFjY2VwdE9yRGVjbGluZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb29raWVBY2NlcHRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNvbnRhaW5lclwiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBkYXRvc1BlcnNvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1jb250YWluZXJcIik7XHJcbiAgY29uc3QgZGF0b3NQZXJzb0VsZW1lbnRvcyA9IGRhdG9zUGVyc29Db250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYXRvc19wZXJzby1lbGVtZW50b3NcIik7XHJcbiAgY29uc3QgcGVyc29Gb3JtQ29udGFpbmVyID0gZGF0b3NQZXJzb0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBlcnNvX2Zvcm0tY29udGFpbmVyXCIpO1xyXG5cclxuICBkYXRvc1BlcnNvRWxlbWVudG9zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBlcnNvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpOyAgICAgIFxyXG4gICAgICBkYXRvc1BlcnNvRWxlbWVudG9zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn0pOyIsImNvbnN0IG5hdkJhcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uIC5sYW5ndWFnZS10b2dnbGUnKTtcclxuXHJcbmxhbmd1YWdlVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcclxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBpZiAoc3ViTWVudSkge1xyXG4gICAgICAgIGlmIChzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgIHN1Yk1lbnUuc3R5bGUuaGVpZ2h0ID0gc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdkJhclN0eWxlcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTAgfHwgd2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICBuYXZCYXIxLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWUuY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfSBcclxufVxyXG5cclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGNsb3NlQnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgIFxyXG4gIG5hdkJhclVzZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG1lbnVNb2JpbGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjEuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb25cIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDg1MCkge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBuYXZCYXIxPy5jbGFzc0xpc3QucmVtb3ZlKFwibmF2aWdhdGlvblwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbmF2QmFyMT8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuLy8gQWN0dWFsaXphIGVsIG1hbmVqYWRvciBkZSBldmVudG9zIHBhcmEgbG9zIGVubGFjZXMgZW4gZWwgbWVuw7ogbcOzdmlsXHJcbm1vYmlsZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICBjb25zdCBsYW5ndWFnZUxpbmsgPSBsaW5rLnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZS10b2dnbGUnKTtcclxuICBpZiAoIWxhbmd1YWdlTGluaykgeyAvLyBFeGNsdXllIGVsIGVubGFjZSBkZSBpZGlvbWFzXHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1lbnVNb2JpbGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB1cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IDMwMCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc1MCkge1xyXG4gICAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LmFkZChcImxvZ29Ob21icmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZCYXIxPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMSkgbmF2QmFyMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjE/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvTm9tYnJlXCIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbn0pO1xyXG5cclxubGV0IHByZXZTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGxZIDwgcHJldlNjcm9sbFkpIHtcclxuICAgIGlmIChuYXZCYXIxKSBuYXZCYXIxLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9XHJcblxyXG4gIHByZXZTY3JvbGxZID0gY3VycmVudFNjcm9sbFk7XHJcbn0pO1xyXG5cclxud2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic2Nyb2xsXCIpKTtcclxuXHJcbnVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG4iLCJjb25zdCBuYXZCYXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uLTJcIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnRuXCIpO1xyXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW1vYmlsZVwiKTtcclxuY29uc3QgbmF2QmFyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgdWwgbGkgYVwiKTtcclxuY29uc3QgbmF2QmFyVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28gYSBzcGFuXCIpO1xyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1tb2JpbGUgbGlcIik7XHJcblxyXG5jb25zdCBsYW5ndWFnZVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXZpZ2F0aW9uLTIgLmxhbmd1YWdlLXRvZ2dsZScpO1xyXG5cclxubGFuZ3VhZ2VUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIGlmIChzdWJNZW51ICYmIHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBzdWJNZW51LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmIChzdWJNZW51KSB7XHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5oZWlnaHQgPSBzdWJNZW51LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVOYXZCYXJTdHlsZXMoKSB7XHJcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUwIHx8IHdpbmRvdy5zY3JvbGxZID4gMCkge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbmF2QmFyMj8uY2xhc3NMaXN0LnJlbW92ZShcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QucmVtb3ZlKFwibG9nb05vbWJyZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbm1lbnVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgY2xvc2VCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICBtZW51TW9iaWxlPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIG5hdkJhclVzZXJOYW1lPy5jbGFzc0xpc3QuYWRkKFwibG9nb05vbWJyZVwiKTtcclxuICBuYXZCYXIyPy5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi0yXCIpO1xyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBjbG9zZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgbWVudU1vYmlsZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5NzApIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gODUwKSB7XHJcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgfVxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59XHJcblxyXG4vLyBFamVjdXRhciBoYW5kbGVSZXNpemUgYWwgY2FyZ2FyIGxhIHDDoWdpbmFcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbi8vIEFjdHVhbGl6YSBlbCBtYW5lamFkb3IgZGUgZXZlbnRvcyBwYXJhIGxvcyBlbmxhY2VzIGVuIGVsIG1lbsO6IG3Ds3ZpbFxyXG5tb2JpbGVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgY29uc3QgbGFuZ3VhZ2VMaW5rID0gbGluay5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UtdG9nZ2xlJyk7XHJcbiAgaWYgKCFsYW5ndWFnZUxpbmspIHsgLy8gRXhjbHV5ZSBlbCBlbmxhY2UgZGUgaWRpb21hc1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtZW51TW9iaWxlPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgdXBkYXRlTmF2QmFyU3R5bGVzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDAgJiYgd2luZG93LnNjcm9sbFkgPCAzMDApIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NTApIHtcclxuICAgICAgbmF2QmFyVXNlck5hbWU/LmNsYXNzTGlzdC5hZGQoXCJsb2dvTm9tYnJlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2QmFyMj8uY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tMlwiKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMzAwKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhcjI/LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZpZ2F0aW9uLTJcIik7XHJcbiAgICBuYXZCYXJVc2VyTmFtZT8uY2xhc3NMaXN0LnJlbW92ZShcImxvZ29Ob21icmVcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU5hdkJhclN0eWxlcygpO1xyXG59KTtcclxuXHJcbmxldCBwcmV2U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsWSA8IHByZXZTY3JvbGxZKSB7XHJcbiAgICBpZiAobmF2QmFyMikgbmF2QmFyMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfVxyXG5cclxuICBwcmV2U2Nyb2xsWSA9IGN1cnJlbnRTY3JvbGxZO1xyXG59KTtcclxuXHJcbndpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInNjcm9sbFwiKSk7XHJcblxyXG51cGRhdGVOYXZCYXJTdHlsZXMoKTtcclxuIiwiY29uc3QgbW9zdHJhckxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9zdHJhci1saW5rJyk7XHJcbmNvbnN0IG9jdWx0YXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29jdWx0YXItbGluaycpO1xyXG5jb25zdCBkZXNjcmlwY2lvbkhpZGRlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwY2lvbi1oaWRkZW4nKTtcclxuXHJcbm1vc3RyYXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaWYgKGRlc2NyaXBjaW9uSGlkZGVuLmNsYXNzTGlzdC5jb250YWlucygnZGVzY3JpcGNpb24tdmlzaWJsZScpKSB7XHJcbiAgICBkZXNjcmlwY2lvbkhpZGRlbi5jbGFzc0xpc3QucmVtb3ZlKCdkZXNjcmlwY2lvbi12aXNpYmxlJyk7XHJcbiAgICBtb3N0cmFyTGluay50ZXh0Q29udGVudCA9ICdTZWUgZnVsbCBkZXNjcmlwdGlvbic7XHJcbiAgICBvY3VsdGFyTGluay5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVzY3JpcGNpb25IaWRkZW4uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcGNpb24tdmlzaWJsZScpO1xyXG4gICAgbW9zdHJhckxpbmsudGV4dENvbnRlbnQgPSAnSGlkZSBkZXNjcmlwdGlvbic7XHJcbiAgICBvY3VsdGFyTGluay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTsgLy8gUmVtb3ZlbW9zIGxhIGNsYXNlICdoaWRkZW4nIHNpIGVzdMOhIHByZXNlbnRlXHJcbiAgfVxyXG59KTtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YXJzIC5sYS1zdGFyXCIpO1xyXG4gICAgY29uc3Qgbm90YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90YVwiKTtcclxuXHJcbiAgICBmb3Ioc3RhciBvZiBzdGFycykge1xyXG4gICAgICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXNldFN0YXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcImdvbGRcIjtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwibGFzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXJcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJldmlvdXNTdGFyID0gdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2hpbGUocHJldmlvdXNTdGFyKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXIuc3R5bGUuY29sb3IgPSBcImdvbGRcIjtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU3Rhci5jbGFzc0xpc3QuYWRkKFwibGFzXCIpO1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTdGFyLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXJcIik7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1N0YXIgPSBwcmV2aW91c1N0YXIucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXNldFN0YXJzKG5vdGEudmFsdWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnMuZm9yRWFjaChzdGFyID0+IHtcclxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCB2YWxvck5vdGEgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBub3RhLnZhbHVlID0gdmFsb3JOb3RhOyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm90YS52YWx1ZSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRTdGFycyhub3RhID0gMCkge1xyXG4gICAgICAgIGZvcihzdGFyIG9mIHN0YXJzKSB7XHJcbiAgICAgICAgICAgIGlmKHN0YXIuZGF0YXNldC52YWx1ZSA+IG5vdGEpIHtcclxuICAgICAgICAgICAgICAgIHN0YXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoXCJsYXJcIik7XHJcbiAgICAgICAgICAgICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXNcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXIuc3R5bGUuY29sb3IgPSBcImdvbGRcIjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoXCJsYXNcIik7XHJcbiAgICAgICAgICAgICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoXCJsYXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIG5vdGFWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RhJykudmFsdWU7XHJcbiAgICAgICAgaWYgKG5vdGFWYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICB2YXIgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIGVycm9yRGl2LmlubmVyVGV4dCA9ICdMYSBub3RhIG5vIHB1ZWRlIHNlciAwLiBQb3IgZmF2b3IsIHNlbGVjY2lvbmUgYWwgbWVub3MgdW5hIGVzdHJlbGxhLic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWxvcmFjaW9uJykuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wdGlvbnMiLCJzZWxlY3RlZEltYWdlIiwic2VsZWN0QXZhdGFyIiwiYXZhdGFySW5wdXQiLCJhdmF0YXJJbnB1dEN1ZW50YSIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbCIsImZvckVhY2giLCJzZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwib3B0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwic2VsZWN0QXZhdGFycyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbWFnZVBhdGgiLCJzcmMiLCJhdmF0YXIiLCJzcGxpdCIsInBvcCIsInNlbEltZyIsInZhbHVlIiwiYXZhdGFySW5wIiwiY29uc29sZSIsImxvZyIsImFjdHVhbGl6YXJBdmF0YXJFblNlc3Npb24iLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb29raWVCb3giLCJidXR0b25zIiwiY29ubmVjdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFkZCIsImFjY2VwdE9yRGVjbGluZSIsImJ1dHRvbiIsInNldEl0ZW0iLCJyZW1vdmUiLCJpZCIsImNvb2tpZSIsImxvY2FsU3RvcmFnZSIsIndpbmRvdyIsImZvb3RlciIsIm1haW5Db250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImRhdG9zUGVyc29Db250YWluZXIiLCJkYXRvc1BlcnNvRWxlbWVudG9zIiwicGVyc29Gb3JtQ29udGFpbmVyIiwibmF2QmFyMSIsIm1lbnVCdG4iLCJjbG9zZUJ0biIsIm1lbnVNb2JpbGUiLCJuYXZCYXJFbGVtIiwibmF2QmFyVXNlck5hbWUiLCJtb2JpbGVMaW5rcyIsImxhbmd1YWdlVG9nZ2xlIiwiaW5uZXJXaWR0aCIsInN1Yk1lbnUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb250YWlucyIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidXBkYXRlTmF2QmFyU3R5bGVzIiwic2Nyb2xsWSIsImRpc3BsYXkiLCJjb2xvciIsImhhbmRsZVJlc2l6ZSIsImxpbmsiLCJsYW5ndWFnZUxpbmsiLCJwcmV2U2Nyb2xsWSIsImN1cnJlbnRTY3JvbGxZIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwibmF2QmFyMiIsIm1vc3RyYXJMaW5rIiwib2N1bHRhckxpbmsiLCJkZXNjcmlwY2lvbkhpZGRlbiIsInRleHRDb250ZW50Iiwic3RhcnMiLCJub3RhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsInN0YXIiLCJyZXNldFN0YXJzIiwicHJldmlvdXNTdGFyIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImVyciIsImUiLCJmIiwidmFsb3JOb3RhIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm5vdGFWYWx1ZSIsImVycm9yRGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==