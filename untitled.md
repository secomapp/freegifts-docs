---
description: >-
  This app requires liquid code to be added to the theme files. We provide the
  instruction for doing this, however if it is hard for you, you can ask us to
  do liquid code installing for you.
---

# 2. Re-calculate and update price of product has cloned gift variants

{% hint style="info" %}
 _**We recommend you to let us to complete install for you** because it will help you to avoid hassle of doing it yourself \(And It's_  _absolutely **FREE** for you\)._

_if you need free installation please create an account with permission \(**app, theme and product**\) for us.  
For how to create a staff account please refer_ [_this post_](http://docs.shopify.com/manual/settings/account/staff-members) _.  
And please use this email when create account : **support@secomapp.zendesk.com**_
{% endhint %}

Bởi vì sản phầm gift được tạo ra trong cùng sản phẩm gốc nên các thông số về giá của sản phẩm bị thay đổi: comparre\_at\_price, price\_min, price\_max ... Để cập nhập lại giá chính xác của sản phẩm chúng ta sẽ cần một tệp tin chứa liquid code cho việc tính toán này.

Hãy tải về tập tin sau: [sca\_freegift\_price.liquid](https://github.com/secomapp/freegifts-docs/blob/master/files/sca_freegift_price.liquid) và upload vào thư mục snippets của theme bạn đang sử dụng.

Thông thường các file sau sẽ chứa các thông số về giá mà chúng ta cần cập nhật:  **product-loop.liquid, product-grid-list.liquid, snippet-product-item.liquid, product-block.liquid, collection.liquid ...**

Ví dụ khi mở file template/collection.liquid bạn có thể sẽ tìm thấy đoạn code như sau:

```text
<div id="coll-product-list" class="grid-uniform product-list">
{% for product in collection.products %}
{% assign grid_item_width = 'large--col-3 medium--col-4 small--col-6' %}

{% include 'snippet-product-item' %}

{% endfor %}
```

Bạn có thể nhìn thấy dòng code `{% include 'snippet-product-item' %}` là tệp tin sẽ chứa phần hiển thị các sản phẩm trong 1 collection. Hãy sửa đoạn code thành như sau

```text
<div id="coll-product-list" class="grid-uniform product-list">
{% for product in collection.products %}
{% assign grid_item_width = 'large--col-3 medium--col-4 small--col-6' %}

{%include 'sca_freegift_price' with product %}
{% include 'snippet-product-item' %}

{% endfor %}
```

{% hint style="info" %}
Lưu ý là tuỳ trường hợp khai báo đối tượng của vòng lặp for-loop là "**product**", "**item**", "**prod**"... chúng ta sẽ cần đổi tên lại tương ứng cho đúng với lệnh include của file **sca\_freegift\_price**
{% endhint %}

Tiếp theo, bạn hãy tìm tới tập tin `snippets/snippet-product-item.liquid` đó và bạn sẽ thấy các đoạn code chưa thông tin về giá của sản phẩm. Nó có thể như hình dưới đây

```text
<div class="coll-prod-meta {% unless settings.show_buy_medallion %}no-medallion{% endunless %}">
<h5><a href="{{ product.url | within: collection }}">{{ product.title }}</a></h5>
{% if product.compare_at_price > product.price %}
<p class="coll-prod-price on-sale accent-text">
{{ product.price | money }}
<em class="compare-at-price">{{ product.compare_at_price | money }}</em>
</p>
{% else %}
<p class="coll-prod-price accent-text">
{% if product.price_varies %}From{% endif %}
{{ product.price | money }}
</p>
{% endif %}
</div>
```

Bạn hãy thực hiện thay đổi các đoạn code chưa thông tin giá sản phẩm về giá trị sau khi tính toán lại như sau:

* replace the code _**product.price**_ to _**sca\_price**_
* replace the code _**product.price\_max**_ to _**sca\_price\_max**_
* replace the code _**product.price\_min**_ to _**sca\_price\_min**_
* replace the code _**product.compare\_at\_price**_ to _**sca\_compare\_at\_price**_
* replace the code _**product.compare\_at\_price\_max**_ to _**sca\_compare\_at\_price\_max**_
* replace the code _**product.compare\_at\_price\_min**_ to _**sca\_compare\_at\_price\_min**_

Sau khi thay đổi lại, bạn sẽ có đoạn code mới như sau

```text
<div class="coll-prod-meta {% unless settings.show_buy_medallion %}no-medallion{% endunless %}">
<h5><a href="{{ product.url | within: collection }}">{{ product.title }}</a></h5>
{% if sca_compare_at_price > sca_price %}
<p class="coll-prod-price on-sale accent-text">
{{ sca_price | money }}
<em class="compare-at-price">{{ sca_compare_at_price | money }}</em>
</p>
{% else %}
<p class="coll-prod-price accent-text">
{% if product.price_varies %}From{% endif %}
{{ sca_price | money }}
</p>
{% endif %}
</div>
```





