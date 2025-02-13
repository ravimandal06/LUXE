document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll(".sidebar ul li");
    const serviceImage = document.getElementById("service-image");

    sidebarItems.forEach(item => {
        item.addEventListener("click", function () {
            // Get the image URL from the data-image attribute
            const newImageUrl = item.getAttribute("data-image");

            // Add a fade-out effect before changing the image
            serviceImage.style.opacity = 0;

            // Wait for the fade-out effect to complete, then change the image
            setTimeout(() => {
                serviceImage.src = newImageUrl;
                serviceImage.style.opacity = 1;
                serviceImage.classList.add("fade-in"); // Add fade-in animation
            }, 300); // Match this duration with the CSS transition duration

            // Remove the fade-in class after the animation completes
            setTimeout(() => {
                serviceImage.classList.remove("fade-in");
            }, 800); // Match this duration with the CSS animation duration
        });
    });
});