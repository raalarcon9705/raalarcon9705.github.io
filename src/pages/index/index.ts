import { splitLetters } from '../../utils/dom';
import './index.scss';
splitLetters();

const api = `https://raalarcon-portfolio-bot.herokuapp.com/send-message`;

const initView = () => {
  const btnContactToMe = document.getElementById('btnContactToMe');
  const sectionContactToMe = document.getElementById('contactToMe');
  const contactForm = document.getElementById('contactForm') as HTMLFormElement;

  btnContactToMe.addEventListener('click', () => {
    sectionContactToMe.scrollIntoView({ behavior: 'smooth' });
  });

  contactForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = Array.from(contactForm.elements).reduce((form: any, el) => {
      const input = el as HTMLInputElement;
      if (input.name) {
        form[input.name] = input.value;
        input.value = '';
      }
      return form;
    }, {});
    fetch(api, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  });
};

window.addEventListener('DOMContentLoaded', (event) => {
  initView();
});
