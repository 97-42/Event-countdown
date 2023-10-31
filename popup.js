function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown-timer').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Set your target date here (in milliseconds since Unix epoch)
const targetDate = new Date('2023-12-31').getTime();

updateCountdown(targetDate);

// Update the countdown every second
setInterval(function() {
  updateCountdown(targetDate);
}, 1000);
