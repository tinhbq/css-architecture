# Sass 7–1 Pattern Architecture

Playground thực hành **Sass 7–1 Pattern**: bảy thư mục partial được tổng hợp bởi
một entrypoint `main.scss`. Trang demo dùng HTML thuần và CSS build sẵn nên có thể
mở trực tiếp; SCSS là source of truth cho kiến trúc.

## Chạy dự án

Mở trực tiếp `index.html` để xem bản CSS đã build.

Để chỉnh SCSS và build lại:

```bash
npm install
npm run build:css
```

Chế độ theo dõi thay đổi:

```bash
npm run watch:css
```

## Cấu trúc 7–1

```text
sass/
├── abstracts/     # Variables, functions, mixins; không phát sinh CSS
├── vendors/       # CSS từ thư viện bên ngoài
├── base/          # Reset, typography, element defaults
├── layout/        # Header, section, footer và cấu trúc lớn
├── components/    # Button, card, pipeline, code panel
├── pages/         # Style chỉ dành cho một page
├── themes/        # Theme tokens và biến thể giao diện
└── main.scss      # Entrypoint duy nhất
```

CSS đầu ra nằm tại `styles/main.css`.

## Thứ tự trong `main.scss`

```scss
// 1. Abstracts
@use "abstracts/variables";
@use "abstracts/functions";
@use "abstracts/mixins";

// 2. Vendors
@use "vendors/index";

// 3–7. Base, Layout, Components, Pages, Themes
```

`@use` được dùng thay cho `@import` đã deprecated. Mỗi partial tự khai báo
dependency cần thiết, ví dụ:

```scss
@use "../abstracts/functions" as fn;
@use "../abstracts/mixins" as mx;

.button {
  padding-inline: fn.space(4);
  @include mx.focus-ring;
}
```

## Trách nhiệm

- **Abstracts**: chỉ cung cấp API Sass, không tạo selector.
- **Vendors**: giữ ranh giới cho code bên thứ ba; demo hiện không có dependency UI.
- **Base**: định nghĩa nền tảng chung cho HTML element.
- **Layout**: quản lý flow và các vùng lớn, không sở hữu component skin.
- **Components**: các UI component tái sử dụng được.
- **Pages**: composition đặc thù của trang home.
- **Themes**: cung cấp CSS custom properties để component đổi nhận diện.

## Quy tắc trong demo

- Chỉ `sass/main.scss` tổng hợp toàn bộ partial.
- Partial bắt đầu bằng `_` và không được compile độc lập.
- Dependency Sass được khai báo rõ bằng `@use` với namespace.
- Không đặt component vào `pages/` hoặc layout vào `components/`.
- Không dùng ID selector hoặc `!important`.
