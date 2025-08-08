const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
document.body.style.overflow = "hidden";
const T = 200;
const F = 1/T;
const OMEGA = 2 * Math.PI * F;
let angle = Math.PI / 2;
let hue = 0;

function draw() {
    hue = (hue + 1) % 360; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    for (let x = 0; x < canvas.width; x++) {
        const A = 50 + 5 * Math.sin(angle);
        const y = canvas.height / 2 + A * Math.sin(OMEGA * x + angle);
        if (x == 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.closePath();
    angle += 0.1;
    requestAnimationFrame(draw);
}

draw();