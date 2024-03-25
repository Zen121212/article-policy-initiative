//cover column animation
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class starting with 'animation-columns'
    const elements = document.querySelectorAll('[class^="animation-columns"]');
    
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to trigger the animation when elements enter the viewport
    function triggerAnimation() {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    // Listen for scroll events and trigger animation
    window.addEventListener('scroll', triggerAnimation);
    
    // Trigger animation after a delay of 500ms
    setTimeout(triggerAnimation, 350);
});
