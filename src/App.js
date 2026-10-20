import styles from './App.module.css';
import { Header } from './components/Header/index.js';
import { Hero } from './components/Hero/index.js';
import { ScopeDemo } from './components/ScopeDemo/index.js';
import { ProjectGrid } from './components/ProjectGrid/index.js';
import { CodePanel } from './components/CodePanel/index.js';

export function App() {
  return `
    <div class="${styles.appShell}" id="top">
      ${Header()}
      <main>
        ${Hero()}

        <section class="${styles.section}" id="scope">
          <div class="${styles.container}">
            <div class="${styles.sectionHeader}">
              <div class="${styles.headingGroup}">
                <span class="${styles.eyebrow}">01 · Local scope</span>
                <h2 class="${styles.sectionTitle}">Same class name. Different module.</h2>
              </div>
              <p class="${styles.sectionCopy}">Mỗi file tạo một namespace riêng, vì vậy component có thể dùng tên ngắn và đúng ngữ cảnh mà không sợ cascade ngoài ý muốn.</p>
            </div>
            ${ScopeDemo()}
          </div>
        </section>

        <section class="${styles.section} ${styles.darkSection}" id="patterns">
          <div class="${styles.container}">
            <div class="${styles.sectionHeader}">
              <div class="${styles.headingGroup}">
                <span class="${styles.eyebrow} ${styles.lightEyebrow}">02 · Component patterns</span>
                <h2 class="${styles.sectionTitle}">Local by default. Composable by choice.</h2>
              </div>
              <p class="${styles.sectionCopy} ${styles.mutedCopy}">Module giữ style gần component, trong khi tokens và custom properties tạo một contract chung.</p>
            </div>
            ${ProjectGrid()}
          </div>
        </section>

        <section class="${styles.section}" id="source">
          <div class="${styles.container} ${styles.sourceLayout}">
            <div class="${styles.headingGroup}">
              <span class="${styles.eyebrow}">03 · Source contract</span>
              <h2 class="${styles.sectionTitle}">Imports make ownership explicit.</h2>
              <p class="${styles.sectionCopy}">JavaScript chỉ dùng class được export bởi module. Đổi tên hoặc xóa rule sẽ lộ ra ngay tại component sở hữu nó.</p>
              <ul class="${styles.checkList}">
                <li>✓ Local class names, không global collision</li>
                <li>✓ CSS co-located với component</li>
                <li>✓ Global layer chỉ giữ tokens và reset</li>
              </ul>
            </div>
            ${CodePanel()}
          </div>
        </section>
      </main>

      <footer class="${styles.footer}">
        <div class="${styles.container} ${styles.footerInner}">
          <p>CSS Modules playground · Scope without ceremony.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  `;
}
