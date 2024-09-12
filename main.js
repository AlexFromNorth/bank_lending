document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burger-button');
    const menuList = document.getElementById('menu-list');

    burgerButton.addEventListener('click', () => {
        menuList.classList.toggle('show');
    });
});



// dropdown menu

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu-container');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    // Открытие/закрытие меню при клике на основное меню
    menuContainer.addEventListener('click', (event) => {
      event.stopPropagation(); // Останавливаем всплытие события, чтобы клик на меню не закрывал его
      menuContainer.classList.toggle('active');
    });
  
    // Закрытие меню при клике на любую область вне меню
    document.addEventListener('click', (event) => {
      if (!menuContainer.contains(event.target)) { // Если клик вне меню
        menuContainer.classList.remove('active');
      }
    });
  });
  