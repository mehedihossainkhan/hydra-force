# Scroll Up

- google

## Html Markup

```html

<!-- back to top start -->
<div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
    </svg>
</div>
<!-- back to top end -->

```

## Scss

```scss

.progress-wrap {
  position: fixed;
  right: 50px;
  bottom: 50px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(95, 58, 252, 0.2);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;

  &.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:after {
    position: absolute;
    content: '\f176';
    font-family: $icon-font;
    text-align: center;
    line-height: 46px;
    font-size: 20px;
    color: $theme-color;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 1;
    @include transition(0.3s);
  }

  svg.progress-circle {
    path {
      fill: none;
      stroke: $theme-color;
      stroke-width: 4;
      box-sizing: border-box;
      @include transition(0.3s);
    }
  }
}

```

## Js Code

```js

	/*------------------------------------
		Scroll Up
	--------------------------------------*/
    if ($('.progress-wrap').length > 0) {
        let path = $(".progress-wrap path").get(0);
        let pathLen = path.getTotalLength();
        path.style.transition = path.style.WebkitTransition = "none", path.style.strokeDasharray = pathLen + " " + pathLen, path.style.strokeDashoffset = pathLen, path.getBoundingClientRect(), path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        let offset = function () {
            let offset, r, adjustedLen;
            offset = $(window).scrollTop();
            r = $(document).height() - $(window).height();
            adjustedLen = pathLen - offset * pathLen / r;
            path.style.strokeDashoffset = adjustedLen
        };
        offset();
        $(window).scroll(offset);

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 50) {
                $(".progress-wrap").addClass("active-progress")
            } else {
                $(".progress-wrap").removeClass("active-progress")
            }
        });

        $(".progress-wrap").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    }
```
