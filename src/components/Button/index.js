import styles from './Button.module.css';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Button({ href, label, variant = 'primary', icon = '' }) {
  return `<a class="${variants[variant]}" href="${href}">${label}<span class="${styles.icon}" aria-hidden="true">${icon}</span></a>`;
}
