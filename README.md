# RSCSS Architecture

Playground thực hành **RSCSS — Reasonable System for CSS Stylesheet Structure**
bằng HTML và CSS thuần. Kiến trúc tập trung vào component độc lập, element được
scope rõ ràng, variant ngắn gọn và helper đơn nhiệm.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Naming conventions

```text
.component-name        Component: ít nhất hai từ
.component-name > .element
.component-name.-variant
._helper               Helper: tiền tố underscore
```

Ví dụ:

```html
<article class="session-card -featured">
  <span class="badge -live">Live</span>
  <h3 class="title">RSCSS in practice</h3>
  <a class="action-button -primary _full-width">Join session</a>
</article>
```

```css
.session-card { ... }
.session-card > .badge { ... }
.session-card > .title { ... }
.session-card.-featured { ... }
.session-card > .badge.-live { ... }
```

## Bốn building blocks

- **Components**: tên ít nhất hai từ như `.session-card`, `.action-button`.
- **Elements**: tên ngắn, một từ và được scope bằng direct child `>`.
- **Variants**: class bắt đầu bằng `-`, luôn đi cùng component hoặc element gốc.
- **Helpers**: class bắt đầu bằng `_`, chỉ làm một việc và được dùng hạn chế.

## Cấu trúc source

```text
styles/
├── main.css
├── base.css
├── helpers.css
└── components/
    ├── page-shell.css
    ├── layout-grid.css
    ├── stack-list.css
    ├── cluster-list.css
    ├── site-header.css
    ├── hero-section.css
    ├── content-section.css
    ├── rule-card.css
    ├── session-card.css
    ├── schedule-board.css
    ├── code-panel.css
    └── site-footer.css
```

Mỗi UI component có file riêng. `helpers.css` được import cuối để helper có thể
thực hiện override nhỏ, rõ chủ đích.

## Nguyên tắc trong demo

- Component phải có khả năng hoạt động độc lập với container cha.
- Element chỉ được style qua component sở hữu: `.session-card > .title`.
- Không tạo chuỗi element như `.card__header__title`.
- Khi một phần có thể tái sử dụng độc lập, tách nó thành nested component.
- Variant dùng `-featured`; helper dùng `_full-width`.
- Không dùng ID selector hoặc `!important`.

Stylesheet dùng CSS nesting chuẩn hiện đại để source gần với cú pháp RSCSS gốc
mà không cần Sass compiler.
