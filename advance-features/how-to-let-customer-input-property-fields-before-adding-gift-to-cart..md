# How to let customer input property fields before adding gift to cart.

​For using this feature, you need to customize the product template for showing with a gift item.

* Create a new file: **template/product.sca.freegifts.properties.liquid** Modify content of this look like bellow, please remember to define the class name of the input box is "**sca\_gift\_properties**" and "**datafield**" value for this field.

```elixir
{% layout none %}
{% comment %}
    This is the sample file only, please update it for your needs
{% endcomment %}
{% for t in product.tags %}
    {% if t contains 'deposit_attributes' %}
        <div class="custom-products-atributes-wrapper">
            <div class="line-item-property__field required" style="width: 100%;">
                <label for="company-name">Company Name <span style="color: #FF4136;">*</span></label>
                <input class="sca_gift_properties" type="text" name="properties[Company Name]" datafield="Company Name">
            </div>
            <div class="line-item-property__field required">
                <label for="address-1">Address 1 <span style="color: #FF4136;">*</span></label>
                <input class="sca_gift_properties" type="text" name="properties[Address 1]" datafield="Address 1">
            </div>
            <div class="line-item-property__field">
                <label for="address-2">Address 2</label>
                <input class="sca_gift_properties" type="text" name="properties[Address 2]" datafield="Address 2">
            </div>
            <div class="line-item-property__field">
                <label for="city-state">City, State Zip</label>
                <input class="sca_gift_properties" type="text" name="properties[City, State Zip]"
                       datafield="City, State Zip">
            </div>
            <div class="line-item-property__field">
                <label for="bank-name">Bank Name</label>
                <input class="sca_gift_properties" type="text" name="properties[Bank Name]" datafield="Bank Name">
            </div>
            <div class="line-item-property__field required">
                <label for="routing-number">Routing Number <span style="color: #FF4136;">*</span></label>
                <input class="number-field sca_gift_properties" type="text" name="properties[_Routing Number]"
                       datafield="_Routing Number">
            </div>
            <div class="line-item-property__field required">
                <label for="bank-account-number">Account Number <span style="color: #FF4136;">*</span></label>
                <input class="number-field sca_gift_properties" type="text" name="properties[_Account Number]"
                       datafield="_Account Number">
            </div>
            <div class="line-item-property__checkbox required">
                <input type="checkbox" name="bank-validation" value="Bank Validation">
                <label for="bank-validation">Confirm that you have entered your deposit ticket routing number and <span
                            style="color: #FF4136;">NOT</span> your check routing number</label>
            </div>
            <div class="line-item-property__checkbox required">
                <input type="checkbox" name="address-validation" value="Address Validation">
                <label for="address-validation">Confirm that all of the information regarding your bank account and
                    address are accurate.</label>
            </div>
        </div>

    {% endif %}

    {% if t contains '5linestamp_attribtues' %}

        <div class="custom-products-atributes-wrapper">
            <div class="line-item-property__field">
                <label for="bank-name">Bank Name</label>
                <input class="sca_gift_properties" type="text" name="properties[Bank Name]" datafield="Bank Name">
            </div>
            <div class="line-item-property__field">
                <label for="company-name">Company Name/Store Number</label>
                <input class="sca_gift_properties" type="text" name="properties[Company Name/Store Number]"
                       datafield="Company Name/Store Number">
            </div>
            <div class="line-item-property__field">
                <label for="account-number">Account Number</label>
                <input class="number-field sca_gift_properties" type="text" name="properties[_Account Number]"
                       datafield="_Account Number">
            </div>
            <div class="line-item-property__checkbox required">
                <input type="checkbox" name="address-validation" value="Address Validation">
                <label for="address-validation">Confirm that all of the information regarding your bank account and
                    address are accurate.</label>
            </div>
        </div>

    {% endif %}

    {% if t contains '6linestamp_attribtues' %}

        <div class="custom-products-atributes-wrapper">
            <div class="line-item-property__field">
                <label for="bank-name">Bank Name</label>
                <input class="sca_gift_properties" type="text" name="properties[Bank Name]" datafield="Bank Name">
            </div>
            <div class="line-item-property__field">
                <label for="routing-number">Routing Number</label>
                <input class="sca_gift_properties" type="text" name="properties[_Routing Number]"
                       datafield="_Routing Number">
            </div>
            <div class="line-item-property__field">
                <label for="company-name">Company Name/Store Number</label>
                <input class="sca_gift_properties" type="text" name="properties[Company Name/Store Number]"
                       datafield="Company Name/Store Number">
            </div>
            <div class="line-item-property__field">
                <label for="account-number">Account Number</label>
                <input class="number-field sca_gift_properties" type="text" name="properties[_Account Number]"
                       datafield="_Account Number">
            </div>
            <div class="line-item-property__checkbox required">
                <input type="checkbox" name="address-validation" value="Address Validation">
                <label for="address-validation">Confirm that all of the information regarding your bank account and
                    address are accurate.</label>
            </div>
        </div>

    {% endif %}
{% endfor %}
```

* After that, you can enable feature inside Setting page of our app.

![](../.gitbook/assets/image%20%2841%29.png)

Whenever a gift item is satisfied condition inside "**product.sca.freegifts.properties.liquid**" file, the property field box will automatically show while customers move a mouse point over gift item.

