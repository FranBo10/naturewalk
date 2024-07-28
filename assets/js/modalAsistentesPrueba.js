function showReservasModal(reservas) {
    // Limpiar el contenido anterior del modal
    $('#tablaReservasBody').empty();

    // Inicializar la cantidad total de asistentes
    let totalAsistentes = 0;

    // Restablecer la cantidad total al comienzo de la función
    $('#cantidadReservasBody').empty();

    // Iterar sobre las reservas y agregarlas a la tabla
    reservas.forEach((reserva, index) => {
        let usuario = `${reserva.usuario}`;
        let asistentes = `${reserva.cantidadAsistentes}`;
        let email = `${reserva.email}`;
        let telefono = `${reserva.telefono}`;

        // Sumar la cantidad de asistentes a la cantidad total
        totalAsistentes += reserva.cantidadAsistentes;

        let cantidadHtml = `<td>${asistentes}</td>`;
        let html = `<tr class="text-center align-middle">
                        <td>
                            <input type="checkbox" class="asistenciaCheckbox" />
                        </td>
                        <td class="modalUsuario${index} text-center">${usuario}</td>
                        <td class="modalAsistentes${index}">${asistentes}</td>
                        <td class="modalEmail${index}">${email}</td>
                        <td class="modalTelefono${index}">${telefono}</td>
                    </tr>`;

        $('#tablaReservasBody').append(html);
    });

    // Agregar la cantidad total de asistentes al final de la tabla
    let totalHtml = `<td>${totalAsistentes}</td>`;
    $('#cantidadReservasBody').append(totalHtml);

    // Abrir el modal
    $('#reservaModal').modal('show');
}