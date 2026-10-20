# SMACSS Architecture

Playground thực hành **SMACSS — Scalable and Modular Architecture for CSS** bằng
HTML và CSS thuần. Stylesheet được phân loại theo trách nhiệm thay vì theo vị trí
trên trang.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Năm category của SMACSS

| Category | Trách nhiệm | Quy ước trong demo |
| --- | --- | --- |
| Base | Mặc định cho element | `body`, `h1`, `a`, `button` |
| Layout | Cấu trúc lớn và flow trang | `.l-container`, `.l-grid` |
| Module | Component độc lập, tái sử dụng | `.card`, `.button`, `.activity` |
| State | Trạng thái tạm thời hoặc tương tác | `.is-active`, `.is-unread` |
| Theme | Màu sắc và nhận diện có thể thay thế | `.theme-dark`, `.theme-violet` |

## Cấu trúc source

```text
styles/
├── main.css
├── settings.css
├── base/
│   └── base.css
├── layout/
│   └── layout.css
├── modules/
│   ├── site-header.css
│   ├── hero.css
│   ├── category-card.css
│   ├── dashboard.css
│   ├── activity.css
│   ├── button.css
│   ├── theme-preview.css
│   ├── code-panel.css
│   └── site-footer.css
├── state/
│   └── state.css
└── theme/
    └── theme.css
```

Thứ tự import trong `main.css` đi từ rule tổng quát đến rule có ngữ cảnh rõ hơn:

```css
/* settings → base → layout → modules → state → theme */
```

## Quy tắc trong demo

- Base chỉ dùng element selector và pseudo-element tổng quát.
- Layout class có prefix `l-` và không quyết định màu sắc component.
- Module độc lập với container bao quanh nó.
- State class có prefix `is-` và luôn đi cùng module liên quan.
- Theme thay đổi design tokens qua CSS custom properties, không sao chép module.
- Không dùng ID selector hoặc `!important`.
