document.addEventListener("DOMContentLoaded", function() {
    function startCountersWhenVisible() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let currentCount = 0;
            let interval;

            function updateCount() {
                currentCount++;
                counter.textContent = currentCount;
                if (currentCount === target) {
                    clearInterval(interval);
                }
            }

            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function checkStartCounter() {
                if (isInViewport(counter)) {
                    interval = setInterval(updateCount, 1);
                    window.removeEventListener('scroll', checkStartCounter);
                }
            }

            window.addEventListener('scroll', checkStartCounter);
            checkStartCounter(); // Check on initial load
        });
    }

    startCountersWhenVisible();
});


//cover column animation
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with class starting with 'test-animation-columns'
    const elements = document.querySelectorAll('[class^="test-animation-columns"]');
    
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
    setTimeout(triggerAnimation, 500);
});

