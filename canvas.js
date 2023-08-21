const canvas = document.getElementById('canvas');
const header = document.querySelector('header');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
primaryColor = '#F9E6CF',
secondaryColor = '#A67B5B',

window.addEventListener('resize', function (){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: null,
    y: null
}

header.addEventListener('mousemove', (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})

class Particle {
    constructor(){
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() / 2 - 0.25;
        this.speedY = Math.random() / 2 - 0.25;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x - this.size < 0 || this.x + this.size > window.innerWidth){
            this.speedX = - this.speedX
        }
        if(this.y - this.size < 0 || this.y + this.size > window.innerHeight){
            this.speedY = - this.speedY
        }
    }
    draw(){
        ctx.fillStyle = secondaryColor;
        ctx.strokeStyle = secondaryColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init(){
    for(let i = 0; i < Math.floor(window.innerWidth / 20); i++){
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles() {
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        const mdx = particlesArray[i].x - mouse.x;
        const mdy = particlesArray[i].y - mouse.y;
        const mDistance = Math.sqrt(mdx * mdx + mdy * mdy);
        if(mDistance < 250){
            ctx.beginPath();
            ctx.strokeStyle = secondaryColor;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke()
        }
        for(let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy)
            if(distance < 200){
                ctx.beginPath();
                ctx.strokeStyle = secondaryColor;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke()
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}
animate()