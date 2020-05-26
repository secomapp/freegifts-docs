window.freegifts_product_json = window.freegifts_product_json?window.freegifts_product_json:function(product){
    if(product){
        if (!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
        }
        if(!String.prototype.endsWith) {
            Object.defineProperty(String.prototype, 'endsWith', {
                value: function(searchString, position) {
                    var subjectString = this.toString();
                    if (position === undefined || position > subjectString.length) {
                        position = subjectString.length;
                    }
                    position -= searchString.length;
                    var lastIndex = subjectString.indexOf(searchString, position);
                    return lastIndex !== -1 && lastIndex === position;
                }
            });
        }

        if(product.options && Array.isArray(product.options)) {
            for (var i = 0; i < product.options.length; i++) {
                if (typeof product.options[i] !== 'undefined' && typeof product.options[i].values !== 'undefined') {
                    var option = product.options[i];
                    if(option.values && Array.isArray(option.values))
                        for (var r = 0; r < option.values.length; r++) (option.values[r].endsWith("(Freegifts)") || option.values[r].endsWith("% off)")) && (option.values.splice(r, 1), r--)
                }
            }
        }

        var sca_price = product.price;
        var sca_price_min = product.price_max;
        var sca_price_max = product.price_min;
        var sca_compare_at_price = product.compare_at_price;
        var sca_compare_at_price_min = product.compare_at_price_max;
        var sca_compare_at_price_max = product.compare_at_price_min;

        if(product.variants && Array.isArray(product.variants)) {
            for (var id = 0; id < product.variants.length; id++) {
                var variant = product.variants[id];
                var option_name = variant.option3 ? variant.option3 : variant.option2 ? variant.option2 : variant.option1;
                if (("undefined" != typeof SECOMAPP && "undefined" != typeof SECOMAPP.gifts_list_avai && "undefined" != typeof SECOMAPP.gifts_list_avai[variant.id])
                    || option_name.endsWith("(Freegifts)")
                    || option_name.endsWith("% off)")) {
                    product.variants.splice(id, 1);
                    id = id - 1;
                } else {
                    if (sca_price_min >= variant.price) {
                        sca_price_min = variant.price;
                        sca_price = variant.price;
                    }
                    if (sca_price_max <= variant.price) {
                        sca_price_max = variant.price;
                    }
                    if (variant.compare_at_price) {
                        if (sca_compare_at_price_min >= variant.compare_at_price) {
                            sca_compare_at_price_min = variant.compare_at_price;
                            sca_compare_at_price = variant.compare_at_price;
                        }
                        if (sca_compare_at_price_max <= variant.compare_at_price) {
                            sca_compare_at_price_max = variant.compare_at_price;
                        }
                    }
                    if (variant.available == true) {
                        product.available = true;
                    }
                }
            }
        }
        product.price = sca_price;
        product.price_max = sca_price_max;
        product.price_min = sca_price_min;
        product.compare_at_price = sca_compare_at_price;
        product.compare_at_price_max = sca_compare_at_price_max;
        product.compare_at_price_min = sca_compare_at_price_min;
        if(sca_price_min < sca_price_max){
            product.price_varies = true;
        }else{
            product.price_varies = false;
        }
        if(sca_compare_at_price_min < sca_compare_at_price_max){
            product.compare_at_price_varies = true;
        }else{
            product.compare_at_price_varies = false;
        }
    }
    return product;
};
