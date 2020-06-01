# Features in Setting page

### 1. Using DraftOder API

![](../.gitbook/assets/image%20%2814%29.png)

Enable this feature if you want our application working seamlessly with Oberlo or other Inventory Management application. The cloned variants will not be used, we using Shopify's Draft-order API for applying promotion to customers. The limited of this feature is the low rate 2 orders/second, please contact us if you need more.

### 2. Synchronize products

![](../.gitbook/assets/image%20%2816%29.png)

All gift items cloned by our application will not be track inventory by default. If you need to synchronize inventory between the clone gift item and the orginal variant, please enable this feature then select the way of our application action with iventory of orignal product.

* Stop the offfer and Notify customer when the gift is out of stock
* Do not track inventory: Just decrease inventory of origianl product whenever orders have any cloned gift variants.
* Store owner will manually input cloned gift variant inventory: After created an offers, please go to each cloned gift item then input inventory for them.

### 3. What is the original price of Gift item is used for comparing

![](../.gitbook/assets/image%20%2817%29.png)

For the _**Gift item's price condition**_ we have 2 options for comparing the minimun price of products \(not gift item\) customer added with the original product's price of gift item. e.g: The minimum of all products added is **$47**. The prices of original product \(used for cloning gift item\) are: _compare\_at\_price_ \(**$50**\) and current _price_ \(**$45**\)

* If none of those option is enabled so the gift will be added if offer rule satisfied.
* If you enabled "_Gift item's price should be less or equal to the product's price customer added_" only then the gift item will not be added because original's price of gift item is **$50**
* If you enabled both "_Gift item's price should be less or equal to the product's price customer added_" and "_Use current price of the selected product as the gift for checking above condition \(default using compare\_at\_price value\)_" so the gift will be added because of the original's price of gift item used to compare is **$45**

### 4. How the price of Gift item is calculated

If your offer is not to give a free gift, we will calculate the price of cloned item base on discount value and the compare\_at\_price of original product. If you want we calculate base on the current price of original product, please enable this feature:

![](../.gitbook/assets/image%20%2815%29.png)

### 5. Motivate customer buy more with a Free gift icon

![](../.gitbook/assets/image%20%2833%29.png)

Tính năng này cũng cho phép khách hàng có thể dễ dàng nhận diện sản phẩm cần mua để có thể nhận được sản phẩm gift \(Catalog offers\). Theo mặc định tính năng này đã được bật và sẽ hoạt động trên các trang collection, nếu bạn không nhìn thấy icon hay kiểm tra lại bước cài đặt [6. Showing Gift info on Collection page](../showing-gifts-info-on-catalog-page.md)

### 6. Hiển thị box quà tặng dưới dạng từng sản phẩm

![](../.gitbook/assets/image%20%2826%29.png)

Theo mặc định, các sản phẩm gift sẽ được hiển thị theo variant, khách hàng chỉ cần 1-click để lựa chọn quà tặng mình mong muốn. Tuy nhiên, khi bạn có một danh sách các quà tặng quá dài, bạn có thể sẽ cần đến cách hiển thị hộp quà tặng đó theo từng sản phẩm một. Khách hàng cần lựa chọn các options của sản phẩm đó trước khi thêm vào giỏ hàng. Hãy xem ví dụ minh hoạ dưới đây:

![](../.gitbook/assets/image%20%2840%29.png)

### 7. Show properties need to fill of gift product

![](../.gitbook/assets/image%20%2823%29.png)

Trong một vài trường hợp, các sản phẩm gift cần được nhập các thông tin bổ xung trước khi được thêm vào giỏ hàng, để làm được điều này bạn sẽ cần cấu hình template cho các field cần thêm cũng như lựa chọn sản phẩm gift nào sẽ hiển thị các mục nhập đó. Để thực hiện quá trình này, bạn có thể tìm hiểu thêm [tại đây](how-to-let-customer-input-property-fields-before-adding-gift-to-cart..md).

### 8. Showing more advance feature while creating offers

![](../.gitbook/assets/image%20%2820%29.png)

* _**Manual select products:**_ For the Catalog offers, sometime you need select products customers should buy by SKU, product's name, variant's name or even input product/variant's ID manually. In this case, you can enable this feature then the in Catalog offer rule UI will appear new box for you doing those tasks:

![](../.gitbook/assets/image%20%2836%29.png)

* _**Ignore selected products**_**:** Đối với store có rất nhiều sản phẩm, đôi khi việc giới hạn một số sản phẩm dù khách hàng có mua cũng không được tính để hưởng quà tặng là rất khó khăn. Tính năng này sẽ giúp bạn chỉ việc lựa chọn danh sách một vài sản phẩm muốn loại trừ thay vì phải lựa chọn hàng trăm/nghìn sản phẩm khác nhau.

### 9. Tắt bật một số thông tin về sản phẩm gift

![](../.gitbook/assets/image%20%2839%29.png)

Mặc định các tính năng này được bật, tuy nhiên tuỳ theo nhu cầu sử dụng, bạn cũng có thể ẩn các mục này đi nếu cần thiết.

### 10. Auto add gifts to cart

![](../.gitbook/assets/image%20%2831%29.png)

Thông thường ứng dụng của chúng tôi sẽ tự động thêm sản phẩm quà tặng mà khách hàng đã thoả mãn các yêu cầu của offers vào giỏ hàng. Tuy nhiên có một vài trường hợp như sản phẩm quà tặng cần nhập thêm các thuộc tính, các offers sử dụng tính năng priority và có trùng lặp nhau về sản phẩm quà tặng... Bạn có thể tắt tính năng này đi trong trang Setting của ứng dụng.

### 11. One time pick

![](../.gitbook/assets/image%20%2828%29.png)

Tính năng này cho phép bạn giới hạn khách hàng chỉ được phép chọn 1 variant trong 1 sản phẩm quà tặng. Khi khách hàng đã chọn quà tặng đó, nếu offer khác cũng thoả mãn và cũng có cùng 1 quà tặng đó thì hộp quà tặng sẽ không hiển thị để khách hàng có thể lựa chọn được thêm một lần nữa.

### 12. Exclude added product

![](../.gitbook/assets/image%20%2819%29.png)

Tính năng này cho phép bạn có thể ẩn các sản phẩm gift trùng lặp với các sản phẩm gốc mà khách hàng đã thêm vào giỏ hàng.

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



