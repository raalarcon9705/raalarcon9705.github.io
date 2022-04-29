import { createParticlesEffectBackground } from '../../ui/particles';

const api = 'https://raalarcon-portfolio-bot.herokuapp.com/send-message';
const contactForm = document.querySelector<HTMLFormElement>('#contact form');
const navBarToggler = document.querySelector('.nav-toggler');

function handleSubmitContactForm(ev: Event) {
  ev.preventDefault();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }).then();
}

function handleInputContactForm() {
  const btnSubmit = contactForm.querySelector('button[type="submit"]');
  const isValid = (Array.from(contactForm.elements) as HTMLInputElement[]).reduce(
    (valid, input) => valid && input.validity.valid,
    true
  );
  if (isValid) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'true');
  }
}

function initPageSections() {
  document.querySelectorAll<HTMLElement>('.section').forEach((section) => {
    function handleAnimationEnd(ev: AnimationEvent) {
      if (ev.animationName === 'openSection' || ev.animationName === 'closeSection') {
        section.classList.add('ready-section');
        section.removeEventListener('animationend', handleAnimationEnd);
      }
    }
  
    section.addEventListener('animationend', handleAnimationEnd);
  });

  document.querySelectorAll('.nav-list.sections a').forEach(el => {
    el.addEventListener('click', () => {
      const sections = document.querySelector('.nav-list.sections');
      sections.classList.remove('expand');
    });
  });
}

function initSkillBars() {
  document.querySelectorAll<HTMLElement>('.skill-bar').forEach(el => {
    el.style.setProperty('--value', el.dataset.value);
  });
}

function handleTogglerClick(ev: Event) {
  ev.preventDefault();
  const sections = document.querySelector('.nav-list.sections');
  sections.classList.toggle('expand');
}

createParticlesEffectBackground();
initPageSections();
initSkillBars();

contactForm.addEventListener('input', handleInputContactForm);
contactForm.addEventListener('submit', handleSubmitContactForm);
navBarToggler.addEventListener('click', handleTogglerClick);

// 