class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="error">
      <h3>Something went wrong, check your internet connection or try reloading the website</h3>
    </div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
