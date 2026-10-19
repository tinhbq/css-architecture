# BEM Architecture

Playground thực hành **BEM (Block, Element, Modifier)** bằng HTML và CSS thuần.
Mục tiêu là tạo component độc lập, tên class có ý nghĩa và selector luôn dễ dự
đoán khi dự án phát triển.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Công thức đặt tên

```text
.block
.block__element
.block--modifier
.block__element--modifier
```

Ví dụ:

```html
<article class="course-card course-card--featured">
  <span class="course-card__badge course-card__badge--featured">Popular</span>
  <h3 class="course-card__title">BEM Essentials</h3>
  <a class="button button--primary" href="#">Start learning</a>
</article>
```

## Ba thành phần

- **Block**: component độc lập, có thể tái sử dụng — `.course-card`.
- **Element**: phần tử thuộc về block, không có ý nghĩa độc lập —
  `.course-card__title`.
- **Modifier**: biến thể hoặc trạng thái — `.course-card--featured`.

## Cấu trúc source

```text
styles/
├── main.css
├── settings.css
├── base.css
└── blocks/
    ├── site-header.css
    ├── hero.css
    ├── button.css
    ├── section-heading.css
    ├── principle-card.css
    ├── bem-anatomy.css
    ├── course-card.css
    ├── code-panel.css
    └── site-footer.css
```

Mỗi file trong `blocks/` sở hữu style của một block. Các block không cần biết vị
trí cha hoặc component bao quanh chúng.

## Quy tắc trong demo

- Chỉ dùng class selector cho component.
- Không lồng tên element như `.block__item__icon`; dùng `.block__icon`.
- Modifier luôn đi cùng class gốc trong HTML.
- Không dùng selector phụ thuộc vị trí như `.sidebar .course-card`.
- Không dùng ID selector hoặc `!important` để định kiểu.
- Tách block khi một phần giao diện có thể tồn tại và tái sử dụng độc lập.
