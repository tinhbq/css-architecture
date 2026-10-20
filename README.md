# SUIT CSS Architecture

Playground thực hành **SUIT CSS** bằng HTML và CSS thuần. Mọi class thể hiện một
contract rõ ràng giữa component, descendant, modifier, state và utility.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Naming conventions

```text
.ComponentName
.ComponentName-descendantName
.ComponentName--modifierName
.ComponentName.is-stateName
.u-utilityName
```

Ví dụ:

```html
<article class="ProductCard ProductCard--featured is-selected">
  <span class="ProductCard-badge">Popular</span>
  <h3 class="ProductCard-title">Design System</h3>
</article>
```

## Năm loại class

- **Component**: PascalCase — `.ProductCard`.
- **Descendant**: component + một dấu `-` — `.ProductCard-title`.
- **Modifier**: component + hai dấu `--` — `.ProductCard--featured`.
- **State**: tiền tố `is-` — `.is-selected`, luôn đi cùng component.
- **Utility**: tiền tố `u-` — `.u-sizeFull`, chỉ làm một việc.

Component-scoped custom properties cũng dùng namespace:

```css
.ProductCard {
  --ProductCard-background: var(--color-surface);
  background: var(--ProductCard-background);
}
```

## Cấu trúc source

```text
styles/
├── main.css
├── base.css
├── utilities.css
└── components/
    ├── PageShell.css
    ├── SiteHeader.css
    ├── ActionButton.css
    ├── HeroPanel.css
    ├── SectionHeader.css
    ├── RuleCard.css
    ├── ProductCard.css
    ├── TaskBoard.css
    ├── CodePanel.css
    └── SiteFooter.css
```

Mỗi component có file riêng. Utilities được import cuối để các override nhỏ luôn
rõ chủ đích và không cần tăng specificity.

## Nguyên tắc trong demo

- Không dùng selector dựa trên vị trí của component.
- Descendant chỉ thuộc đúng một component.
- Modifier thay đổi cấu hình component qua custom properties.
- State mô tả tình trạng tạm thời, không thay thế modifier.
- Utility không biết component đang áp dụng nó.
- Không dùng ID selector hoặc `!important`.
