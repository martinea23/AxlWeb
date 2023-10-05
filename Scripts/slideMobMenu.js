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