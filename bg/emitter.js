class emitter extends EventEmitter {

	constructor() {

		super();
		
		console.log("Emitting ready!");
		
		this.emit("ready");

	}

}

let global_emitter = new emitter();
