document.addEventListener("DOMContentLoaded", function() {
    // Target the gallery section
    const gallerySection = document.getElementById("gallerySection");

    // Array of image filenames
    const imageFiles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

    // Loop through imageFiles array to create gallery items
    imageFiles.forEach((filename, index) => {
        // Create gallery item container
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        // Create image element
        const image = document.createElement("img");
        image.src = `Covers/${filename}`; // Set image source
        image.alt = `Photo ${index + 1}`; // Set alt attribute
        image.classList.add("gallery-image"); // Optional: Add class for styling

        // Append image to gallery item
        galleryItem.appendChild(image);

        // Append gallery item to gallery section
        gallerySection.appendChild(galleryItem);
    });
});
