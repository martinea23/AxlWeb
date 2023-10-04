function createBubbles(count) {
    const bubbleContainer = document.getElementById("bubbles");
    bubbleContainer.innerHTML = ""; // Clear existing bubbles

    for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.style.animationDuration = `${Math.random() * 5 + 10}s`; // Randomize animation duration
        bubbleContainer.appendChild(span);
    }
}

// Update the number of bubbles based on screen width
function updateBubbles() {
    const screenWidth = window.innerWidth;
    let bubbleCount;

    if (screenWidth < 600) {
        bubbleCount = 10; // Adjust this value for smaller screens
    } else if (screenWidth < 1025) {
        bubbleCount = 20; // Adjust this value for medium-sized screens
    } else {
        bubbleCount = 30; // Adjust this value for larger screens
    }

    createBubbles(bubbleCount);
}

// Call the updateBubbles function on page load and when the window is resized
window.addEventListener("load", updateBubbles);
window.addEventListener("resize", updateBubbles);