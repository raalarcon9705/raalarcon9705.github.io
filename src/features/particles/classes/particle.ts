import { circleCollision } from '../functions/math';
import { ICircle } from '../interfaces/circle';

/**
 * @class Particle class for background
 */
export class Particle {
  density: number;
  baseX: number;
  baseY: number;

  constructor(
    public x: number,
    public y: number,
    public directionX: number,
    public directionY: number,
    public size: number,
    public color: string,
    public canvas: HTMLCanvasElement,
    public ctx: CanvasRenderingContext2D
  ) {
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 30 + 1;
  }

  get circle(): ICircle {
    return {
      x: this.x,
      y: this.y,
      radius: this.size,
    };
  }

  /**
   * @description Method to draw individual particle
   */
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.shadowColor = this.color;
    this.ctx.shadowBlur = 10;
    this.ctx.fill();
  }

  /**
   * @description Check particle position, check mouse position, move the particle, draw the particle
   */
  update(mouse?: ICircle) {
    // Check if particle is still within canvas
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Check collision between mouse and particle
    if (mouse && circleCollision(mouse, this.circle)) {
      if (mouse.x < this.x && this.x < this.canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }

      if (mouse.y < this.y && this.y < this.canvas.height - this.size * 10) {
        this.y += 10;
      }

      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }

    // Move particle
    this.x += this.directionX;
    this.y += this.directionY;

    // Draw particle
    this.draw();
  }

  updateStatic(mouse: ICircle) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;
    const directionX = forceDirectionX * force * this.density;
    const directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 5;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 5;
      }
    }

    // Draw particle
    this.draw();
  }
}
