# Range Slider

- http://ionden.com/a/plugins/ion.rangeSlider/index.html
  http://ionden.com/a/plugins/ion.rangeSlider/start.html

## Html Markup

```html

<div class="range-slider">
    <input type="text" class="js-range-slider" value="" />
</div>
<div class="extra-controls">
    <input type="text" class="js-input" value="0" />
</div>

```

## Scss

```scss

 .showcase__mark {
  display: block;
  position: absolute;
  top: 45px;
  background: #f00;
  transform: rotate(-45deg);
  padding: 1px 3px;
  border-radius: 3px;
  color: #fff;
  margin-left: -10px;
}

.range-slider {
  position: relative;
  height: 80px;
}

```

## Js Code

```js

var $range = $(".js-range-slider"),
    $input = $(".js-input"),
    instance,
    min = 0,
    max = 1000;

$range.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min,
    max: max,
    from: 500,
    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
    }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});

```
