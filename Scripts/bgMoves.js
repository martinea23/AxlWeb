const bg = document.getElementById('header');
window.addEventListener('scroll', function () {
    bg.style.backgroundPositionY = (-500 - window.scrollY/2) + 'px';
})