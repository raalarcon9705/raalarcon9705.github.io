import { getRandomInt } from './functions';

export function splitLettersSimple(el: Node, letterClass = 'letter') {
  if (el.nodeType === Node.TEXT_NODE) {
    const html = el.textContent
      .replace(/\s+/g, ' ')
      .split('')
      .reduce(
        (content, letter) =>
          content +
          `<span class="${
            letter.trim() ? letterClass : 'whitespace'
          }">${letter}</span>`,
        ''
      );
    const span = document.createElement('span');
    span.className = 'temp';
    span.innerHTML = html;
    el.parentNode.replaceChild(span, el);
  } else {
    el.childNodes.forEach((child) => splitLettersSimple(child as any));
    const children = Array.from<HTMLElement>(el.childNodes as any)
      .map((child) =>
        child.className === 'temp'
          ? Array.from<HTMLElement>(child.childNodes as any)
          : [child]
      )
      .reduce((arr, child) => arr.concat(child), []);

    children
      .filter((child) => child.classList?.contains('letter'))
      .forEach((child) => {
        const duration = getRandomInt(400, 2000);
        child.classList.add('animate__animated', 'animate__bounceIn');
        child.style.setProperty('--animate-duration', `${duration}ms`);

        child.addEventListener('mouseenter', () =>
          child.classList.add('animate__animated', 'animate__headShake')
        );

        child.addEventListener('animationend', () => {
          child.style.removeProperty('--animate-duration');

          child.classList.remove(
            'animate__animated',
            'animate__headShake',
            'animate__bounceIn'
          );
        });
      });
    const p = el as ParentNode;
    if (p.replaceChildren) {
      p.replaceChildren(...children);
    }
  }
}

export function splitLetters(
  selector = '.split-letters',
  letterClass = 'letter'
) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    splitLettersSimple(element, letterClass);
  });
}
