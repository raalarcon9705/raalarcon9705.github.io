import { createImageParticles, createTextParticles } from '../../features/particles/index';
import { splitLetters } from '../../utils/dom';
import './index.scss';
splitLetters();

const api = `https://raalarcon-portfolio-bot.herokuapp.com/send-message`;

const slide = (el: HTMLElement, direction: 'down' | 'up') => {
  const position = el.style.getPropertyValue('transform');
  console.log(position);
};

const initView = () => {
  const btnContactToMe = document.getElementById('btnContactToMe');
  const btnAboutMe = document.getElementById('btnAboutMe');
  const btnSubmit = document.getElementById('btnSubmit');
  const sectionContactToMe = document.getElementById('contactToMe');
  const sectionAboutMe = document.getElementById('aboutMe');
  const contactForm = document.getElementById('contactForm') as HTMLFormElement;
  const slides = document.getElementById('slideSections');

  btnContactToMe.addEventListener('click', () => {
    sectionContactToMe.scrollIntoView({ behavior: 'smooth' });
  });
  btnAboutMe.addEventListener('click', () => {
    sectionAboutMe.scrollIntoView({ behavior: 'smooth' });
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
    }).then(() => {});
  });

  contactForm.addEventListener('input', () => {
    const isValid = (Array.from(contactForm.elements) as HTMLInputElement[]).reduce(
      (valid, input) => valid && input.validity.valid,
      true
    );
    if (isValid) {
      btnSubmit.removeAttribute('disabled');
    } else {
      btnSubmit.setAttribute('disabled', 'true');
    }
  });

  // window.addEventListener('scroll', () => slide(slides, 'down'))
};

window.addEventListener('DOMContentLoaded', (event) => {
  initView();
});
