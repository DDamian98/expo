document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".swiper-container", {
        // Opciones del Swiper:
        loop: true, // Para crear un bucle de slides.
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Para permitir la navegación haciendo clic en los puntos de paginación.
        },
    });
    const buttons = document.querySelectorAll(".btn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const cardContent = document.querySelector(".card-content");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() { // mouseenter
            const cardId = button.getAttribute("data-card");
            const card = document.getElementById(cardId);
            if (card) {
                cardContent.innerHTML = card.innerHTML;
                popup.style.display = "block"; // Muestra el popup al hacer clic
            }
        });
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none"; // Cierra el popup al hacer clic en "Cerrar"
    });
});