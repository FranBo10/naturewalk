(self["webpackChunk"] = self["webpackChunk"] || []).push([["calendario"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/calendario.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXJpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbGVuZGFyaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8qIC0tLS0tLS0tLS0tLSBUcmFpdGVtZW50IGR1IENhbGVuZGFyIC0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIC8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIC8vICAgICBsZXQgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsZW5kYXJpb1wiKTtcclxuXHJcbiAgLy8gICAgICQuYWpheFNldHVwKHtcclxuICAvLyAgICAgICBoZWFkZXJzOntcclxuICAvLyAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JyksXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KTtcclxuICAgICAgXHJcbiAgLy8gICAgIGxldCBldmVudHMgPSBldmVudERhdGEubWFwKGV2ZW50ID0+ICh7XHJcbiAgLy8gICAgICAgaWQ6IGV2ZW50LmlkLFxyXG4gIC8vICAgICAgIHRpdGxlOiBldmVudC50aXR1bG8sXHJcbiAgLy8gICAgICAgc3RhcnQ6IGV2ZW50LmluaWNpbyxcclxuICAvLyAgICAgICBlbmQ6IGV2ZW50LmZpbixcclxuICAvLyAgICAgICBjYW50aWRhZDogZXZlbnQuY2FudGlkYWRBc2lzdGVudGVzLFxyXG4gIC8vICAgICAgIHVzdWFyaW86IGV2ZW50LnVzdWFyaW9cclxuICAvLyAgIH0pKTtcclxuXHJcbiAgLy8gICAgIGxldCBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xyXG4gIC8vICAgICAgIGluaXRpYWxWaWV3OiAnbXVsdGlNb250aFllYXInLFxyXG4gIC8vICAgICAgIGxvY2FsZTogXCJlc1wiLFxyXG4gIC8vICAgICAgIHRpbWVab25lOiBcIkV1cm9wZS9QYXJpc1wiLFxyXG4gIC8vICAgICAgIGhlYWRlclRvb2xiYXI6IHtcclxuICAvLyAgICAgICAgICAgc3RhcnQ6IFwicHJldiwgbmV4dCB0b2RheVwiLFxyXG4gIC8vICAgICAgICAgICBjZW50ZXI6IFwidGl0bGVcIixcclxuICAvLyAgICAgICAgICAgZW5kOiBcImRheUdyaWRNb250aCwgdGltZUdyaWRXZWVrLCBsaXN0XCIsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBidXR0b25UZXh0OiB7XHJcbiAgLy8gICAgICAgICAgIHRvZGF5OiBcIkhveVwiLFxyXG4gIC8vICAgICAgICAgICBtb250aDogXCJNZXNcIixcclxuICAvLyAgICAgICAgICAgd2VlazogXCJTZW1hbmFcIixcclxuICAvLyAgICAgICAgICAgbGlzdDogXCJEw61hXCJcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGV2ZW50czogZXZlbnRzLFxyXG4gIC8vICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgLy8gICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgLy8gICAgICAgYWxsRGF5U2xvdDogZmFsc2UsXHJcbiAgLy8gICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcclxuICAvLyAgICAgICAgICQoJyNyZXNlcnZhTW9kYWwnKS5tb2RhbCgndG9nZ2xlJyk7XHJcblxyXG4gIC8vICAgICAgICAgLy8gRGVzdmluY3VsYXIgZWwgY29udHJvbGFkb3IgZGUgY2xpYyBwcmV2aW9cclxuICAvLyAgICAgICAgICQoJyNndWFyZGFyQnRuJykub2ZmKCdjbGljaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAgICAgICAgIGxldCB0aXRsZSA9ICQoJyN0aXRsZScpLnZhbCgpO1xyXG4gIC8vICAgICAgICAgICAgIGxldCBzdGFydF9kYXRlID0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAvLyAgICAgICAgICAgICBsZXQgZW5kX2RhdGUgPSBtb21lbnQoZW5kKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuXHJcbiAgLy8gICAgICAgICAgICAgbGV0IHJlcXVlc3REYXRhID0ge1xyXG4gIC8vICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHN0YXJ0X2RhdGUsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGVuZF9kYXRlOiBlbmRfZGF0ZVxyXG4gIC8vICAgICAgICAgICAgIH07XHJcblxyXG4gIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3REYXRhKVxyXG5cclxuICAvLyAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gIC8vICAgICAgICAgICAgICAgICB1cmw6IFwie3sgcGF0aCgnc3RvcmUnKSB9fVwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gIC8vICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgLy8gICAgICAgICAgICAgICAgIGRhdGE6IHJlcXVlc3REYXRhLFxyXG4gIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgJCgnI3Jlc2VydmFNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAkKCcjY2FsZW5kYXJpbycpLmZ1bGxDYWxlbmRhcigncmVuZGVyRXZlbnQnLCB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLnRpdGxlLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiByZXNwb25zZS5zdGFydF9kYXRlLFxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcmVzcG9uc2UuZW5kX2RhdGVcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gIC8vICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcclxuICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZUpTT04gJiYgZXJyb3IucmVzcG9uc2VKU09OLmVycm9ycykge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gZXJyb3IucmVzcG9uc2VKU09OLmVycm9ycykge1xyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGZpZWxkICsgJ2Vycm9yJykuaHRtbChlcnJvci5yZXNwb25zZUpTT04uZXJyb3JzW2ZpZWxkXSk7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgfSxcclxuICAgICAgICBcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIGNhbGVuZGFyLnJlbmRlcigpO1xyXG4gIC8vIH0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==