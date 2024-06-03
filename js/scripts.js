document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const image = document.getElementById("myImage");

    // Check the initial display state of the image set by CSS
    let isImageVisible = window.getComputedStyle(image).display !== "none";

    toggleButton.addEventListener("click", function() {
        if (isImageVisible) {
            image.style.display = "none";
            toggleButton.textContent = "Show Image";
        } else {
            image.style.display = "block";
            toggleButton.textContent = "Hide Image";
        }
        isImageVisible = !isImageVisible; // Toggle the visibility state
    });
});
