document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars .la-star");
    const nota = document.querySelector("#nota");

    for(star of stars) {
        star.addEventListener("mouseover", function(){
            resetStars();
            this.style.color = "gold";
            this.classList.add("las");
            this.classList.remove("lar");

            let previousStar = this.previousElementSibling;
            
            while(previousStar) {
                previousStar.style.color = "gold";
                previousStar.classList.add("las");
                previousStar.classList.remove("lar");
                previousStar = previousStar.previousElementSibling;
            }
        });

        star.addEventListener("mouseout", function(){
            resetStars(nota.value);
        })
    }

    stars.forEach(star => {
        star.addEventListener("click", function(){
            const valorNota = parseInt(this.dataset.value);
            nota.value = valorNota; 
            console.log(nota.value); 
        });
    });

    function resetStars(nota = 0) {
        for(star of stars) {
            if(star.dataset.value > nota) {
                star.style.color = "black";
                star.classList.add("lar");
                star.classList.remove("las");
                
            } else {
                star.style.color = "gold";                
                star.classList.add("las");
                star.classList.remove("lar");
            }
        }
    }

    document.getElementById('submit-btn').addEventListener('click', function(event) {
        var notaValue = document.getElementById('nota').value;
        if (notaValue == 0) {
            event.preventDefault(); 
            var errorDiv = document.createElement('div');
            errorDiv.classList.add('alert', 'alert-danger');
            errorDiv.innerText = 'La nota no puede ser 0. Por favor, seleccione al menos una estrella.';
            document.querySelector('.valoracion').appendChild(errorDiv);
        }
    });
    
})