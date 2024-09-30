document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-wrapper');
    let currentCard = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', () => {
        currentCard = (currentCard > 0) ? currentCard - 1 : cards.length - 1;
        showCard(currentCard);
    });

    document.getElementById('next').addEventListener('click', () => {
        currentCard = (currentCard < cards.length - 1) ? currentCard + 1 : 0;
        showCard(currentCard);
    });

    showCard(currentCard);

    cards.forEach(card => {
        card.querySelector('.card').addEventListener('click', (event) => {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            const link = card.querySelector('a').getAttribute('href');
            card.classList.add('clicked'); // Ajout de la classe 'clicked'
            setTimeout(() => {
                window.location.href = link;
            }, 500); // Redirection après 500ms
        });
    });
});
