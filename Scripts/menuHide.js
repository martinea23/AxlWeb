var menu = document.getElementsByClassName("menuContainer")[0];
var lastScrollTop = 0
window.addEventListener("scroll", function(){
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