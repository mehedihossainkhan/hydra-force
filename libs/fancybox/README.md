# Aos Animate on scroll

- https://fancyapps.com/fancybox/

## Documentation

- https://fancyapps.com/fancybox/getting-started/

## Html Markup

```html

<button data-fancybox data-src="#dialog-content" id="triggger">Launch Dialog</button>

<a href="https://www.youtube.com/watch?v=tHnwV5ay8-8" data-fancybox="video-gallery">
    <img alt="" width="200" src="http://i3.ytimg.com/vi/tHnwV5ay8-8/hqdefault.jpg">
</a>
<a href="https://www.youtube.com/watch?v=QLQ3sLSrfwI" data-fancybox="video-gallery">
    <img alt="" width="200" src="http://i3.ytimg.com/vi/QLQ3sLSrfwI/hqdefault.jpg">
</a>
<a href="https://www.youtube.com/watch?v=UFHscDioNWQ" data-fancybox="video-gallery">
    <img alt="" width="200" src="http://i3.ytimg.com/vi/UFHscDioNWQ/hqdefault.jpg">
</a>


<div id="dialog-content" style="display:none;max-width:500px;">
    <h2>Hello, world!</h2>
    <p>
        <input type="text" value=""/>
    </p>
    <p>
        Try hitting the tab key and notice how the focus stays within the dialog
        itself.
    </p>
    <p>
        To close dialog hit the esc button, click on the overlay or just click the
        close button.
    </p>
    <p>
        Element used to launch the modal would receive focus back after closing.
    </p>

    <button data-fancybox data-src="#dialog-content-2" id="triggger-2">Launch Dialog</button>
</div>

<div id="dialog-content-2" style="display:none;max-width:500px;">
    <h2>Hello, world!</h2>
    <p>
        <input type="text" value=""/>
    </p>
    <p>
        Try hitting the tab key and notice how the focus stays within the dialog
        itself.
    </p>
    <p>
        To close dialog hit the esc button, click on the overlay or just click the
        close button.
    </p>
    <p>
        Element used to launch the modal would receive focus back after closing.
    </p>
</div>
```

## Js Code

```js

document.getElementById("triggger").addEventListener("click", () => {
    Fancybox.show([{src: "#dialog-content", type: "inline"}]);
});
document.getElementById("triggger-2").addEventListener("click", () => {
    Fancybox.show([{src: "#dialog-content-2", type: "inline"}]);
});

Fancybox.bind('[data-fancybox]', {
    Html: {
        youtube: {
            controls: 0,
            rel: 0,
            fs: 0
        }
    }
});

```
