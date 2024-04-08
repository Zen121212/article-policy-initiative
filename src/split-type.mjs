import SplitType from "split-type";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'text'
    let textElements = document.querySelectorAll('.text');

    textElements.forEach(textElement => {
        // Initialize SplitType for each text element
        let splitText = new SplitType(textElement);
    });

    let characters = document.querySelectorAll('.char');

    
    // Function to animate characters
    function animateCharacters() {
        for (let i = 0; i < characters.length; i++) {
            characters[i].classList.add('translate-y-full');
        }
        gsap.from('.in-viewport .char', {
            y: -200, // Start from above (y: -100)
            duration: 1,
            ease: 'power1.inOut',
        });
        gsap.to('.in-viewport .char', {
            y: 0,
            duration: 1,
            ease: 'power1.inOut',
        });
    }

    // Intersection Observer setup
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to the element in viewport
                entry.target.classList.add('in-viewport');
                // If the element is in viewport, animate its characters
                if (entry.target.classList.contains('in-viewport')) {
                    animateCharacters();
                }
                // Stop observing this element once it's in the viewport
                observer.unobserve(entry.target);
            } else {
                // Remove the class if the element is not in viewport
                entry.target.classList.remove('in-viewport');
            }
        });
    });

    // Observe each text element
    textElements.forEach(textElement => {
        observer.observe(textElement);
    });

});
