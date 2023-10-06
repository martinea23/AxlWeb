const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    // if its just a click dont do anything
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage

    // Prevent it from going forever
    if (nextPercentage < -100) {
        nextPercentage = -100;
    } else if (nextPercentage > 0) {
        nextPercentage = 0;
    }

    //to track percentages so it does not reset the slider
    track.dataset.percentage = nextPercentage;

    //animate to have it be smoother
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: 'forwards' })
}

window.onmouseup = () => {
    //reset click position
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;

}

if (navigator.maxTouchPoints > 0) {
    // Mobile and touch-enabled behavior
    track.addEventListener("touchstart", handleTouchStart);
    track.addEventListener("touchmove", handleTouchMove);
    track.addEventListener("touchend", handleTouchEnd);
}

let touchStartX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    track.dataset.mouseDownAt = touchStartX;
}

function handleTouchMove(event) {
    if (!touchStartX) return; // No touchstart event, do nothing

    const touchX = event.touches[0].clientX;
    const touchDelta = touchStartX - touchX;
    const maxDelta = window.innerWidth;

    const percentage = (touchDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    // Prevent it from going beyond -100% and 0%
    if (nextPercentage < -100) {
        nextPercentage = -100;
    } else if (nextPercentage > 0) {
        nextPercentage = 0;
    }

    track.dataset.percentage = nextPercentage;

    // Animate to make it smoother
    track.style.transform = `translate(${nextPercentage}%, -50%)`;

    // Update touchStartX for the next move event
    touchStartX = touchX;
}

function handleTouchEnd() {
    touchStartX = 0;
    track.dataset.prevPercentage = track.dataset.percentage;
}
