# Cursor Move

## Html Markup

```html
<div class="mouse-cursor cursor-outer"></div>
<div class="mouse-cursor cursor-inner"></div>
```

## Css Code

```css
.mouse-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  visibility: hidden;
}

.cursor-inner {
  margin-left: -3px;
  margin-top: -3px;
  width: 6px;
  height: 6px;
  z-index: 10000001;
  background-color: #222;
  -webkit-transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.cursor-inner.cursor-hover {
  margin-left: -40px;
  margin-top: -40px;
  width: 80px;
  height: 80px;
  background-color: #222;
  opacity: 0.3;
}
.cursor-outer {
  margin-left: -15px;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  border: 2px solid #222;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 10000000;
  opacity: 0.5;
  -webkit-transition: all 0.08s ease-out;
  transition: all 0.08s ease-out;
}

.cursor-outer.cursor-hover {
  opacity: 0;
}

[data-magic-cursor="hide"] .mouse-cursor {
  display: none;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1111;
}
```

## Js Code

```js
function mouse_cursor() {
	let myCursor = jQuery('.mouse-cursor');
	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0, o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, button, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, button, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
}

mouse_cursor();
```
