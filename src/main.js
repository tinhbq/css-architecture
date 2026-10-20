import './styles/global.css';
import { App } from './App.js';

const root = document.querySelector('#app');

if (!root) {
  throw new Error('App root was not found.');
}

root.innerHTML = App();

root.addEventListener('click', (event) => {
  const card = event.target.closest('[data-project-card]');

  if (!card) return;

  const isSelected = card.getAttribute('aria-pressed') === 'true';
  card.setAttribute('aria-pressed', String(!isSelected));
  card.classList.toggle(card.dataset.selectedClass, !isSelected);
});
