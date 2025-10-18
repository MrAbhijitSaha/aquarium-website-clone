// nav bar

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.getElementById("js-menu");
  const navBarToggle = document.getElementById("js-navbar-toggle");
  const navBarClose = document.getElementById("js-navbar-close");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.add("active");
    navBarToggle.classList.add("active"); /* Add active class to toggle */
  });

  navBarClose.addEventListener("click", function () {
    mainNav.classList.remove("active");
    navBarToggle.classList.remove(
      "active"
    ); /* Remove active class from toggle */
  });
});
// nav bar

// about page youtube video play

document.querySelector(".play-button").addEventListener("click", function () {
  document.querySelector(".video-container").style.display = "none";
  document.getElementById("iframeContainer").style.display = "block";
});
// about page youtube video play

// gallery page images tap to see full screen shear

// let zoomLevel = 1; // Initial zoom level

// Open the modal and set the image
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "flex"; // Show modal
  modalImage.src = imageSrc; // Set the clicked image in modal
  zoomLevel = 1; // Reset zoom level on open
  modalImage.style.transform = "scale(1)"; // Reset image zoom scale
}

// Close the modal and reset zoom and full-screen
function closeModal() {
  const modal = document.getElementById("imageModal");

  modal.style.display = "none"; // Hide modal
  if (document.fullscreenElement) {
    document.exitFullscreen(); // Exit full-screen if active
  }
}

// Toggle full-screen mode for the modal
function toggleFullScreen() {
  const modal = document.getElementById("imageModal");

  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch((err) => {
      console.error(`Error attempting full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Toggle zoom in and out on the image
function zoomImage() {
  const image = document.getElementById("modalImage");

  // Toggle zoom level between 1 and 1.5
  zoomLevel = zoomLevel === 1 ? 1.5 : 1;
  image.style.transform = `scale(${zoomLevel})`; // Apply zoom level

  // Center the image when zoomed in
  if (zoomLevel > 1) {
    image.style.cursor = "move"; // Change cursor to indicate panning
  } else {
    image.style.cursor = "default"; // Reset cursor when back to normal size
  }
}

// Share the image (this function opens the Share dialog if supported)
function shareImage() {
  const imageSrc = document.getElementById("modalImage").src;
  if (navigator.share) {
    navigator
      .share({
        title: "Check out this image!",
        url: imageSrc,
      })
      .catch((error) => console.error("Error sharing:", error));
  } else {
    alert("Sharing is not supported on this browser.");
  }
}

// gallery page images tap to see full screen shear



// download 

let zoomLevel = 1; // Initial zoom level

// Open the modal with the selected image
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const downloadLink = document.getElementById("downloadLink");

  modal.style.display = "flex"; // Display the modal
  modalImage.src = imageSrc; // Set the image in the modal
  downloadLink.href = imageSrc; // Set the download link to the image source
  zoomLevel = 1; // Reset zoom level
  modalImage.style.transform = "scale(1)"; // Reset scale on open
}

// Close the modal and reset zoom
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Hide the modal
}

// Zoom the image in and out
function zoomImage() {
  const modalImage = document.getElementById("modalImage");
  zoomLevel = zoomLevel === 1 ? 1.5 : 1; // Toggle between 1x and 1.5x zoom
  modalImage.style.transform = `scale(${zoomLevel})`; // Apply zoom level
  console.log("Zoom level:", zoomLevel); // Debug: log zoom level to console
}
