# Utility-first CSS Architecture

Playground thực hành **Utility-first CSS** bằng HTML và CSS thuần. Giao diện được
xây bằng cách ghép các utility class giới hạn bởi một design system chung.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Tư duy chính

Thay vì tạo class theo tên component rồi viết CSS mới, Utility-first bắt đầu từ
một vocabulary có sẵn:

```html
<article class="grid gap-4 rounded-2xl border bg-white p-6 shadow-sm">
  <h3 class="text-xl font-bold text-slate-950">Reusable card</h3>
  <p class="text-sm leading-6 text-slate-600">Composed from utilities.</p>
</article>
```

Markup mô tả trực tiếp layout, spacing, typography và skin. Khi pattern lặp lại,
hãy trích xuất nó thành template hoặc component của framework; không vội tạo một
class CSS tổng hợp che giấu các quyết định bên trong.

## Cấu trúc source

```text
styles/
├── main.css
├── theme.css
├── preflight.css
└── utilities/
    ├── layout.css
    ├── spacing.css
    ├── sizing.css
    ├── typography.css
    ├── colors.css
    ├── borders.css
    ├── effects.css
    ├── interactivity.css
    └── variants.css
```

- `theme.css`: design tokens giới hạn những giá trị được phép dùng.
- `preflight.css`: reset và mặc định toàn cục tối thiểu.
- `utilities/*`: các class đơn nhiệm cùng responsive/state variants.
- `main.css`: entry point duy nhất và thứ tự import rõ ràng.

## Variant conventions

```text
sm:flex                 → áp dụng từ breakpoint sm
md:grid-cols-3          → áp dụng từ breakpoint md
hover:-translate-y-1    → áp dụng khi hover
focus-visible:ring      → focus indicator cho bàn phím
group-hover:translate-x-1 → phần tử con phản ứng với parent .group
```

Dấu `:` được escape trong CSS selector, ví dụ `.hover\:bg-slate-800:hover`, nhưng
giữ nguyên trong HTML để đọc như một điều kiện.

## Nguyên tắc trong demo

- Utility chỉ có một trách nhiệm rõ ràng.
- Mọi giá trị lặp lại đến từ theme tokens.
- Mobile-first; breakpoint chỉ bổ sung thay đổi cần thiết.
- State variant nằm cạnh utility mà nó biến đổi.
- Không có class dành riêng cho component, selector ID hoặc `!important`.

## Utility-first và Atomic CSS

Hai hướng tiếp cận gần nhau. Atomic CSS nhấn mạnh tính nguyên tử của stylesheet;
Utility-first nhấn mạnh workflow xây UI từ một vocabulary có cấu hình trước,
kèm variants và cơ chế trích xuất pattern ở tầng template/component.
