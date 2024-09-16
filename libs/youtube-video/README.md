# youtube video play


## Html Markup

```html
	<div class="row mt-100">
		<div class="col-6">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/f2Gzr8sAGB8"
				title="YouTube video player" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen></iframe>
		</div>
		<div class="col-6">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/W-wLZHrhy7Y"
				title="YouTube video player" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen></iframe>
		</div>
	</div>
```

## Js Code

```js

let players = [];

function playerStateChanged(event, index) {
	if (event.data === YT.PlayerState.PLAYING) {
		players.forEach((player, i) => (index != i ? player.pauseVideo() : null));
	}
}

function onYouTubeIframeAPIReady() {
	const youtubeFrames = document.querySelectorAll("iframe[src*=youtube]");
	youtubeFrames.forEach((f) => {
		const url = new URL(f.src);

		if (url.searchParams.get("enablejsapi") !== "1") {
			url.searchParams.append("enablejsapi", "1");
			f.src = url.toString();
		}
	});
	players = Array.from(youtubeFrames).map(
		(f, i) =>
			new YT.Player(f, {
				events: {
					onStateChange: (event) => playerStateChanged(event, i),
				},
			})
	);
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


```
