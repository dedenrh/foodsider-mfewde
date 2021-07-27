const DrawerInitiator = {
  init({ button, drawer, menuItem }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    this._closeDrawer(menuItem, drawer, button);
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('isOpen');
  },

  _closeDrawer(menuItem, drawer, button) {
    // forEach is not a function / item is not iterable (?)
    const menuItemParent = menuItem.parentElement;
    [...menuItemParent.children].forEach((item) => {
      item.addEventListener('click', (event) => {
        if (button.classList.contains('isOpen')) {
          drawer.classList.toggle('open');
          button.classList.toggle('isOpen');
          event.stopPropagation();
        }
      });
    });
  },
};

export default DrawerInitiator;
