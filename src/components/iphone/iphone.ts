import './iphone.scss';
class IPhoneMarkup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const image = this.dataset.image;
    this.innerHTML = `
    <div class='iphone'>
      <div class="display" style="background-image: url(${image})"></div>
    </div>`;
  }
}
customElements.define('iphone-markup', IPhoneMarkup);
