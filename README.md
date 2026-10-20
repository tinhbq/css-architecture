# CUBE CSS Architecture

Playground thực hành **CUBE CSS** bằng HTML và CSS thuần. Giao diện được tổ chức
theo bốn lớp: **Composition, Utility, Block, Exception**.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## CUBE là gì?

```text
C — Composition : bố cục cấp cao và flow
U — Utility     : một nhiệm vụ nhỏ, tái sử dụng rộng
B — Block       : phần giao diện có identity riêng
E — Exception   : sai khác có chủ đích của một block
```

Ví dụ:

```html
<article class="project-card flow bg-surface shadow" data-featured="true">
  ...
</article>
```

- `flow` điều khiển nhịp dọc — **Composition**.
- `bg-surface`, `shadow` áp dụng một nhiệm vụ — **Utility**.
- `project-card` tạo identity cho khối — **Block**.
- `data-featured="true"` mô tả trường hợp đặc biệt — **Exception**.

## Cấu trúc source

```text
styles/
├── main.css
├── tokens.css
├── global.css
├── compositions/
│   ├── wrapper.css
│   ├── flow.css
│   ├── cluster.css
│   ├── grid.css
│   ├── switcher.css
│   └── sidebar.css
├── utilities.css
├── blocks/
│   ├── site-header.css
│   ├── button.css
│   ├── hero.css
│   ├── cards.css
│   ├── code-panel.css
│   └── site-footer.css
└── exceptions.css
```

`main.css` giữ đúng thứ tự: nền tảng → compositions → utilities → blocks →
exceptions. Exception được import cuối để thay đổi block mà không cần selector
quá đặc hiệu hoặc `!important`.

## Nguyên tắc trong demo

- Composition chỉ giải quyết layout, không quyết định skin.
- Utility làm một việc và lấy giá trị từ design tokens.
- Block sở hữu identity nhưng vẫn nhận context qua custom properties.
- Exception dùng `data-*` để trạng thái và biến thể hiện rõ trong HTML.
- Selector giữ specificity thấp; không dùng ID selector hoặc `!important`.

## Khi nào phù hợp?

CUBE CSS phù hợp khi muốn giữ CSS gần với bản chất cascade, kết hợp layout tái
sử dụng với các block dễ nhận biết mà không biến mọi thứ thành component cứng.
