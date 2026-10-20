# CSS Modules Architecture

Playground minh họa **CSS Modules** bằng Vite và JavaScript thuần. Mỗi component
import file `*.module.css` của riêng nó; Vite tự tạo tên class có local scope khi
build để tránh xung đột ngoài ý muốn.

## Chạy dự án

```bash
pnpm install
pnpm dev
```

Build production:

```bash
pnpm build
pnpm preview
```

## Cơ chế chính

```js
import styles from './FeatureCard.module.css';

export function FeatureCard() {
  return `<article class="${styles.card}">...</article>`;
}
```

```css
/* FeatureCard.module.css */
.card {
  border-radius: var(--radius-lg);
}
```

Class `.card` chỉ có ý nghĩa trong module này. Sau build, nó trở thành tên được
hash, ví dụ `_card_x7k2a_1`, nên một module khác cũng có thể dùng `.card` an toàn.

## Cấu trúc source

```text
src/
├── main.js
├── App.js
├── App.module.css
├── styles/
│   ├── tokens.css
│   └── global.css
└── components/
    ├── Header/
    │   ├── index.js
    │   └── Header.module.css
    ├── Hero/
    │   ├── index.js
    │   └── Hero.module.css
    ├── Button/
    │   ├── index.js
    │   └── Button.module.css
    ├── ScopeDemo/
    │   ├── index.js
    │   └── ScopeDemo.module.css
    ├── ProjectGrid/
    │   ├── index.js
    │   └── ProjectGrid.module.css
    └── CodePanel/
        ├── index.js
        └── CodePanel.module.css
```

## Patterns được minh họa

- **Local scope**: nhiều module cùng dùng `.title`, `.card` mà không xung đột.
- **Co-location**: JavaScript và CSS của component nằm cùng thư mục.
- **Composition**: `composes` tái sử dụng rule trong cùng module.
- **Conditional class**: ghép `styles.card` với `styles.selected` theo state.
- **Global boundary**: tokens/reset nằm trong `styles/`; component rules là local.
- **Shared contract**: custom properties truyền theme vào các module độc lập.

## Nguyên tắc

- Chỉ đặt reset, tokens và element defaults trong global CSS.
- Không dùng selector ID hoặc `!important`.
- Giữ selector trong module nông và gắn với component hiện tại.
- Dùng `styles.className`; không hard-code tên local class trong JavaScript.
- CSS Modules giải quyết scope, không tự quyết định component boundaries hay
  design tokens—cấu trúc source vẫn cần được thiết kế rõ ràng.
