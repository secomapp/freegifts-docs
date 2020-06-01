---
description: >-
  Normally When you install, the app will automatic insert the liquid code to
  your theme. However in a few case, the app could not insert correctly, so you
  can do it manually following this instruction.
---

# 6. Showing Gifts info on Collection page

Để tăng khả năng kích thích khách hàng mua sắm, Freegifts hỗ trợ tính năng hiển thị biểu tượng gift trên các sản phẩm được tạo ra bởi _Catalog offer rule_. Để thực hiện bạn cần tìm các tệp tin chứa nội dung hiển thị danh sách các sản phẩm theo collection \(thông thường năm trong thư mục **snippets** của Theme\). Ví dụ như: product-loop.liquid, product-grid-list.liquid, product-related.liquid hoặc thậm trí ngay trong tệp tin templates/collection.liquid

![](.gitbook/assets/image%20%287%29.png)

Find the code that shows the image. It looks like bellow.

```elixir
<img src="{{ product.featured_image | product_img_url: 'large' }}" alt="{{ product.title | escape }}" />
```

Then add this code below:

```elixir
<div name="secomapp-fg-image-{{ product.id }}" style="display: none;"> {{ "icon-freegift.png" | asset_url | img_tag: "Free Gift", "sca-fg-img-label" }} </div>
<div class="sca-fg-cat-list" style="display:none;" name="secomapp-fg-data-{{ product.id }}" prod-show='list'> </div>
```



