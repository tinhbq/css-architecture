import styles from './Hero.module.css';
import { Button } from '../Button/index.js';

export function Hero() {
  return `
    <section class="${styles.hero}">
      <div class="${styles.gridBackdrop}" aria-hidden="true"></div>
      <div class="${styles.container}">
        <div class="${styles.content}">
          <div class="${styles.badge}"><span class="${styles.dot}"></span>Scoped at build time</div>
          <div class="${styles.headingGroup}">
            <h1 class="${styles.title}">Write familiar CSS.<br /><span class="${styles.accent}">Keep it local.</span></h1>
            <p class="${styles.copy}">CSS Modules biến class thành export của JavaScript và tạo namespace riêng cho từng component—không cần một naming convention toàn cục.</p>
          </div>
          <div class="${styles.actions}">
            ${Button({ href: '#scope', label: 'Xem local scope', icon: '↓' })}
            ${Button({ href: '#source', label: 'Đọc source', variant: 'secondary', icon: '→' })}
          </div>
          <dl class="${styles.metrics}">
            <div><dt>Scope</dt><dd>Local</dd></div>
            <div><dt>Import</dt><dd>Explicit</dd></div>
            <div><dt>Output</dt><dd>Hashed</dd></div>
          </dl>
        </div>

        <div class="${styles.visual}">
          <div class="${styles.windowBar}"><span class="${styles.windowDots}"><i></i><i></i><i></i></span><span>FeatureCard.module.css</span></div>
          <div class="${styles.editor}">
            <ol class="${styles.lineNumbers}" aria-hidden="true"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li></ol>
            <pre class="${styles.code}"><code><span>.card</span> {
  padding: <em>var(--space-6)</em>;
  border-radius: <em>var(--radius-lg)</em>;
  background: <em>var(--surface)</em>;
}

<span>.title</span> { font-weight: 800; }</code></pre>
          </div>
          <div class="${styles.transform}">
            <div><small>Source</small><code>.card</code></div>
            <span aria-hidden="true">→</span>
            <div><small>Build output</small><code>._card_k8x4p_1</code></div>
          </div>
        </div>
      </div>
    </section>
  `;
}
