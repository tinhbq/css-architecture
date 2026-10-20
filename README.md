# ITCSS Architecture

Playground thực hành **ITCSS — Inverted Triangle CSS** bằng HTML và CSS thuần.
Stylesheet được sắp xếp từ rule có phạm vi rộng, specificity thấp đến rule cụ
thể, rõ mục đích và dễ override hơn.

## Chạy dự án

Mở trực tiếp `index.html` hoặc dùng một static server như VS Code Live Server.
Dự án không cần cài dependency.

## Tam giác đảo

```text
01 Settings    Design tokens, cấu hình toàn cục
02 Tools       Mixins và functions, không phát sinh CSS
03 Generic     Reset và normalization
04 Elements    HTML element không có class
05 Objects     Layout pattern không mang giao diện
06 Components  UI component cụ thể
07 Utilities   Helper đơn nhiệm, ưu tiên cao nhất
```

Khi đi xuống tam giác:

- **Reach giảm**: từ toàn bộ document đến một trường hợp cụ thể.
- **Explicitness tăng**: selector ngày càng mô tả rõ mục đích.
- **Specificity tăng có kiểm soát**: rule cụ thể xuất hiện sau rule tổng quát.

## Cấu trúc source

```text
styles/
├── main.css
├── 01-settings/settings.css
├── 02-tools/tools.css
├── 03-generic/generic.css
├── 04-elements/elements.css
├── 05-objects/objects.css
├── 06-components/
│   ├── site-header.css
│   ├── hero.css
│   ├── layer-map.css
│   ├── architecture-demo.css
│   ├── code-panel.css
│   └── site-footer.css
└── 07-utilities/utilities.css
```

`main.css` là nơi duy nhất quyết định thứ tự:

```css
@import url("./01-settings/settings.css");
@import url("./02-tools/tools.css");
@import url("./03-generic/generic.css");
@import url("./04-elements/elements.css");
@import url("./05-objects/objects.css");
@import url("./06-components/site-header.css");
/* các component khác */
@import url("./07-utilities/utilities.css");
```

## Namespace trong demo

- `o-`: object chỉ quản lý cấu trúc — `.o-container`, `.o-grid`, `.o-stack`.
- `c-`: component có giao diện — `.c-button`, `.c-layer-card`.
- `u-`: utility đơn nhiệm — `.u-full-width`, `.u-color-accent`.
- `is-`: trạng thái runtime — `.is-complete`, `.is-current`.

## Lưu ý về Tools

Trong Sass/Less, Tools chứa mixin và function. Dự án này dùng CSS thuần nên
`02-tools/tools.css` được giữ như một extension point có tài liệu nhưng cố ý
không tạo selector hoặc CSS output.

## Quy tắc trong demo

- Không import chéo giữa các partial; mọi import nằm trong `main.css`.
- Không để object quyết định màu sắc hoặc typography của component.
- Component không override generic hoặc element bằng selector quá dài.
- Utility chỉ làm một việc và luôn được import sau component.
- Không dùng ID selector hoặc `!important`.
