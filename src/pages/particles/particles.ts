import { distance } from '../../features/particles/functions/math';
import { ICircle } from '../../features/particles/interfaces/circle';
import { Point2D } from '../../features/particles/interfaces/point-2d';

class Particle {
  static colors = ['#46896638', '#FFF0A538', '#FFB03B38', '#B6492638', '#8E280038', '#c62a8838', '#03c4a138'];

  baseX: number;
  baseY: number;

  constructor(
    public x: number,
    public y: number,
    public radius = Math.random() * 5 + 2,
    public dx = (Math.random() - 0.5) * 20,
    public dy = (Math.random() - 0.5) * 20,
    public free = false,
    public friction = Math.random() * 0.05 + 0.94,
    public color = Particle.colors[Math.floor(Math.random() * Particle.colors.length)]
  ) {
    this.baseX = x;
    this.baseY = y;
  }

  draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
  }

  render(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, mouse?: ICircle) {
    if (!this.free) {
      const dx = (this.baseX - this.x) / 1000;
      const dy = (this.baseY - this.y) / 1000;
      this.dx += dx;
      this.dy += dy;
    } else {
      if (this.x > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }
    }
    if (!this.free && this.friction) {
      this.dx *= this.friction;
      this.dy *= this.friction;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw(canvas, ctx);

    if (mouse && !this.free) {
      const a = this.x - mouse.x;
      const b = this.y - mouse.y;
      const distance = Math.sqrt(a * a + b * b);
      if (distance < mouse.radius * 70) {
        const dx = (this.x - mouse.x) / 100;
        const dy = (this.y - mouse.y) / 100;
        this.dx += dx;
        this.dy += dy;
      }
    }
  }
}

class Particles {
  container = document.body;
  particles: Particle[] = [];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mouse: ICircle = {
    x: null,
    y: null,
    radius: 300,
  };
  get amount() {
    return this.particles.length;
  }
  get width() {
    return this.canvas.width;
  }
  get height() {
    return this.canvas.height;
  }

  constructor(container?: HTMLElement) {
    if (container) {
      this.container = container;
    }
    this.build();
    this.init();
    this.render();
  }

  onMouseMove(ev: MouseEvent) {
    this.mouse.x = ev.x;
    this.mouse.y = ev.y;
  }

  setDimensions() {
    if (this.container.isEqualNode(document.body)) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    } else {
      this.canvas.width = this.container.clientWidth;
      this.canvas.height = this.container.clientHeight;
    }
    // this.mouse.radius = ((this.canvas.height / 80) * this.canvas.width) / 80;
  }

  build() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.setDimensions();
    this.container.append(this.canvas);

    this.container.addEventListener('mousemove', (ev) => this.onMouseMove(ev));

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.setDimensions();
      });
    });

    resizeObserver.observe(this.container);
  }

  init() {
    this.particles = [];
    const numberOfParticles = (this.canvas.height * this.canvas.width) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 10 + 1;
      const x = Math.random() * (innerWidth - size * 2 - size * 2 + size * 2);
      const y = Math.random() * (innerHeight - size * 2 - size * 2 + size * 2);
      const directionX = Math.random() * 0.5 - 0.25;
      const directionY = Math.random() * 0.5 - 0.25;
      const particle = new Particle(x, y, size, directionX, directionY, true);
      this.particles.push(particle);
    }
  }

  connect() {
    const points = this.particles as Point2D[];
    const maxDistance = (this.canvas.width / 7) * (this.canvas.height / 7);
    this._connect(points, maxDistance, '#03c4a118');
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.amount; i++) {
      this.particles[i].render(this.canvas, this.ctx);
    }
    this.connect();
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

const particles = new Particles();
