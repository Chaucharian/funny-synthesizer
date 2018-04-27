const notes = [30.87,
                61.74,
                123.5,
                246.9,
                493.9,
                987.8,
                1976,
                3951,
                7902];

export default class Synthesizer {
  
  constructor() {
    this.context = new AudioContext();
    this.oscillator = this.context.createOscillator();
    this.oscillator.type = 'sine'; //type of sound
    this.gain = this.context.createGain();
    this.oscillator.connect(this.gain);
    this.gain.connect(this.context.destination);

    this.oscillator.start(0);
  }

  changeGain(gain) {
    this.oscillator.frequency.value = gain ;
    if(this.pressing) {
        this.gain.gain.exponentialRampToValueAtTime(gain, this.context.currentTime + 0.04);
    }
  }

  validateKey(key) {
    switch (key) {
      case 49:
        this.playNote(30.87);
        break;
      case 50:
        this.playNote(61.74);
        break;
      case 51:
        this.playNote(123.5);
        break;
      case 52:
        this.playNote(246.9);
        break;
      case 53:
        this.playNote(493.9);
        break;
      case 54:
        this.playNote(987.8);
        break;
      case 55:
        this.playNote(1976);
        break;
      case 56:
        this.playNote(3951);
        break;
      default:

    }
  }

  playNote(frequency) {
    this.oscillator.frequency.value = frequency;
    this.gain.gain.exponentialRampToValueAtTime(1, this.context.currentTime + 0.04);
  }
}
