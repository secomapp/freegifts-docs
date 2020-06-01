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

![](../.gitbook/assets/image%20%2821%29.png)

Tính năng này cũng cho phép khách hàng có thể dễ dàng nhận diện sản phẩm cần mua để có thể nhận được sản phẩm gift \(Catalog offers\). Theo mặc định tính năng này đã được bật và sẽ hoạt động trên các trang collection, nếu bạn không nhìn thấy icon hay kiểm tra lại bước cài đặt [6. Showing Gift info on Collection page](../showing-gifts-info-on-catalog-page.md)

### 6. Hiển thị box quà tặng dưới dạng từng sản phẩm

![](../.gitbook/assets/image%20%2820%29.png)

Theo mặc định, các sản phẩm gift sẽ được hiển thị theo variant, khách hàng chỉ cần 1-click để lựa chọn quà tặng mình mong muốn. Tuy nhiên, khi bạn có một danh sách các quà tặng quá dài, bạn có thể sẽ cần đến cách hiển thị hộp quà tặng đó theo từng sản phẩm một. Khách hàng cần lựa chọn các options của sản phẩm đó trước khi thêm vào giỏ hàng. Hãy xem ví dụ minh hoạ dưới đây:

![](../.gitbook/assets/image%20%2823%29.png)

### 7. Show properties need to fill of gift product

![](../.gitbook/assets/image%20%2818%29.png)

Trong một vài trường hợp, các sản phẩm gift cần được nhập các thông tin bổ xung trước khi được thêm vào giỏ hàng, để làm được điều này bạn sẽ cần cấu hình template cho các field cần thêm cũng như lựa chọn sản phẩm gift nào sẽ hiển thị các mục nhập đó. Để thực hiện quá trình này, bạn có thể tìm hiểu thêm trong mục 









