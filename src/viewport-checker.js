document.addEventListener("DOMContentLoaded", function() {
    const section4 = document.querySelector('.section-4'); // Select by class
    const cargoContainers = document.querySelectorAll('.cargo-container'); // Select all elements with class

    // Intersection Observer setup
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to the cargo containers when section-4 is in viewport
                cargoContainers.forEach(container => {
                    container.classList.add('in-viewport');
                });
            } else {
                // Remove the class if section-4 is not in viewport
                cargoContainers.forEach(container => {
                    container.classList.remove('in-viewport');
                });
            }
        });
    });

    // Observe section-4
    observer.observe(section4);
});
