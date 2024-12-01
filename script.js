// Set the launch date (1 month from now)
const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

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
    alert("Thank you for subscribing! We'll notify you when we launch.");
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
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
