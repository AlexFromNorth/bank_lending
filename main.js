document.addEventListener('DOMContentLoaded', () => {
  // Функция переключения классов
  const toggleClass = (element, className) => {
    element.classList.toggle(className);
  };

  // Обработчик бургер-меню
  const burgerButton = document.getElementById('burger-button');
  const menuList = document.getElementById('menu-list');
  const mainSection = document.querySelector('.main');

  burgerButton.addEventListener('click', () => {
    toggleClass(menuList, 'show');
    toggleClass(mainSection, 'shadow');
  });

  // Обработчик выпадающего меню
  const handleDropdown = (container, dropdownClass) => {
    container.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleClass(container, dropdownClass);
    });

    document.addEventListener('click', (event) => {
      if (!container.contains(event.target)) {
        container.classList.remove(dropdownClass);
      }
    });
  };

  const menuContainer = document.querySelector('.menu-container');
  handleDropdown(menuContainer, 'active');

  // Обработчики меню и оффера в бургер-меню
  const setupBurgerMenu = (menuSelector, triggerSelector, triangleSelector) => {
    const menu = document.querySelector(menuSelector);
    const trigger = document.querySelector(triggerSelector);
    const triangle = document.querySelector(triangleSelector);

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleClass(menu, 'active');
      toggleClass(triangle, 'active');
    });
  };

  setupBurgerMenu('.click-menu div', '.click-menu a', '.click-menu .triangle-icon');
  setupBurgerMenu('.click-offer div', '.click-offer a', '.click-offer .triangle-icon');
});
