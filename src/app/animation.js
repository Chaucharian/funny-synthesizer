export default class Animation {

  constructor() {
    this.animater = p5 => {
      p5.setup = () => {
        this.setup(p5);
      }
      p5.draw = () => {
        this.draw(p5);
      }
    }

    this.p5 = new p5(this.animater);
    this.x = 0;
    this.y = 0;
    this.amplitude = 80;
    this.theta = 0.0;
  }

  setup(p5) {
    this.canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
  }

  draw(p5) {
    p5.background(255, this.rangeColor, this.rangeColor);
    this.calculateWave(p5);

    p5.ellipse(this.x, window.innerHeight /2 + this.y, 80, 80);

    if(this.x >= window.innerWidth) this.x = 0;
  }

  calculateWave(p5) {
    // Increment theta (try different values for
    // 'angular velocity' here)
  //   this.theta += 0.2;

    // For every x value, calculate a y value with sine function
  //  this.x = this.theta;
    this.y = p5.sin(this.x)* this.amplitude;
  }

  setX(value) {
    this.x = window.innerWidth / 2 + value *.1;
    this.rangeColor = value * .2;
  }
}
