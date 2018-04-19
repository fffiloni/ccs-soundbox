class Bubble {
	constructor(x, y, info, boucle, type){
		this.x = x;
		this.y = y;
		this.r = 20;
		this.boucle = boucle;
		this.type = type;
		this.col = color(255);
		this.info = info;
	}

	display(){
		noStroke();
		if(this.type == 'gattaz'){
			fill(0,0,255);
		}else if(this.type == 'macron'){
			fill(0,255,0);
		}
		if(this.boucle == true){
			fill(150);
		}

		ellipse(this.x, this.y, this.r *2);
	}

	clicked(){
		let d = dist(mouseX, mouseY, this.x, this.y);
		if (d < this.r){
			console.log(this.info);
			// for(let i = 0; i < bubbles.length; i++) {
			// 	bubbles[i]['info'].stop();
			// }
			if(this.boucle == true){
				this.info.stop();
				this.info.loop();
			} else {
				let result = bubbles.filter(smp => smp.boucle == false);
				for(let i = 0; i < result.length; i++) {
					result[i]['info'].stop();
				}
				this.info.play();
			}

		}
	}

}
