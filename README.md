# Atomic CSS Architecture

Playground thực hành **Atomic CSS** bằng HTML và CSS thuần. Giao diện được tạo
bằng cách ghép các class đơn nhiệm thay vì viết class riêng cho từng component.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Tư duy chính

Mỗi class chịu trách nhiệm cho một thuộc tính hoặc một nhóm hành vi rất nhỏ:

```html
<article class="grid gap-4 p-6 bg-surface border rounded-3 shadow-sm">
  <h3 class="text-xl font-bold text-ink">Atomic card</h3>
  <p class="text-muted leading-relaxed">Built by composing atoms.</p>
</article>
```

Không có `.card`, `.card-title` hay `.card-description`. Hình dạng của khối được
thể hiện ngay tại nơi sử dụng bằng các atom như `p-6`, `bg-surface`, `rounded-3`.

## Các nhóm utility

- **Layout**: `flex`, `grid`, `items-center`, `justify-between`.
- **Spacing**: `p-6`, `px-4`, `gap-3`, `py-8`.
- **Sizing**: `w-full`, `max-w-xl`, `min-h-screen`.
- **Typography**: `text-sm`, `font-bold`, `leading-relaxed`.
- **Color**: `bg-ink`, `text-muted`, `border-accent`.
- **Borders & effects**: `rounded-full`, `shadow-lg`, `transition`.
- **Variants**: `hover:lift`, `focus:ring`, `md:grid-cols-3`.

## Cấu trúc source

```text
styles/
├── main.css
├── tokens.css
├── base.css
└── atoms/
    ├── layout.css
    ├── spacing.css
    ├── sizing.css
    ├── typography.css
    ├── colors.css
    ├── borders.css
    ├── effects.css
    ├── states.css
    └── responsive.css
```

`main.css` là entry point. Atom được chia theo trách nhiệm để dễ tìm kiếm, còn
design tokens giữ spacing, màu sắc, radius và shadow nhất quán.

## Quy ước trong demo

- Một utility chỉ có một trách nhiệm rõ ràng.
- Giá trị lặp lại phải lấy từ design token.
- Variant trạng thái dùng tiền tố `hover:` hoặc `focus:`.
- Variant responsive dùng tiền tố breakpoint như `sm:`, `md:`, `lg:`.
- Không dùng selector ID, `!important` hoặc class dành riêng cho component.

## Trade-off

Atomic CSS giúp tái sử dụng tốt, giảm CSS phát sinh và làm thay đổi cục bộ dễ dự
đoán. Đổi lại, HTML có nhiều class hơn và đội ngũ cần thống nhất thang token cùng
cách đặt tên utility ngay từ đầu.
