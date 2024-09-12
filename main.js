document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burger-button');
    const menuList = document.getElementById('menu-list');

    burgerButton.addEventListener('click', () => {
        menuList.classList.toggle('show');
    });
});
