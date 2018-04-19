let bg;
let soundFromJSON;
let sndLoaded = [];
let bubbles = [];

function preload () {
	bg = loadImage("./img/em-pg.jpg");
  soundFromJSON = loadJSON('./assets/soundbank.json', makeSounds);
}

function makeSounds(soundFromJSON){
  for (let sample of soundFromJSON){
    let soundObj = {
      sample: loadSound(sample.sound),
			boucle: sample.boucle,
			type: sample.type
    }
    sndLoaded.push(soundObj);
  }
}

function setup() {
	createCanvas(1280, 720);
	background(bg, 0.8);
	for(let i = 0; i < sndLoaded.length; i++) {
		let getsnd = sndLoaded[i].sample;
		let bubble = new Bubble(random(width), random(height), getsnd, sndLoaded[i].boucle, sndLoaded[i].type);
		bubbles.push(bubble);
	}
}


function draw() {
	for(let i = 0; i < bubbles.length; i++) {
		bubbles[i].display();
	}
}

function mousePressed(){
	if (!keyIsDown(18)) {
		for(let i = 0; i < bubbles.length; i++) {
			bubbles[i].clicked();
		}
	}
}

function keyPressed(){
	if (keyCode === 32) {
		for(let i = 0; i < bubbles.length; i++) {
			bubbles[i]['info'].stop();
		}
	}
}
