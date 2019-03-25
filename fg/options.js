chrome.runtime.getBackgroundPage(page => {
	
	if (page.oneMustAccesHereFromViews) {
		
		document.getElementById("answer").innerHTML = page.oneMustAccesHereFromViews();
		
	} else {

		console.log(page);
		
	}
	
})
