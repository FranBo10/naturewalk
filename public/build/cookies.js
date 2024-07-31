(self["webpackChunk"] = self["webpackChunk"] || []).push([["cookies"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/cookies.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDcEQsSUFBTUMsT0FBTyxHQUFHSixRQUFRLENBQUNLLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUVwRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtNQUMzQ04sU0FBUyxDQUFDTyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbkM7RUFDSixDQUFDO0VBRUQsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7SUFDMUJQLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDLFVBQUFDLE1BQU0sRUFBSTtNQUN0QkEsTUFBTSxDQUFDWixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNuQ00sY0FBYyxDQUFDTyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO1FBQ2hEWixTQUFTLENBQUNPLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVsQyxJQUFJRixNQUFNLENBQUNHLEVBQUUsS0FBSyxTQUFTLEVBQUU7VUFDekJoQixRQUFRLENBQUNpQixNQUFNLEdBQUcsK0JBQStCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtVQUNyRUMsWUFBWSxDQUFDSixPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQztRQUNyRCxDQUFDLE1BQU0sSUFBSUQsTUFBTSxDQUFDRyxFQUFFLEtBQUssVUFBVSxFQUFFO1VBQ2pDRSxZQUFZLENBQUNKLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO1FBQ3JEO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVESyxNQUFNLENBQUNsQixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBTTtJQUNsQyxJQUFJLENBQUNpQixZQUFZLENBQUNWLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtNQUN4Q0YsT0FBTyxDQUFDLENBQUM7TUFDVEssZUFBZSxDQUFDLENBQUM7SUFDckIsQ0FBQyxNQUFNO01BQ0hKLGNBQWMsQ0FBQ08sT0FBTyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztJQUNwRDtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb29raWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjb29raWVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZUFjY2VwdGVkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZUJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFjY2VwdE9yRGVjbGluZSA9ICgpID0+IHtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQWNjZXB0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29va2llQm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IFwiYWNlcHRhclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVCeT1GcmVldG91ckdvOyBtYXgtYWdlPVwiICsgNjAgKiA2MCAqIDI0ICogMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZUNvbnNlbnQnLCAnYWNjZXB0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcImRlY2xpbmFyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llQ29uc2VudCcsICdkZWNsaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb29raWVDb25zZW50JykpIHtcclxuICAgICAgICAgICAgY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBhY2NlcHRPckRlY2xpbmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY29va2llQWNjZXB0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29va2llQm94IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29ubmVjdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsImFjY2VwdE9yRGVjbGluZSIsImZvckVhY2giLCJidXR0b24iLCJzZXRJdGVtIiwicmVtb3ZlIiwiaWQiLCJjb29raWUiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9