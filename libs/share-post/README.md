# Share Post

## Html Markup

```html
<a href="https://www.facebook.com" data-share-facebook="true">Facebook</a>
<a href="https://www.linkedin.com" data-share-linkedin="true">Linkedin</a>
<a href="https://www.twitter.com" data-share-twitter="true">Twitter</a>
<a href="https://www.wa.me" data-share-whatsapp="true">Whatsapp</a>
```

## Js Code

```js
$(document).ready(function () {
    let title = document.title;
    let url = window.location.href;
    $("[data-share-facebook").attr(
        "href",
        "https://www.facebook.com/sharer/sharer.php?u=" +
            url +
            "%2F&title=" +
            title +
            "%3F"
    );
    $("[data-share-facebook").attr("target", "_blank");

    $("[data-share-twitter").attr(
        "href",
        "https://twitter.com/share?url=" +
            url +
            "%2F&title=" +
            title +
            "&summary="
    );
    $("[data-share-twitter").attr("target", "_blank");

    $("[data-share-linkedin").attr(
        "href",
        "https://www.linkedin.com/shareArticle?mini=true&url=" +
            url +
            "%2F&title=" +
            title +
            "&summary="
    );
    $("[data-share-linkedin").attr("target", "_blank");

    $("[data-share-whatsapp").attr("href", "https://wa.me/?text=" + url);
    $("[data-share-whatsapp").attr("target", "_blank");
});
```
