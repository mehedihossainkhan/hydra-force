# VenoBox 2 Popup

- https://github.com/nicolafranchini/VenoBox

## Documentation

- https://veno.es/venobox/

## Html Markup

```html
	<a class="my-image-links" data-gall="gallery01" href="image01-big.jpg">
		<img src="image01-small.jpg">
	</a>
	<a class="my-image-links" data-gall="gallery01" href="image02-big.jpg">
		<img src="image02-small.jpg">
	</a>

	<a class="my-video-links" data-autoplay="true" data-vbtype="video" href="http://vimeo.com/xxx">Vimeo</a>
	<a class="my-video-links" data-autoplay="true" data-vbtype="video" href="http://youtu.be/xxx">Youtube</a>
	<a class="my-video-links" data-autoplay="true" data-vbtype="video" data-ratio="1x1" data-maxwidth="400px" href="my-video.mp4">MP4</a>
```

## Js Code

```js

if (jQuery(".my-image-links").length > 0) {
	new VenoBox({
		selector: '.my-image-links',
		numeration: true,
		infinigall: true,
		share: true,
		spinner: 'rotating-plane'
	});
}

```
