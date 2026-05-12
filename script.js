// Selecting the Canvas and Audio elements
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('calmAudio');
const particles = [];
const particleImg = new Image();

// Exact case-sensitive filename for your image
particleImg.src = 'Gemini_Generated_Image_8jl8vv8jl8vv8jl8 (1).png';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 50 + 20;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.rotation = Math.random() * 360;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 3;

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
    for (let i = 0; i < 30; i++) {
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

// Fixed function with exact case-sensitive music title
function startCalm() {
    const musicPlayer = document.getElementById('calmAudio');
    musicPlayer.src = 'Tyccoon_Game.mp3'; // Exact case match
    musicPlayer.play().catch(e => {
        console.log("Audio failed to play. Make sure the file exists in the main folder.");
    });
    alert("you have been calmed!");
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
