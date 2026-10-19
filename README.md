# OOCSS Architecture

Ví dụ thực hành **Object-Oriented CSS (OOCSS)** bằng HTML và CSS thuần.
Trang demo tập trung vào hai nguyên tắc cốt lõi:

1. **Tách structure khỏi skin** — kích thước và bố cục không phụ thuộc màu sắc,
   đường viền hay theme.
2. **Tách container khỏi content** — một object có thể hoạt động ở nhiều vị trí
   mà không phụ thuộc selector cha.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Cấu trúc

```text
styles/
├── main.css        # Điểm vào và thứ tự import
├── settings.css    # Design tokens
├── base.css        # Reset nhỏ và element defaults
├── objects.css     # Pattern cấu trúc tái sử dụng
├── skins.css       # Giao diện trực quan có thể hoán đổi
├── components.css  # Thành phần đặc thù của trang demo
└── utilities.css   # Helper đơn nhiệm
```

## Object và skin

Một object chỉ quyết định **hình dạng/cấu trúc**:

```css
.box {
  padding: var(--space-5);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
}
```

Skin quyết định **cách object được trình bày**:

```css
.skin-surface {
  background: var(--color-surface);
  border-color: var(--color-line);
}
```

HTML kết hợp các class nhỏ thay vì tạo một selector mới cho từng trường hợp:

```html
<article class="box skin-surface shadow-card">...</article>
```

## Objects trong demo

- `stack`: sắp xếp phần tử theo chiều dọc với khoảng cách nhất quán.
- `cluster`: nhóm phần tử nằm ngang và tự xuống dòng.
- `grid`: lưới responsive không phụ thuộc nội dung.
- `media`: pattern hình ảnh/icon bên cạnh nội dung.
- `box`: vùng chứa có padding và radius.
- `button`: cấu trúc nút, không gắn màu sắc cụ thể.

## Quy ước

- Object không dùng selector theo vị trí như `.sidebar .card`.
- Object không chứa màu sắc hoặc theme cụ thể.
- Skin không thay đổi layout hoặc kích thước object.
- Ưu tiên class selector phẳng, tránh tăng specificity.
- Tạo object mới khi pattern cấu trúc thực sự được lặp lại.
