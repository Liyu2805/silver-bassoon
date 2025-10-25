document.getElementById("meowButton").addEventListener("click", function () {
  const btn = document.getElementById("meowButton");
  const msgDiv = document.getElementById("birthdayMessage");

  if (msgDiv.style.display === "none" || msgDiv.style.display === "") {
    msgDiv.style.display = "block";
    btn.innerText = "Hide Meow 🐾";
  } else {
    msgDiv.style.display = "none";
    btn.innerText = "Click Meow";
  }
});

  // 💥 Big burst when page loads
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // 🌸 Soft sprinkle after a delay
  setTimeout(() => {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 10, spread: 180, ticks: 90, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 2 * (timeLeft / duration);
      // Confetti falls from both left and right
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);
  }, 1000); // sprinkle starts 1 sec after burst

window.addEventListener('DOMContentLoaded', () => {
  const song = document.getElementById('song');
  setTimeout(() => {
    song.play().catch(err => {
      console.log("🎵 Autoplay was blocked, waiting for user interaction.");
    });
  }, 100);
});

document.addEventListener("click", () => {
  const song = document.getElementById("song");
  if (song) {
    song.play().catch((e) => {
      console.log("Autoplay prevented:", e);
    });
  }
});
