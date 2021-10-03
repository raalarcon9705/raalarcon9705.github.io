export function splitLettersSimple(el: Node, letterClass = 'letter') {
  if (el.nodeType === Node.TEXT_NODE) {
    const html = el.textContent
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
    el.childNodes.forEach((child) => splitLettersSimple(child));
    const children = Array.from(el.childNodes)
      .map((child: Element) =>
        child.className === 'temp' ? Array.from(child.childNodes) : [child]
      )
      .reduce((arr, child) => arr.concat(child), []);

    children
      .filter((child: HTMLElement) => child.className === 'letter')
      .forEach((child: HTMLElement) => {
        child.addEventListener('mouseenter', () =>
          child.classList.add('animate__animated', 'animate__bounce')
        );

        child.addEventListener('animationend', () => {
          child.classList.remove('animate__animated', 'animate__bounce');
        });
      });
    (el as ParentNode).replaceChildren(...children);
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
