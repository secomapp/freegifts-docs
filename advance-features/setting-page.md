# Features in Setting page

### 1. Using DraftOder API

![](../.gitbook/assets/image%20%2814%29.png)

Basically, our Free Gifts works by cloning a variant from the original product to be the gift then send it to your customer. When this feature is enabled, the app will use Shopify’s Draft-order API instead of cloning variant. After that, the app will be able to work properly with Oberlo or other Inventory Management apps. 

However, this feature’s limit is that only 2 orders are supported per second \(Please contact us at support@secomapp.com if you need more\) 

### 2. Synchronize products

![](../.gitbook/assets/image%20%2816%29.png)

All cloned variants won’t be tracked inventory. You can enable this feature to track the inventory of the gifts items by 3 options: 

* **Do not track inventory**: Decrease the inventory of original products once customer receives gifts
* **Stop the offer and Notify customers when the gift is out of stock**: This option will synchronize the inventory of gift variant with original products then Stop the offer & Notify customers when the gift is out of stock
* **Store owner will manually input clone gift variant inventory**: After creating an offer, please go to each cloned gift items on Products page to input inventory for them

### 3. Gift item’s price condition & Gift’s price discount based

![](../.gitbook/assets/image%20%2817%29.png)

For the _**Gift item's price condition**_ we have 2 options for comparing the minimun price of products \(not gift item\) customer added with the original product's price of gift item. e.g: The minimum of all products added is **$47**. The prices of original product \(used for cloning gift item\) are: _compare\_at\_price_ \(**$50**\) and current _price_ \(**$45**\)

* If none of those options is enabled so the gift will be added if offer rule satisfied.
* If you enabled "_Gift item's price should be less or equal to the product's price customer added_" only then the gift item will not be added because original's price of gift item is **$50**
* If you enabled both "_Gift item's price should be less or equal to the product's price customer added_" and "_Use current price of the selected product as the gift for checking above condition \(default using compare\_at\_price value\)_" so the gift will be added because of the original's price of gift item used to compare is **$45**

### 4. How the price of Gift item is calculated

If the gift of your offer is not free, the price of cloned item is calculated based on the discount value \(which you insert in the Discount percentage of Gift Items\) and the compare\_at\_price of original product. After this feature enabled, the price of the cloned items is calculated base on the price of original products. 

![](../.gitbook/assets/image%20%2815%29.png)

### 5. Free Gift icon

![](../.gitbook/assets/image%20%2833%29.png)

This feature will show a Free Gift icon on the right corner of the products that customers need to buy to receive gifts. By default, this feature is turned on and the Free Gift icons appear on collection pages.  

### 6. Show Gift items by Product only

![](../.gitbook/assets/image%20%2826%29.png)

By default, the gifts will appear as variants. For example, when you select a shirt with the variants as sizes to be the gift. All the variants will appear as size S, size M, etc for the customer to choose from. 

After enabling this feature, the gifts will appear as products only, which means a shirt with variants size will appear as only a shirt, with a box for the customer to choose his/her size. 

![](../.gitbook/assets/image%20%2840%29.png)

### 7. Manual select products and Ignore selected products

![](../.gitbook/assets/image%20%2820%29.png)

These two features will show more advanced features while creating offers

#### 7.1. Manual select products:

This feature enables you to select the products the customer should buy to get gifts \(Offer on Catalog\) by SKU/Title \(product’s name\)/ Variant’s name. Or even select by inputting product/variant’s ID manually. After enabling this feature, a new box inside Offer on Catalog will appear: 

![](../.gitbook/assets/image%20%2836%29.png)

#### 7.2. Ignore selected products

After enabling this feature, you will select the products that customer buy but not get the gifts instead of the products customers buy to get gift. 

For example, when you have a large number of products that customers buy will get gift. Instead of selecting large number of products, you can turn this feature on to select only the products that do not include the gifts. Then all the other products will be the products customers buy to get gifts. 

### 8. Product page, Free Gift popup, and Promotional message

These are the information of the gift products  
By default, all of them are turned on. You can turn it off based on your need. 

### 9. Auto add gifts to cart

![](../.gitbook/assets/image%20%2831%29.png)

Normally, our app will automatically add gifts to customers’ cart if they meet all the conditions of the offer. However, you can turn it off in the Settings 

### 10. One time pick

![](../.gitbook/assets/image%20%2828%29.png)

This feature will limit customer to choose 1 variant for only 1 time. If they meet the conditions of other offers that have the same gifts, they cannot select it anymore. 11. Exclude added product

### 11. Exclude added product

![](../.gitbook/assets/image%20%2819%29.png)

This feature will hide the gift product if customer has the same product with it in their cart. 

### 13. Stop lower priority rule effective

![](../.gitbook/assets/image%20%2821%29.png)

Bình thường thì tính năng "stop lower priority rule" \(dừng kiểm tra các offer có giá trị ưu tiên thấp hơn nếu offer hiện tại đã thoả mãn\) chỉ có tác dụng hoạt động riêng biệt trong mục Category offer hoặc Cart offer. Khi bật tính năng này lên thì giá trị priorty sẽ được so sánh mà không quan tâm loại offer đó là gì.

### 14. Formating the SKU/Barcode name of gift items

![](../.gitbook/assets/image%20%2822%29.png)

Thông thường sản phẩm gift sẽ có thông tin SKU/barcode giống hệt với sản phẩm gốc, tuy nhiên nếu bạn sử dụng một số hệ thống quản lý inventory cũng như fullfilment bên thứ 3. Các ứng dụng đó có thể không cho phép bạn đặt các variant có cùng giá trị SKU/barcode. Trong trường hợp này chúng ta sẽ cần phải đổi lại cách đặt tên cho các sản phẩm gift đó: _**\[original's SKU/Barcode\]\_\(xx%off\)**_ hoặc thậm trí là bỏ trống.

### 15. Remove duplicated variants

![](../.gitbook/assets/image%20%2837%29.png)

Sau khi chiến dịch promotion của bạn hoàn tất, nếu bạn không xoá các offer đi thì theo mặc định các cloned gift vẫn tồn tại bên trong các sản phẩm gốc \(mà bạn đã lựa chọn làm gift\). Việc này có thể xuất hiện một số rủi ro bị hack các sản phẩm gift nếu khách hàng của bạn là một người rất am hiểu về Shopify API. Sau khi bật tính năng này lên, bạn có thể xoá toàn bộ các cloned gift bằng cách de-active các offer của bạn cũng như giữ lại thông tin các offers đó để dễ dàng sử dụng lại cho các chiến dịch promotion sau.

### 16.  Thay đổi lại nội dung text hiển thị của ứng dụng

![](../.gitbook/assets/image%20%2838%29.png)

Các mục này giúp bạn có thể thay đổi nội dung text hiển thị tới khách hàng sao cho phù hợp với ngữ cảnh bạn mong muốn.

### 17. Thay đổi freegift icon, kích thước hiển thị icon và ảnh của gifts slider box

![](../.gitbook/assets/image%20%2827%29.png)

Phần này cho phép bạn có thể tự tải lên hình ảnh icon hiển thị theo ý muốn, cấu hình lại kích thước ảnh cũng như chủ động cấu hình toàn bộ thuộc tính liên quan tới quá trình hiển thị gift slider box. Các tuỳ chọn đó bạn có thể tham khảo thêm về thư viện Owl-Carousel [tại đây](http://www.landmarkmlp.com/js-plugin/owl.carousel/).



