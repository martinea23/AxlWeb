//------------------------------hide nav bar Section -------------------------------
var menu = document.getElementsByClassName("menuContainer")[0];
var lastScrollTop = 0
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down, hide the menuContainer
    menu.classList.add("hide");
  } else {
    // Scrolling up, show the menuContainer
    menu.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
})

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop <= 0) {
    // At the top of the page, always show the menuContainer
    menu.classList.remove("hide");
  }
})

//-------------------------------------HideMenu Section -------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobMenuCont");
  const menuMob = document.querySelector(".menuMob");

  // Function to toggle the mobile menu
  function toggleMobileMenu() {
    if (mobileMenu.style.right === "0px") {
      mobileMenu.style.right = "-110%"; // Hide the menu
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      mobileMenu.style.right = "0px"; // Show the menu
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  }

  // Event listener for the mobile menu button
  menuMob.addEventListener("click", toggleMobileMenu);
});

//-------------------------------------Background Effect Section -------------------------------
function createBubbles(count) {
  const bubbleContainer = document.getElementById("bubbles");
  bubbleContainer.innerHTML = ""; // Clear existing bubbles

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.style.animationDuration = `${Math.random() * 13 + 10}s`; // Randomize animation duration

    bubbleContainer.appendChild(span);
  }
}

// Update the number of bubbles based on screen width
function updateBubbles() {
  const screenWidth = window.innerWidth;
  let bubbleCount;

  if (screenWidth < 340) {
    bubbleCount = 10; // Adjust this value for smaller screens
  }
  else if (screenWidth < 500) {
    bubbleCount = 15; // Adjust this value for medium-sized screens
  }
  else if (screenWidth < 650) {
    bubbleCount = 18; // Adjust this value for medium-sized screens
  }
  else if (screenWidth < 800) {
    bubbleCount = 25; // Adjust this value for medium-sized screens
  }
  else if (screenWidth < 930) {
    bubbleCount = 30; // Adjust this value for medium-sized screens
  } else {
    bubbleCount = 0; // Adjust this value for larger screens
  }

  createBubbles(bubbleCount);
}

// Call the updateBubbles function on page load and when the window is resized
window.addEventListener("load", updateBubbles);
window.addEventListener("resize", updateBubbles);