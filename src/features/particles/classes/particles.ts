import * as _ from 'lodash';
import { distance } from '../functions/math';
import { ICircle } from '../interfaces/circle';
import { Point2D } from '../interfaces/point-2d';
import { Particle } from './particle';

export interface ParticlesStyle {
  background?: string;
  particleColor?: string;
  secondaryColor?: string;
  strokeStyle?: string;
  position?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
}

export class Particles {
  static defaultStyles = {
    background: 'radial-gradient(#0e073e, #07060b)',
    particleColor: '#59099558',
    secondaryColor: '#03c4a108',
    strokeStyle: '#59099519',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  };

  styles: ParticlesStyle = Particles.defaultStyles;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  protected mouse: ICircle;
  protected particlesArray: Particle[];
  protected tempParticles: Particle[] = [];
  private resizeObserver: ResizeObserver;
  container = document.body;

  constructor(
    container?: HTMLElement,
    styles?: ParticlesStyle,
    ...props: any[]
  ) {
    if (container) {
      this.container = container;
    }

    this.styles = {
      ...Particles.defaultStyles,
      ...styles,
    };

    this.initProps(...props);
    this.build();
    this.init();
    this.animate();
  }

  protected initProps(...args: any[]) {}

  protected setDimensions() {
    if (this.container.isEqualNode(document.body)) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    } else {
      this.canvas.width = this.container.clientWidth;
      this.canvas.height = this.container.clientHeight;
    }
    this.mouse.radius = ((this.canvas.height / 80) * this.canvas.width) / 80;
  }

  protected applyStyle() {
    this.canvas.style.background = this.styles.background;
    this.canvas.style.position = this.styles.position;
    this.canvas.style.top = this.styles.top;
    this.canvas.style.left = this.styles.left;
    this.canvas.style.width = this.styles.width;
    this.canvas.style.height = this.styles.height;
  }

  protected build() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.mouse = {
      x: undefined,
      y: undefined,
      radius: ((this.canvas.height / 80) * this.canvas.width) / 80,
    };

    this.setDimensions();
    this.applyStyle();

    this.container.append(this.canvas);

    this.container.addEventListener('mousemove', (ev) => {
      this.mouse.x = ev.x;
      this.mouse.y = ev.y;
    });

    // this.container.addEventListener('resize', (ev) => {
    //   this.setDimensions();
    // });

    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.setDimensions();
      });
    });

    this.resizeObserver.observe(this.container);

    this.container.addEventListener('mouseout', (ev) => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    });
  }

  /**
   * @description Create particle array
   */
  protected init() {
    this.particlesArray = [];
    const numberOfParticles = (this.canvas.height * this.canvas.width) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 10 + 1;
      const x = Math.random() * (innerWidth - size * 2 - size * 2 + size * 2);
      const y = Math.random() * (innerHeight - size * 2 - size * 2 + size * 2);
      const directionX = Math.random() * 0.5 - 0.25;
      const directionY = Math.random() * 0.5 - 0.25;
      const color = this.styles.particleColor;
      const particle = new Particle(
        x,
        y,
        directionX,
        directionY,
        size,
        color,
        this.canvas,
        this.ctx
      );
      this.particlesArray.push(particle);
    }

    // mouse event
    this.container.addEventListener(
      'mousemove',
      _.throttle(() => {
        let p = 7;
        while (p--) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * this.mouse.radius * 10;
          const x = Math.sqrt(radius) * Math.cos(angle) + this.mouse.x;
          const y = Math.sqrt(radius) * Math.sin(angle) + this.mouse.y;
          let particle = new Particle(
            x,
            y,
            0,
            0,
            1,
            this.styles.secondaryColor,
            this.canvas,
            this.ctx
          );
          this.tempParticles.push(particle);
          setTimeout(() => {
            this.tempParticles = this.tempParticles.filter(
              (p) => p.x !== particle.x && p.y !== particle.y
            );
          }, 1000);
        }
      }, 100)
    );
  }

  /**
   * @description Animation loop
   */
  protected animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let particles = this.particlesArray;
    if (this.mouse.x && this.mouse.y) {
      const mouseParticle = new Particle(
        this.mouse.x,
        this.mouse.y,
        0,
        0,
        3,
        this.styles.particleColor,
        this.canvas,
        this.ctx
      );

      particles = particles.concat(mouseParticle);
    }
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
    }

    this.connect();
  }

  protected connect() {
    const points = (this.particlesArray as Point2D[])
      .concat(this.mouse)
    const maxDistance = (this.canvas.width / 7) * (this.canvas.height / 7);
    this._connect(points, maxDistance, this.styles.strokeStyle);
    this._connect(this.tempParticles, this.mouse.radius * this.mouse.radius, this.styles.secondaryColor);
  }

  protected _connect(points: Point2D[], maxDistance: number, color: string) {
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (distance(points[i], points[j]) < maxDistance) {
          this.ctx.strokeStyle = color;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(points[i].x, points[i].y);
          this.ctx.lineTo(points[j].x, points[j].y);
          this.ctx.shadowBlur = 0;
          this.ctx.stroke();
        }
      }
    }
  }
}
