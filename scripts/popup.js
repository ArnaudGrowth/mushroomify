function sendMushroomifyMsg() {
  // Sends message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	// identifies active tab
    chrome.tabs.sendMessage(tabs[0].id, { action: "mushroomifyIt" });
	// sends message
  });
}


document.querySelector("#mushroomifyButton").addEventListener("click", event =>
	sendMushroomifyMsg());
	// send message and listen when button is trigger