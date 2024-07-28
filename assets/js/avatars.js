const select = document.querySelectorAll(".select");
const options = document.querySelectorAll(".options");
const selectedImage = document.querySelectorAll(".selectedImage");
const selectAvatar = document.querySelectorAll(".selectAvatar");
const avatarInput = document.querySelectorAll(
  'input[name="registration_form[avatar]"]'
);
const avatarInputCuenta = document.querySelector('input[name="user_form[avatar]"]');

const modal = document.querySelectorAll(".container"); // Modifica esto según la clase o ID de tu modal

select.forEach(function (sel) {
  sel.addEventListener("click", () => {
    sel.classList.toggle("active");
    options.forEach(function (opt) {
      opt.classList.toggle("active");
      opt.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectAvatars = document.querySelectorAll(".selectAvatar");

  selectAvatars.forEach(function (selectAvatar) {
      selectAvatar.addEventListener("click", function (event) {
          event.preventDefault();

          const imagePath = this.querySelector("img").src;
          const avatar = imagePath.split('/').pop().split('.')[0];

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
              opt.scrollIntoView({ behavior: "smooth", block: "start" });
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
      url: '/actualizar-avatar-session', // Ajusta la URL según tu configuración
      data: { avatar: avatar },
      success: function(response) {
        console.log('Avatar actualizado en la sesión correctamente');
      },
      error: function(error) {
        console.error('Error al actualizar el avatar en la sesión');
      }
    });
  }
});

