const mostrarLink = document.getElementById('mostrar-link');
const ocultarLink = document.getElementById('ocultar-link');
const descripcionHidden = document.querySelector('.descripcion-hidden');

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
