const footer = document.querySelector('footer');
const mainContainer = document.getElementById("main-container");

document.addEventListener("DOMContentLoaded", function () {
  const datosPersoContainer = document.querySelector(".datos_perso-container");
  const datosPersoElementos = datosPersoContainer.querySelector(".datos_perso-elementos");
  const persoFormContainer = datosPersoContainer.querySelector(".perso_form-container");

  datosPersoElementos.addEventListener("click", function () {
      persoFormContainer.classList.toggle("active");      
      datosPersoElementos.classList.toggle("active");
  });
});