import styles from './Header.module.css';

export function Header() {
  return `
    <header class="${styles.header}">
      <div class="${styles.container}">
        <a class="${styles.brand}" href="#top">
          <span class="${styles.mark}" aria-hidden="true">M</span>
          <span class="${styles.brandText}"><strong>CSS MODULES</strong><small>Local scope by default</small></span>
        </a>
        <nav class="${styles.nav}" aria-label="Điều hướng chính">
          <a class="${styles.link}" href="#scope">Scope</a>
          <a class="${styles.link}" href="#patterns">Patterns</a>
          <a class="${styles.link}" href="#source">Source</a>
        </nav>
      </div>
    </header>
  `;
}
