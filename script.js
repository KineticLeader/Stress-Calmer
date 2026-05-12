const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('calmAudio');
const particles = [];
const particleImg = new Image();

// This links to your image in the main folder
particleImg.src = 'butter_feet.png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.rotation = Math.random() * 360;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 2; // Makes the feet spin!

        // Keep them on screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.drawImage(particleImg, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function init() {
    for (let i = 0; i < 25; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// This function runs when you tap the screen
function startCalm() {
    audio.play();
    alert("you have been calmed!");
}

init();
animate();

// Resizes everything if you tilt your phone or change windows
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
