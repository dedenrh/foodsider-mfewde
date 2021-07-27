class LikedMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div>
        <h1 class="liked__message_heading">Couldn't find any data</h1>
        <p class="liked__message_text">Tap or click the heart icon to make restaurants saved on this page</p>
      </div>
    `;
  }
}

customElements.define('liked-message', LikedMessage);
