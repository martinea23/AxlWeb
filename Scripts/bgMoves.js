const bg = document.getElementById('header');
window.addEventListener('scroll', function () {
    bg.style.backgroundPositionY = (0 - window.scrollY/2) + 'px';
})