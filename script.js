const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const message = document.getElementById('message');
const clickSound = new Audio("hard-typewriter-click-1119.wav")

let totalSeconds = 3 * 60 + 20; // 3 min 20 sec
let interval = null;

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function startTimer() {
  if (interval !== null) return; // prevent multiple clicks

  interval = setInterval(() => {
    totalSeconds--;

    timerDisplay.textContent = formatTime(totalSeconds);

    if (totalSeconds === 80) {
      message.textContent = 'Stir the noodles 🍜';
    }
    if (totalSeconds > 0) {
      startBtn.addEventListener('click', () => {
        clickSound.currentTime = 0; // rewind to start
        clickSound.play();
        startBtn.classList.add("jiggle");
        setTimeout(() => startBtn.classList.remove("jiggle"), 400);
      });
    }
    if (totalSeconds <= 0) {
      clearInterval(interval);
      message.textContent = "It's ramen time!";
      timerDisplay.textContent = "00:00";
    }
  }, 1000);
}

startBtn.addEventListener('click', () => {
  clickSound.currentTime = 0; // rewind to start
  clickSound.play();
  startTimer();
});