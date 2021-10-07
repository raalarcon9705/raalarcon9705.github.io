import { Particle } from './particle';
import { Particles, ParticlesStyle } from './particles';

export class TextParticles extends Particles {
  text: string;
  color: string;
  fontFamily: string;
  fontSize: string;
  constructor(
    text: string,
    color = 'white',
    fontFamily = 'Verdana',
    fontSize = '30pt',
    container?: HTMLElement,
    styles = { ...Particles.defaultStyles, background: 'transparent' }
  ) {
    super(container, styles, text, color, fontFamily, fontSize);
  }

  initProps(text: string, color: string, fontFamily: string, fontSize: string) {
    this.text = text;
    this.color = color;
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
  }

  init() {
    const canvas = document.createElement('canvas');
    canvas.width = this.canvas.width;
    canvas.height = this.canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = `${this.fontSize} ${this.fontFamily}`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const textWidth = ctx.measureText(this.text).width;
    const textHeight = +this.fontSize.match(/^\d+/)[0] * 1.286;
    ctx.fillText(this.text, 0, 0);
    // document.body.append(canvas);
    const data = ctx.getImageData(0, 0, 100, 100);
    this.particlesArray = [];
    for (let i = 0; i < data.width; i++) {
      for (let j = 0; j < data.height; j++) {
        if (data.data[j * 4 * data.width + i * 4 + 3] > 128) {
          const particle = new Particle(
            i * 8 + this.canvas.width / 2 - (textWidth * 8) / 2,
            j * 8,
            0,
            0,
            2,
            this.color,
            this.canvas,
            this.ctx
          );
          this.particlesArray.push(particle);
        }
      }
    }
  }

  connect() {
    this.ctx.globalCompositeOperation = 'destination-over';

    this._connect(this.particlesArray, 300, '#ffffff80');
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.particlesArray.length; i++) {
      this.particlesArray[i].updateStatic(this.mouse);
    }

    this.connect();
  }
}
