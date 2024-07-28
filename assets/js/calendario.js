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