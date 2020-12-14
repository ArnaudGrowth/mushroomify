function mushroomify() {
	// remplace each image with random fungi picture
	document.querySelectorAll("img").forEach(element => {
		element.src = `https://source.unsplash.com/featured/?mushroom/${element.width}x${element.height}?${Math.random()}`;
		element.srcset = element.src;
	})
}

chrome.runtime.onMessage.addListener(
	// event listener for button click and lanch mushroomify function (above)
	function(request, sender, sendResponse) {
		if (request.action ==="mushroomifyIt") mushroomify();
	}
);