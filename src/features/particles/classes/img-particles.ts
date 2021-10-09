import { Particle } from './particle';
import { Particles } from './particles';

export class ImgParticles extends Particles {
  src: string;
  constructor(
    src: string,
    container?: HTMLElement,
    styles = { ...Particles.defaultStyles, background: 'transparent' }
  ) {
    super(container, styles, src);
  }

  initProps(src: string) {
    this.src = src;
  }

  init() {
    this.particlesArray = [];
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = image.height;
      canvas.width = image.width;
      ctx.drawImage(image, 0, 0);
      const data = ctx.getImageData(0, 0, image.height, image.width);
      for (let i = 0; i < data.width; i++) {
        for (let j = 0; j < data.height; j++) {
          if (data.data[j * 4 * data.width + i * 4 + 3] > 128) {
            const particle = new Particle(
              i * 8,
              j * 8,
              0,
              0,
              2,
              'white',
              this.canvas,
              this.ctx
            );
            this.particlesArray.push(particle);
          }
        }
      }
    };
    image.src = this.src;
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
