// Set target countdown date
const countdownDate = new Date("2026-01-01T00:00:00").getTime();

// Get elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const timerEl = document.getElementById("timer");
const finishedMessageEl = document.getElementById("finished-message");

// Function to update countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate remaining time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If countdown is finished
  if (distance <= 0) {
    clearInterval(countdownInterval);  // stop updating
    timerEl.style.display = "none";    // hide timer
    finishedMessageEl.classList.remove("hidden"); // show final message
  } else {
    // Update HTML
    daysEl.innerText = days < 10 ? "0" + days : days;
    hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  }
}

updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);
