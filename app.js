function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger h2");
  const isVisible = nav.style.display === "flex";

  if (isVisible) {
    nav.style.display = "none";
    hamburger.innerText = "☰";
  } else {
    nav.style.display = "flex";
    hamburger.innerText = "X";
    hamburger.style.fontSize = "30px";
  }
 }

 function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function switchModal(currentModalId, targetModalId) {
  closeModal(currentModalId);
  showModal(targetModalId);
}
window.onclick = function (event) {
  const loginModal = document.getElementById("login-modal");
  const upModal = document.getElementById("signup-modal");

  if (event.target == loginModal) {
    closeModal("login-modal");
  } else if (event.target == signupModal) {
    closeModal("signup-modal");
  }
};
 
// image popup

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".see-activities-button");
  const popupOverlay = document.getElementById("popup-overlay");
  const closeButton = document.getElementById("close-button");
  const randomImagesContainer = document.getElementById("random-videos");

  const images = [
    "./assets/video_1.mp4",
    "./assets/video_2.mp4",
    "./assets/video_3.mp4",
  ];

  function getRandomImages() {
    let selectedImages = [];
    while (selectedImages.length < 1) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];
      if (!selectedImages.includes(selectedImage)) {
        selectedImages.push(selectedImage);
      }
    }
    return selectedImages;
  }

  function showPopup() {
    randomImagesContainer.innerHTML = "";
    const selectedImages = getRandomImages();
    selectedImages.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      randomImagesContainer.appendChild(video);
    });
    popupOverlay.style.display = "flex";
  }

  buttons.forEach((button) => {
    button.addEventListener("click", showPopup);
  });

  closeButton.addEventListener("click", function () {
    popupOverlay.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
});

// video

var btn = document.querySelector(".button_image");
btn.addEventListener("click", (event) => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// see All

let imagesToShow = [
  {
    src: "./assets/trending_image_3.png",
    description: "City Tours",
  },
  {
    src: "./assets/trending_image_1.png",
    description: "Cruises",
  },
  {
    src: "./assets/trending_image_2.png",
    description: "Beach Tours",
  },
  {
    src: "./assets/trending_image_5.png",
    description: "Hiking",
  },
  { src: "./assets/trending_image_4.png", description: "Food" },
  {
    src: "./assets/trending_image_2.png",
    description: "Beach Tours",
  },
  {
    src: "./assets/trending_image_5.png",
    description: "Hiking",
  },
  { src: "./assets/trending_image_4.png", description: "Food" },
  {
    src: "./assets/trending_image_3.png",
    description: "City Tours",
  },
  {
    src: "./assets/trending_image_1.png",
    description: "Cruises",
  },
];

let currentIndex = 0;
const imagesPerClick = 5;

document.getElementById("seeAllButton").addEventListener("click", () => {
  const container = document.getElementById("moreImagesContainer");

  for (let i = 0; i < imagesPerClick; i++) {
    if (currentIndex >= imagesToShow.length) break;

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const img = document.createElement("img");
    img.src = imagesToShow[currentIndex].src;
    imageContainer.appendChild(img);

    const paragraph = document.createElement("p");
    paragraph.textContent = imagesToShow[currentIndex].description;
    imageContainer.appendChild(paragraph);

    container.appendChild(imageContainer);

    currentIndex++;
  }
});
//fetching the data from json data

async function fetchTravelDetails() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const travelData = await response.json();
    displayTravelDetails(travelData);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function displayTravelDetails(data) {
  const container = document.getElementById("travel-details");
  data.trips.forEach((trip) => {
    const card = document.createElement("div");
    card.classList.add("cards");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const destination = document.createElement("h2");
    destination.textContent = trip.destination;
    cardContent.appendChild(destination);

    const duration = document.createElement("p");
    duration.textContent = `Duration: ${trip.duration}`;
    cardContent.appendChild(duration);

    const activities = document.createElement("p");
    activities.textContent = `Activities: ${trip.activities.join(", ")}`;
    cardContent.appendChild(activities);

    const cost = document.createElement("p");
    cost.textContent = `Cost: ${trip.cost}`;
    cardContent.appendChild(cost);

    card.appendChild(cardContent);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", fetchTravelDetails);

//ticket booking

document
  .querySelector("#openBookingForm")
  .addEventListener("click", function () {
    console.log("hello");
    document.getElementById("bookingFormModal").classList.remove("hidden");
  });

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("bookingFormModal").classList.add("hidden");
  document.getElementById("confirmationMessage").classList.add("hidden");
  document.getElementById("bookingForm").reset();
});

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const tickets = document.getElementById("tickets").value;

    const bookingDetails = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Destination:</strong> ${destination}<br>
    <strong>Date of Travel:</strong> ${date}<br>
    <strong>Number of Tickets:</strong> ${tickets}
  `;

    document.getElementById("bookingDetails").innerHTML = bookingDetails;
    document.getElementById("confirmationMessage").classList.remove("hidden");
    alert("Successfully booked the ticket!");
  });
