import './imac.scss';
class IMacMarkup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const image = this.dataset.image;
    this.innerHTML = `
    <div class="macbook">
      <div class="screen">
        <div class="viewport" style="background-image:url('${image}');">
        </div>
      </div>
      <div class="base"></div>
      <div class="notch"></div>
    </div>`;
  }
}
customElements.define('imac-markup', IMacMarkup);
