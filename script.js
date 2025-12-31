// Heart Generation
const heartContainer = document.getElementById('heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    heart.style.opacity = Math.random();
    const hue = Math.floor(Math.random() * 20) + 340;
    heart.style.background = `hsl(${hue}, 80%, 60%)`;

    // Append to fixed container instead of body
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 400);

// Click interaction for "fireworks"
document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    createExplosion(x, y);
});

function createExplosion(x, y) {
    const colors = ['#ffd700', '#ff4d6d', '#ffffff', '#ff9a9e'];
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 100 + 50;
        const dx = Math.cos(angle) * velocity + 'px';
        const dy = Math.sin(angle) * velocity + 'px';

        spark.style.setProperty('--dx', dx);
        spark.style.setProperty('--dy', dy);

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1000);
    }
}
