document.addEventListener("DOMContentLoaded", function() {
    const cargoContainers = document.querySelectorAll('.cargo-container, .globe, .robot-cover, .kessak-cover, .stamp-cover'); // Combine queries
    const sections = document.querySelectorAll('.section-4, .section-5, .section-8, .section-11, .section-14'); // Select all sections

    // Intersection Observer setup
    let observer = new IntersectionObserver(entries => {
        const isInViewport = entries.some(entry => entry.isIntersecting); // Check if any section is in viewport
        cargoContainers.forEach(container => {
            container.classList.toggle('in-viewport', isInViewport); // Toggle class based on viewport status
        });
    });

    // Observe sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
