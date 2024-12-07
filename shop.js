const menuToggle = document.querySelector('.menu-toggle');
const items = document.querySelector('.items');

menuToggle.addEventListener('click', () => {
    items.classList.toggle('active');
});
