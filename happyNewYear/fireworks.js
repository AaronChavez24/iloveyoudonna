const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];
const particles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFF233', '#33FFF5'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function Firework(x, y) {
    this.x = x;
    this.y = y;
    this.targetY = random(canvas.height / 4, canvas.height / 2);
    this.speed = 2;
    this.boom = false;

    this.update = function () {
        if (this.y > this.targetY) {
            this.y -= this.speed;
        } else {
            this.boom = true;
            for (let i = 0; i < 100; i++) {  // Increase the number of particles
                particles.push(new Particle(this.x, this.y));
            }
        }
    }

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = randomColor();  // Add color to the firework trail
        ctx.fill();
    }
}

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.gravity = 0.05;
    this.life = 100;
    this.color = randomColor();

    this.update = function () {
        this.x += this.speedX;
        this.y += this.speedY + this.gravity;
        this.life -= 1;
    }

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;  // Add color to the particles
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) {  // Increase the frequency of fireworks
        fireworks.push(new Firework(random(0, canvas.width), canvas.height));
    }
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();
        if (firework.boom) {
            fireworks.splice(index, 1);
        }
    });
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

animate();
