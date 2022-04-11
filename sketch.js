let mic, ftt;
let amplitude, frequency;
let abs_amp, abs_fre;

function setup() {
    createCanvas(500, 500);

    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
 background(40);

 

let amplitude = mic.getLevel();
let spectrum = fft.analyze();

 amplitude = map(amplitude, 0, 1, 0, 500)
 abs_amp = map(mic.getLevel(), 0, 1, 0, 100);



beginShape();
  for (i = 0; i < spectrum.length; i++) {
    //vertex(i, map(spectrum[i], 0, 255, height, 0));
    let y = map(spectrum[i], 0, 255, height, 0);
    line(i, height, i, y);
  }
  endShape();

  ellipse(250, 250, amplitude, amplitude);

 
 textSize(18);
 text("amplitude: "+abs_amp, 20, 480);
 fill(0, 102, 153);



 console.log(amplitude);
 console.log(spectrum);
}