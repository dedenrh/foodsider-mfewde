class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright &copy; 2021, FoodSider, All Rights Reserved</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
