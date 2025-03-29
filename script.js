let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    stopAllAudio();
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    stopAllAudio();
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

function updateSlide() {
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}vw)`;
    const audio = slides[currentSlide].querySelector('audio');
    if (audio) audio.play();
}

function stopAllAudio() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Floating Hearts Animation - Overlaying on Images
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Random positioning and animation timing
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts at random intervals
setInterval(createHeart, 400);
