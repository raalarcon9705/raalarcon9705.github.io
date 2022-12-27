// @ts-nocheck
export function initPageSections() {
	/** @type {NodeListOf<HTMLElement>} */
	const sections = document.querySelectorAll('.section');

	sections.forEach((section) => {
		/**
		 *
		 * @param {AnimationEvent} ev
		 */
		function handleAnimationEnd(ev) {
			if (ev.animationName === 'openSection' || ev.animationName === 'closeSection') {
				section.classList.add('ready-section');
				section.removeEventListener('animationend', handleAnimationEnd);
			}
		}

		section.addEventListener('animationend', handleAnimationEnd);
	});

	document.querySelectorAll('.nav-list.sections a').forEach((el) => {
		el.addEventListener('click', () => {
			const item = document.querySelector('.nav-list.sections');
			if (item) {
				item.classList.remove('expand');
			}
		});
	});
}

export function createParticlesEffectBackground() {
	const canvas = document.createElement('canvas');
	const overCanvas = document.createElement('div');
	canvas.classList.add('particles-background');
	overCanvas.classList.add('over-canvas');
	document.body.prepend(overCanvas);
	document.body.prepend(canvas);
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let particlesArray;

	const mouse = {
		x: null,
		y: null,
		radius: (canvas.height / 80) * (canvas.width / 80)
	};

	function init() {
		particlesArray = [];

		const length = (canvas.height * canvas.width) / 10000;

		for (let i = 0; i < length; i++) {
			const size = Math.random() * 4 + 1;
			const x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
			const y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
			const dirX = Math.random() * 2 - 1;
			const dirY = Math.random() * 2 - 1;
			const particle = new Particle(x, y, dirX, dirY, size);
			particlesArray.push(particle);
		}
	}

	function connect() {
		for (const a of particlesArray) {
			for (const b of particlesArray) {
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const distSq = dx * dx + dy * dy;
				if (distSq < ((canvas.height / 8) * canvas.width) / 8) {
					ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, innerWidth, innerHeight);

		for (const particle of particlesArray) {
			particle.update();
		}

		connect();
	}

	/**
	 * @param {{ x: null; y: null; }} ev
	 */
	function handleMouseMove(ev) {
		mouse.x = ev.x;
		mouse.y = ev.y;
	}

	function handleResize() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		mouse.radius = (canvas.height / 80) * (canvas.width / 80);
		init();
	}

	class Particle {
		constructor(x, y, dirX, dirY, size, color = '#fff') {
			this.x = x;
			this.y = y;
			this.dirX = dirX;
			this.dirY = dirY;
			this.size = size;
			this.color = color;
		}

		draw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
			ctx.fillStyle = this.color;
			ctx.fill();
		}

		update() {
			if (this.x > canvas.width || this.x < 0) {
				this.dirX = -this.dirX;
			}
			if (this.y > canvas.height || this.y < 0) {
				this.dirY = -this.dirY;
			}

			const dx = mouse.x - this.x;
			const dy = mouse.y - this.y;
			const dist = Math.sqrt(dx * dx + dy * dy);

			if (dist < mouse.radius + this.size) {
				if (mouse.x < this.x && this.x < canvas.width - this.size * 3) {
					this.x += 3;
				}
				if (mouse.x > this.x && this.x > this.size * 3) {
					this.x -= 3;
				}
				if (mouse.y < this.y && this.y < canvas.height - this.size * 3) {
					this.x += 3;
				}
				if (mouse.y > this.y && this.y > this.size * 3) {
					this.y -= 3;
				}
			}

			this.x += this.dirX;
			this.y += this.dirY;

			this.draw();
		}
	}

	window.addEventListener('mousemove', handleMouseMove);
	window.addEventListener('resize', handleResize);

	init();
	animate();
}
