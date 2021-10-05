import { Particles, ParticlesStyle } from './classes/particles';
import { TextParticles } from './classes/text-particles';

export function createParticles(
  container?: HTMLElement,
  styles?: ParticlesStyle
) {
  return new Particles(container, styles);
}

export function createTextParticles(
  text: string,
  color = 'white',
  fontFamily = 'Verdana',
  fontSize = '30px',
  container?: HTMLElement
) {
  return new TextParticles(text, color, fontFamily, fontSize, container);
}
