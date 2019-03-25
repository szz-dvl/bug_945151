
function BG () {

	this.oneMustAccesHereFromViews = () => {
	
		return "hurray!";

	};

}


global_emitter.once('ready', () => {

	/*This is never happening */
	console.log("Ready received!");
	
	BG.call(this);
	
})
