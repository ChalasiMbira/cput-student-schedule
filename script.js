/* ================================
   SERVICE WORKER REGISTRATION
================================ */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.error("Service Worker failed", err));
  });
}

/* ================================
   APP LOGIC
================================ */

// Elements
const loginBtn = document.getElementById("login-button");
const loginScreen = document.getElementById("login-screen");
const scheduleScreen = document.getElementById("schedule-screen");
const groupInput = document.getElementById("login-group-number");
const groupInfo = document.querySelector(".group-info");
const timeStatus = document.getElementById("current-time-status");

// Login action
loginBtn.addEventListener("click", () => {
  const group = groupInput.value.trim();

  if (!group) {
    document.getElementById("login-message").textContent =
      "Please enter a valid group or department code.";
    return;
  }

  loginBtn.classList.add("loading");

  setTimeout(() => {
    loginBtn.classList.remove("loading");
    loginScreen.style.display = "none";
    scheduleScreen.style.display = "block";
    groupInfo.textContent = group;
  }, 800);
});

// Live clock
function updateTime() {
  const now = new Date();
  timeStatus.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

updateTime();
setInterval(updateTime, 1000);

// Refresh button (future-proof)
const refreshFab = document.getElementById("refresh-fab");
if (refreshFab) {
  refreshFab.addEventListener("click", () => {
    location.reload();
  });
}
