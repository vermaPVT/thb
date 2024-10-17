
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.parentElement.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

const menuItems = document.querySelectorAll('.nav > li');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'none';
    });
});



// Scroller


window.onscroll = function() {
    const button = document.querySelector('.topBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};



// Section Seven

let currentIndex = 0;
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card2');
const totalCards = cards.length;
const visibleCards = 2; // Updated to show 2 cards

function slideLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - visibleCards;
    updateCarousel();
}

function slideRight() {
    currentIndex = (currentIndex < totalCards - visibleCards) ? currentIndex + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -((100 / visibleCards) * currentIndex);
    carousel.style.transform = `translateX(${translateX}%)`;
}