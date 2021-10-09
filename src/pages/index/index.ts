import { splitLetters } from '../../utils/dom';
import './index.scss';
splitLetters();

const initView = () => {
  const btnContactToMe = document.getElementById('btnContactToMe');
  const sectionContactToMe = document.getElementById('contactToMe');

  btnContactToMe.addEventListener('click', () => {
    sectionContactToMe.scrollIntoView({ behavior: 'smooth' });
  });
};

window.addEventListener('DOMContentLoaded', (event) => {
  initView();
});
