import { createParticles } from './features/particles/index';
import './scss/styles.scss';
import 'animate.css';
createParticles(document.body, { position: 'fixed' });
