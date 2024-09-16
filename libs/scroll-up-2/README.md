# Scroll Up

- google

## Html Markup

```html

<!-- back to top start -->
<div id="scrollUp"><i class="far fa-level-up-alt"></i></div>
<!-- back to top end -->

```

## Scss

```scss

#scrollUp {
	position: fixed;
	bottom: 30px;
	right: 30px;
	background: $theme-color;
	height: 40px;
	width: 40px;
	text-align: center;
	line-height: 38px;
	color: #fff;
	font-size: 16px;
	border: 0;
	border-radius: 4px;
	font-weight: 700;
	opacity: 0.6;

	&:hover {
		opacity: 1;
	}
}

#scrollUp:hover {
  background: $theme-color;
}

```

## Js Code

```js

	/*------------------------------------
		Scroll Up
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
	});
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
```
