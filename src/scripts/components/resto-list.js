import './resto-item';

class RestoList extends HTMLElement {
  set resto(list) {
    this._restoList = list;
    this.render();
  }

  render() {
    this._restoList.forEach((restoItem) => {
      const restoItemElement = document.createElement('resto-item');
      restoItemElement.restoItem = restoItem;

      this.appendChild(restoItemElement);
    });
  }
}

customElements.define('resto-list', RestoList);
