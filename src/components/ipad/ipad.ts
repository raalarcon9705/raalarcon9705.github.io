import './ipad.scss';
class IPadMarkup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const image = this.dataset.image;
    this.innerHTML = `
    <div class='ipad'>
      <div class="display" style="background-image: url(${image})"></div>
    </div>`;
  }
}
customElements.define('ipad-markup', IPadMarkup);
