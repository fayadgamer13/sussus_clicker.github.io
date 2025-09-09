let score = 0;
let multiplier = 1;
let cookie = document.getElementById("cookie");
let scoreDisplay = document.getElementById("score");
let clickSound = document.getElementById("clickSound");
let unlockSound = document.getElementById("unlockSound");
let customizeIcon = document.getElementById("customizeIcon");
let customizeMenu = document.getElementById("customizeMenu");
let achievement = document.getElementById("achievement");
let coin = document.getElementById("coin");
let currentCookie = "cookie.png";

// Bounce animation
cookie.addEventListener("click", () => {
  score += multiplier;
  scoreDisplay.textContent = `Score: ${score}`;
  clickSound.play();
  cookie.classList.add("bounce");
  setTimeout(() => cookie.classList.remove("bounce"), 100);

  checkUnlocks();
});

// Achievements and powers
function checkUnlocks() {
  if (score === 10) {
    multiplier = 2;
    setTimeout(() => multiplier = 1, 40000);
  }

  if (score >= 30) {
    customizeIcon.style.display = "block";
  }

  if (score === 100 || score === 230 || score === 1000) {
    unlockSound.play();
    let msg = score === 100 ? "Hard Work Guy!" :
              score === 230 ? "WAY WAY HARD WORKER GUY!!!" :
              "YOU FINISHED!";
    achievement.textContent = msg;
    setTimeout(() => achievement.textContent = "", 5000);
  }
}

// Customize cookie
customizeIcon.addEventListener("click", () => {
  customizeMenu.style.display = "flex";
});

document.querySelectorAll(".cookieOption").forEach(opt => {
  opt.addEventListener("click", () => {
    currentCookie = opt.dataset.cookie;
    cookie.src = `assets/images/${currentCookie}`;
    customizeMenu.style.display = "none";
  });
});

// Coin logic
function spawnCoin() {
  coin.style.display = "block";
  coin.style.left = `${Math.random() * window.innerWidth}px`;
  coin.style.top = `${Math.random() * window.innerHeight}px`;
  setTimeout(() => coin.style.display = "none", 5000);
}

coin.addEventListener("click", () => {
  multiplier += 1;
  coin.style.display = "none";
  setTimeout(() => multiplier -= 1, 20000);
});

setInterval(spawnCoin, 10000);