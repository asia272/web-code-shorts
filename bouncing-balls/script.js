const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;
const friction = 0.8;
const balls = [];

class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dy = Math.random() * 2 + 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }
        this.y += this.dy;
        this.draw();
    }
}

for (let i = 0; i < 50; i++) {
    const radius = Math.random() * 20 + 10;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2);
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    balls.push(new Ball(x, y, radius, color));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => ball.update());
    requestAnimationFrame(animate);
}

animate();
