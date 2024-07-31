(self["webpackChunk"] = self["webpackChunk"] || []).push([["avatars"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f","vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/avatars.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO01BRUZsQixNQUFNLENBQUNVLE9BQU8sQ0FBQyxVQUFVQyxHQUFHLEVBQUU7UUFDMUJBLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNrQix5QkFBeUJBLENBQUNSLE1BQU0sRUFBRTtJQUN6Q1MsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFDTEMsSUFBSSxFQUFFLE1BQU07TUFDWkMsR0FBRyxFQUFFLDRCQUE0QjtNQUFFO01BQ25DQyxJQUFJLEVBQUU7UUFBRWIsTUFBTSxFQUFFQTtNQUFPLENBQUM7TUFDeEJjLE9BQU8sRUFBRSxTQUFBQSxRQUFTQyxRQUFRLEVBQUU7UUFDMUJULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtDQUErQyxDQUFDO01BQzlELENBQUM7TUFDRFMsS0FBSyxFQUFFLFNBQUFBLE1BQVNBLE1BQUssRUFBRTtRQUNyQlYsT0FBTyxDQUFDVSxLQUFLLENBQUMsNENBQTRDLENBQUM7TUFDN0Q7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hdmF0YXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0XCIpO1xyXG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb25zXCIpO1xyXG5jb25zdCBzZWxlY3RlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3RlZEltYWdlXCIpO1xyXG5jb25zdCBzZWxlY3RBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuY29uc3QgYXZhdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICdpbnB1dFtuYW1lPVwicmVnaXN0cmF0aW9uX2Zvcm1bYXZhdGFyXVwiXSdcclxuKTtcclxuY29uc3QgYXZhdGFySW5wdXRDdWVudGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcl9mb3JtW2F2YXRhcl1cIl0nKTtcclxuXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIik7IC8vIE1vZGlmaWNhIGVzdG8gc2Vnw7puIGxhIGNsYXNlIG8gSUQgZGUgdHUgbW9kYWxcclxuXHJcbnNlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcclxuICBzZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIG9wdC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHNlbGVjdEF2YXRhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdEF2YXRhclwiKTtcclxuXHJcbiAgc2VsZWN0QXZhdGFycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3RBdmF0YXIpIHtcclxuICAgICAgc2VsZWN0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYztcclxuICAgICAgICAgIGNvbnN0IGF2YXRhciA9IGltYWdlUGF0aC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCcuJylbMF07XHJcblxyXG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxJbWcpIHtcclxuICAgICAgICAgICAgICBzZWxJbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICAgIHNlbEltZy52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF2YXRhcklucHV0LmZvckVhY2goZnVuY3Rpb24gKGF2YXRhcklucCkge1xyXG4gICAgICAgICAgICAgIGF2YXRhcklucC52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChhdmF0YXJJbnB1dEN1ZW50YSkge1xyXG4gICAgICAgICAgICBhdmF0YXJJbnB1dEN1ZW50YS52YWx1ZSA9IGF2YXRhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIHNlbGVjY2lvbmFkbzonLCBhdmF0YXIpO1xyXG5cclxuICAgICAgICAgIC8vIEVudsOtYSBlbCBhdmF0YXIgc2VsZWNjaW9uYWRvIGFsIHNlcnZpZG9yXHJcbiAgICAgICAgICBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XHJcbiAgICAgICAgICAgICAgb3B0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgb3B0LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZWxlY3QuZm9yRWFjaChmdW5jdGlvbiAoc2VsKSB7XHJcbiAgICAgICAgICAgICAgc2VsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE51ZXZhIGZ1bmNpw7NuIHBhcmEgZW52aWFyIGVsIGF2YXRhciBzZWxlY2Npb25hZG8gYWwgc2Vydmlkb3JcclxuICBmdW5jdGlvbiBhY3R1YWxpemFyQXZhdGFyRW5TZXNzaW9uKGF2YXRhcikge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYWN0dWFsaXphci1hdmF0YXItc2Vzc2lvbicsIC8vIEFqdXN0YSBsYSBVUkwgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXHJcbiAgICAgIGRhdGE6IHsgYXZhdGFyOiBhdmF0YXIgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXZhdGFyIGFjdHVhbGl6YWRvIGVuIGxhIHNlc2nDs24gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhbCBhY3R1YWxpemFyIGVsIGF2YXRhciBlbiBsYSBzZXNpw7NuJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4iXSwibmFtZXMiOlsic2VsZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3B0aW9ucyIsInNlbGVjdGVkSW1hZ2UiLCJzZWxlY3RBdmF0YXIiLCJhdmF0YXJJbnB1dCIsImF2YXRhcklucHV0Q3VlbnRhIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsIiwiZm9yRWFjaCIsInNlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJvcHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJzZWxlY3RBdmF0YXJzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlUGF0aCIsInNyYyIsImF2YXRhciIsInNwbGl0IiwicG9wIiwic2VsSW1nIiwidmFsdWUiLCJhdmF0YXJJbnAiLCJjb25zb2xlIiwibG9nIiwiYWN0dWFsaXphckF2YXRhckVuU2Vzc2lvbiIsIiQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=