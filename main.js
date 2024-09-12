document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burger-button');
    const menuList = document.getElementById('menu-list');
    const mainSection = document.querySelector('.main');

    burgerButton.addEventListener('click', () => {
        menuList.classList.toggle('show');
        mainSection.classList.toggle('shadow')
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

  
  

// burger menu

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.click-menu div');
    const clickMenu = document.querySelector('.click-menu a');
    const menuTriangle = document.querySelector('.click-menu .triangle-icon');
  
    // Открытие/закрытие меню при клике на основное меню
    clickMenu.addEventListener('click', (event) => {
      event.stopPropagation(); // Останавливаем всплытие события, чтобы клик на меню не закрывал его
      menu.classList.toggle('active');
      console.log(menuTriangle)
      menuTriangle.classList.toggle('active');
    });
  


    const offer = document.querySelector('.click-offer div');
    const clickOffer = document.querySelector('.click-offer a');
    const offetTriangle = document.querySelector('.click-offer .triangle-icon');

  
    // Открытие/закрытие меню при клике на основное меню
    clickOffer.addEventListener('click', (event) => {
        event.stopPropagation(); // Останавливаем всплытие события, чтобы клик на меню не закрывал его
        offer.classList.toggle('active');
        offetTriangle.classList.toggle('active');
      });
  

  });

  
  

