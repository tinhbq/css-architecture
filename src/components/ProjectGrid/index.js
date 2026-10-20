import styles from './ProjectGrid.module.css';

const projects = [
  { number: '01', tag: 'Featured', title: 'Token migration', copy: 'Share theme values across isolated modules.', progress: '84%', featured: true },
  { number: '02', tag: 'In progress', title: 'Profile surface', copy: 'Co-locate behavior, markup and local styles.', progress: '62%' },
  { number: '03', tag: 'Review', title: 'Scope audit', copy: 'Move accidental globals behind module boundaries.', progress: '91%' },
];

function ProjectCard(project) {
  const cardClass = project.featured ? `${styles.card} ${styles.featured}` : styles.card;

  return `
    <button
      class="${cardClass}"
      data-project-card
      data-selected-class="${styles.selected}"
      aria-pressed="false"
      type="button"
    >
      <span class="${styles.cardHeader}"><span class="${styles.tag}">${project.tag}</span><span class="${styles.number}">${project.number}</span></span>
      <span class="${styles.cardBody}"><strong class="${styles.title}">${project.title}</strong><span class="${styles.copy}">${project.copy}</span></span>
      <span class="${styles.progressGroup}"><span class="${styles.progressMeta}"><strong>${project.progress}</strong><small>complete</small></span><span class="${styles.track}"><i style="--progress: ${project.progress}"></i></span></span>
      <span class="${styles.hint}">Click to compose <code>styles.selected</code></span>
    </button>
  `;
}

export function ProjectGrid() {
  return `<div class="${styles.grid}">${projects.map(ProjectCard).join('')}</div>`;
}
