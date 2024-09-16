# Background Video Html5

## Html Markup

```html
	<video class="top-video" id="my-video" autoplay loop muted>
		<source src="video-main.mp4" type="video/mp4">
	</video>

	<!-- This code will work on ios also perfectly ! --> 
	<video class="top-video" id="my-video" autoplay loop muted playsinline>
			<source src="hero-video.mp4" type="video/mp4">
	</video>
```

## Js Code

```js

const myVideo = document.getElementById('my-video');

// Not all browsers return promise from .play().
const playPromise = myVideo.play() || Promise.reject('');

playPromise.then(() => {
	// Video could be autoplayed, do nothing.
	}).catch(err => {
	// Video couldn't be autoplayed because of autoplay policy. Mute it and play.
	myVideo.muted = true;
	myVideo.play();
});

```
