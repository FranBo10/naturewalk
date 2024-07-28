document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.querySelector('.wrapper');
    const buttons = document.querySelectorAll('.button');

    const connect = () => {
        if (!sessionStorage.getItem("cookieAccepted")) {
            cookieBox.classList.add("show");
        }
    };

    const acceptOrDecline = () => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
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

    window.addEventListener("load", () => {
        if (!localStorage.getItem('cookieConsent')) {
            connect();
            acceptOrDecline();
        } else {
            sessionStorage.setItem("cookieAccepted", "true");
        }
    });
});


