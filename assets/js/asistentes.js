document.addEventListener('DOMContentLoaded', function () {
    const cantidadAdultosInput = document.querySelector('.cantidad-adultos');

    const incrementButtons = document.querySelectorAll('[data-increment]');
    const decrementButtons = document.querySelectorAll('[data-decrement]');

    incrementButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            incrementDecrement('increment');
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            incrementDecrement('decrement');
        });
    });

    cantidadAdultosInput.addEventListener('change', function () {
        const cantidadAdultos = parseInt(cantidadAdultosInput.value);
        actualizarCantidadAdultosEnServidor(cantidadAdultos);
    });

    function incrementDecrement(action) {
        let cantidadAdultos = parseInt(cantidadAdultosInput.value);

        if (action === 'increment') {
            cantidadAdultos++;
        } else if (action === 'decrement' && cantidadAdultos > 1) {
            cantidadAdultos--;
        }

        cantidadAdultosInput.value = cantidadAdultos;
        actualizarCantidadAdultosEnServidor(cantidadAdultos);
    }

    function actualizarCantidadAdultosEnServidor(cantidadAdultos) {
        const idDetallesReserva = cantidadAdultosInput.dataset.id;

        $.ajax({
            type: 'POST',
            url: '/reserva/' + idDetallesReserva + '/actualizar-cantidad',
            data: { cantidadAdultos: cantidadAdultos },
            success: function(response) {
                console.log('Cantidad de adultos actualizada en el servidor');
            },
            error: function(error) {
                console.error('Error al actualizar la cantidad de adultos en el servidor');
            }
        });
    }
});


// function incrementDecrement(action) {
//     let cantidadAdultos = parseInt(cantidadAdultosInput.value);

//     if (action === 'increment') {
//         cantidadAdultos++;
//     } else if (action === 'decrement' && cantidadAdultos > 1) {
//         cantidadAdultos--;
//     }

//     cantidadAdultosInput.value = cantidadAdultos;
//     actualizarCantidadAdultosEnServidor(cantidadAdultos);
// }

