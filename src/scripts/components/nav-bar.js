class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
      <a href="/" class="logo">
        <img src="logos/logo.png" alt="Logo Header" />
      </a>
    
      <button class="hamburgerButton" aria-label="Menu" aria-expanded="false">
        <span class="hamburgerButton__bar"></span>
        <span class="hamburgerButton__bar"></span>
        <span class="hamburgerButton__bar"></span>
      </button>
    
      <ul class="nav-list">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#/favorite" class="nav-link">Favorites</a></li>
        <li class="nav-item"><a href="https://github.com/dedenrh" target="_blank" rel=”noreferrer” class="nav-link">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
