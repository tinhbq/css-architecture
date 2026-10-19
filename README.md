# CSS cơ bản + Cascade Architecture

Một playground nhỏ để ôn lại các nền tảng CSS và thực hành tổ chức stylesheet
theo thứ tự ưu tiên rõ ràng bằng CSS Cascade Layers (`@layer`).

## Chạy dự án

Dự án chỉ dùng HTML/CSS thuần. Có thể mở trực tiếp `index.html`, hoặc chạy một
static server bất kỳ, ví dụ với VS Code Live Server.

## Kiến trúc CSS

Thứ tự layer được khai báo một lần trong `styles/main.css`:

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

Layer đứng sau có độ ưu tiên cao hơn layer đứng trước, bất kể selector có độ
specificity thấp hơn. Bên trong cùng một layer, các quy tắc cascade thông thường
vẫn được áp dụng.

```text
styles/
├── main.css                 # Khai báo thứ tự và import các layer
├── 01-reset/reset.css       # Chuẩn hóa mặc định của trình duyệt
├── 02-tokens/tokens.css     # Design tokens / CSS custom properties
├── 03-base/base.css         # Kiểu mặc định cho các HTML element
├── 04-layout/layout.css     # Container, grid và bố cục trang
├── 05-components/
│   └── components.css       # Button, card, badge, demo cascade
├── 06-utilities/utilities.css # Class đơn nhiệm
└── 07-overrides/overrides.css # Ngoại lệ có chủ đích, dùng rất ít
```

## Nguyên tắc chính

- Dùng semantic HTML trước khi tạo class.
- Đưa màu sắc, khoảng cách, font và radius vào tokens để tái sử dụng.
- Component chỉ quản lý giao diện nội bộ của chính nó.
- Utility làm đúng một việc và được phép thắng component nhờ thứ tự layer.
- Override là lối thoát cuối cùng, không phải nơi chứa các bản vá tùy tiện.
- Không dùng `!important`; quyền ưu tiên được kiểm soát bằng layer và source order.

## Nội dung được minh họa

- Box model, inheritance, custom properties, responsive units và Grid.
- Ba yếu tố của cascade: origin/importance, specificity và source order.
- Cascade Layers giúp giảm cuộc đua tăng specificity.
- Trạng thái tương tác với `:hover`, `:focus-visible` và `:disabled`.
- Responsive layout và hỗ trợ `prefers-reduced-motion`.
