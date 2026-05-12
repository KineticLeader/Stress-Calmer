// Selecting the Canvas and Audio elements from the HTML
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('calmAudio');
const particles = [];
const particleImg = new Image();

// Link to your specific image filename
particleImg.src = 'Gemini_Generated_Image_8jl8vv8jl8vv8jl8 (1).png';

// Make sure the canvas fits the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 50 + 20; // Size of the floating feet
        this.speedX = Math.random() * 4 - 2; // Horizontal drift
        this.speedY = Math.random() * 4 - 2; // Vertical drift
        this.rotation = Math.random() * 360;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 3; // Keep them spinning

        // Screen wrapping (teleport to other side)
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        // Drawing your specific foot image as a particle
        ctx.drawImage(particleImg, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

// Create 30 particles to fly around
function init() {
    for (let i = 0; i < 30; i++) {
        particles.push(new Particle());
    }
}

// The main loop that makes things move
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

// This runs when you tap/click the screen
function startCalm() {
    // Play your Tycoon_Game.mp3
    audio.play().catch(e => console.log("User must interact to play audio"));
    alert("you have been calmed!");
}

// Kick off the animation
init();
animate();

// Adjust canvas if the window size changes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
