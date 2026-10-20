import styles from './CodePanel.module.css';

export function CodePanel() {
  return `
    <div class="${styles.panel}">
      <div class="${styles.toolbar}"><span class="${styles.dots}"><i></i><i></i><i></i></span><span>FeatureCard.js</span></div>
      <pre class="${styles.code}"><code><span>import</span> styles <span>from</span>
  <em>'./FeatureCard.module.css'</em>;

<span>export function</span> FeatureCard() {
  <span>return</span> <em>\`&lt;article
    class="\${styles&#46;card}"&gt;
      ...
    &lt;/article&gt;\`</em>;
}</code></pre>
      <div class="${styles.footer}"><span>✓ Explicit dependency</span><span>✓ Local contract</span></div>
    </div>
  `;
}
