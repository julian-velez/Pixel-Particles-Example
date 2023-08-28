const pixelContainer = document.querySelector('.pixel-container');

function createPixel() {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.left = Math.random() * pixelContainer.clientWidth + 'px';
    pixel.style.top = Math.random() * pixelContainer.clientHeight + 'px';
    pixelContainer.appendChild(pixel);

    setTimeout(() => {
        pixel.remove();
    }, 2000);
}

setInterval(createPixel, 100);
