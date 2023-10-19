document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    let activeCard = null;
    const cardImagesContainer = document.getElementById("container-img");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const cardId = button.getAttribute("data-card");
            const card = document.getElementById(cardId);

            if (card) {
                if (activeCard) {
                    activeCard.style.display = "none";
                    cardImagesContainer.style.display = "grid";
                    cardImagesContainer.style.placeItems="center";

                }

                if (activeCard !== card) {
                    card.style.display = "grid";
                    activeCard = card;
                    activeCard.style.placeItems="center";
                    cardImagesContainer.style.display = "none";

                } else {
                    activeCard = null;
                }
            }
        });
    });
 
    
});
function showCard(showId, hideId) {
    const showCard = document.getElementById(showId);
    const hideCard = document.getElementById(hideId);

    if (showCard && hideCard) {
        showCard.style.display = 'grid';
        hideCard.style.display = 'none';

    }
}
