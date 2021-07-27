const headerTransition = {
  init({ header }) {
    window.addEventListener('scroll', () => {
      this._height(header);
    });
  },

  _height(header) {
    const windowPosition = window.scrollY > 0;

    header.classList.toggle('header-scroll', windowPosition);
  },
};

export default headerTransition;
