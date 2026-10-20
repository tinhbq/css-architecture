import styles from './ScopeDemo.module.css';

export function ScopeDemo() {
  return `
    <div class="${styles.demoGrid}">
      <article class="${styles.scopeCard} ${styles.violetCard}">
        <div class="${styles.meta}"><span>Profile.module.css</span><code>styles.title</code></div>
        <div class="${styles.avatar}" aria-hidden="true">AL</div>
        <div class="${styles.cardBody}"><h3 class="${styles.title}">Alex Morgan</h3><p class="${styles.description}">Product designer · Module owner</p></div>
        <span class="${styles.output}">→ _title_1a9cf_8</span>
      </article>

      <div class="${styles.connector}" aria-hidden="true"><span>≠</span><small>No collision</small></div>

      <article class="${styles.scopeCard} ${styles.limeCard}">
        <div class="${styles.meta}"><span>Report.module.css</span><code>styles.title</code></div>
        <div class="${styles.chart}" aria-label="Biểu đồ báo cáo"><i></i><i></i><i></i><i></i><i></i></div>
        <div class="${styles.cardBody}"><h3 class="${styles.title}">Weekly growth</h3><p class="${styles.description}">+18.4% compared with last week</p></div>
        <span class="${styles.output}">→ _title_7x2md_5</span>
      </article>
    </div>
  `;
}
