document.addEventListener('click', function (e) {
    const totalSparkles = 5;
    for (let i = 0; i < totalSparkles; i++) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';

    // Random offsets for spreading effect
    const offsetX = (Math.random() - 0.5) * 60; // Spread horizontally
    const offsetY = (Math.random() - 0.5) * 60; // Spread vertically

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.setProperty('--offset-x', `${offsetX}px`);
    sparkle.style.setProperty('--offset-y', `${offsetY}px`);

    document.body.appendChild(sparkle);

    // Remove the sparkle after the animation finishes
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}