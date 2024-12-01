// Set the launch date (1 month from now)
const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

// Modal functionality
const modal = document.getElementById("notificationModal");
const modalTitle = document.querySelector(".modal-title");
const modalMessage = document.querySelector(".modal-message");
const modalCloseBtn = document.querySelector(".modal-close-btn");

function showModal(message, type = "success") {
  const title = type === "success" ? "Success!" : "Oops!";
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modal.classList.add("show", type);
}

function hideModal() {
  modal.classList.remove("show", "success", "error");
}

// Close modal when clicking the close button or outside the modal
modalCloseBtn.addEventListener("click", hideModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

// Update countdown every second
function updateCountdown() {
  const now = new Date();
  const distance = launchDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  }
}

// Initial call
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Newsletter subscription
const emailInput = document.querySelector(".email-input");
const subscribeBtn = document.querySelector(".subscribe-btn");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    // Here you would typically send this to your backend
    showModal(
      "Thank you for subscribing! We'll notify you when we launch.",
      "success"
    );
    emailInput.value = "";
  } else {
    showModal("Please enter a valid email address.", "error");
  }
});

// Add animation to countdown items
document.querySelectorAll(".countdown-item").forEach((item, index) => {
  item.style.animationDelay = `${0.1 * (index + 1)}s`;
});

// Smooth scroll for mobile
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
