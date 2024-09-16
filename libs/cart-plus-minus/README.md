# Cart Plus Minus

## Html Markup

```html
<!-- circle-progress start -->
<div class="cart-plus-minus">
    <input type="text" class="input-text qty text" step="1" min="0" />
</div>
<!-- circle-progress end -->
```

## Js Code

```js
if (jQuery(".cart-plus-minus").length > 0) {
        $(".cart-plus-minus").each(function () {
            var $container = $(this);
            var $qty = $container.find(".qty");

            $container.append(
                '<div class="qtybutton minus"><i class="fa-solid fa-minus"></i></div><div class="qtybutton plus"><i class="fa-solid fa-plus"></i></div>'
            );

            $container.on("click", ".qtybutton.plus, .qtybutton.minus", function () {
                // Get current quantity values
                let val = parseFloat($qty.val()) || 0;
                let max = parseFloat($qty.attr("max")) || Infinity;
                let min = parseFloat($qty.attr("min")) || 0;
                let step = parseFloat($qty.attr("step")) || 1;

                // Ensure the values are valid numbers
                if (!isNaN(val) && !isNaN(max) && !isNaN(min) && !isNaN(step)) {
                    // Change the value if plus or minus
                    if ($(this).is(".plus")) {
                        if (val < max) {
                            $qty.val(val + step).trigger("change");
                        }
                    } else {
                        if (val > min) {
                            $qty.val(val - step).trigger("change");
                        }
                    }
                }
            });
        });
    }
```
