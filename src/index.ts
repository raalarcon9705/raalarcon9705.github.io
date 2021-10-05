import {
  createParticles,
  createTextParticles,
} from './features/particles/index';
import './scss/styles.scss';

const particles = createParticles();
createTextParticles('Hello', 'blue', 'Courier');
