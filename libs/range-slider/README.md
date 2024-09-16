# Range Slider

- google

## Html Markup

```html

<!-- back to top start -->
<div class="data-range-slider">
  <div data-range-slider data-max="500" data-min-value="0" data-max-value="400"></div>
  <div class="output-min-value"></div>
  <div class="output-max-value"></div>
</div>

<div class="data-range-slider">
  <div data-range-slider data-min="0" data-max="200" data-min-value="0" data-max-value="200"></div>
  <div class="output-min-value"></div>
  <div class="output-max-value"></div>
</div>
<!-- back to top end -->

```

## Scss

```scss

// single slide
.data-range-slider {
  margin-bottom: 15px;

  .ui-slider {
    height: 4px;
    border-radius: 27px;
    background: $theme-color;
    border: 0;
    cursor: pointer;

    .ui-slider-range {
      background: #E4E4ED;
      border-radius: 27px;
    }

    .ui-slider-handle {
      width: 17px;
      height: 17px;
      background: #fff;
      border: 5px solid $theme-color;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .output-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.62);
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
  }
}

// range slide
.data-range-slider{
  margin-bottom: 15px;
  .ui-slider{
    height: 4px;
    border-radius: 27px;
    background: #E4E4ED;
    border: 0;
    cursor: pointer;
    .ui-slider-range{
      background: $theme-color;
      border-radius: 27px;
    }
    .ui-slider-handle{
      width: 17px;
      height: 17px;
      background: #fff;
      border: 5px solid $theme-color;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  .output-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.62);
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
  }
}

```

## Js Code

```js

/*------------------------------------
  Range Slider
--------------------------------------*/

// single slide
$('.data-range-slider [data-range-slider]').each(function () {
  var $this = $(this);
  var $parent = $this.closest('.data-range-slider');
  var minValue = parseFloat($this.data('min-value'));
  var maxValue = parseFloat($this.data('max-value'));

  var $outputMin = $parent.find('.output-min-value');
  var $outputMax = $parent.find('.output-max-value');

  $outputMin.text(minValue);
  $outputMax.text(maxValue);

  $this.slider({
    range: 'max',
    min: minValue,
    max: parseFloat($this.data('max')),
    value: maxValue,
    slide: function (event, ui) {
        $outputMax.text(ui.value);
    }
  });
});


// multiple slide
$('.data-range-slider [data-range-slider]').each(function() {
  var $this = $(this);
  var $parent = $this.closest('.data-range-slider');
  var minValue = parseFloat($this.data('min-value'));
  var maxValue = parseFloat($this.data('max-value'));
  var $outputMin = $parent.find('.output-min-value');
  var $outputMax = $parent.find('.output-max-value');

  $outputMin.text(minValue);
  $outputMax.text(maxValue);

  $this.slider({
    range: true,
    min: 0,
    max: parseFloat($this.data('max')),
    values: [minValue, maxValue],
    slide: function(event, ui) {
      $outputMin.text(ui.values[0]);
      $outputMax.text(ui.values[1]);
    }
  });
});
```
