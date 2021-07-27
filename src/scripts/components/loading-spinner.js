class LoadingSpinner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="spinner"></div>
    `;
  }
}

customElements.define('loading-spinner', LoadingSpinner);
