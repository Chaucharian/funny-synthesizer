import Synthesizer from './synthesizer';
import Animation from './animation';

class Main {

  constructor() {
    this.io = io();
    this.animation = new Animation();
    this.synthesizer = new Synthesizer();

    this.loadListenner();
    this.io.on('sendDistance', (value) => {
      this.animation.setX(value);
      this.synthesizer.changeGain(value*2);
    })
  }

  loadListenner() {
    document.addEventListener('mousemove', e => {
    //  this.mousemoveHandler(e);
    });

    document.addEventListener('keydown', e => {
      this.pressing = true;
    });

    document.addEventListener('keyup', e => {
      this.pressing = false;
    });
  }

  mousemoveHandler(position) {
    this.animation.setX(position.clientX);
  }

}

const synthe = new Main();
