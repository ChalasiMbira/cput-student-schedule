document.addEventListener("DOMContentLoaded", () => {
  const loginScreen = document.getElementById("login-screen");
  const scheduleScreen = document.getElementById("schedule-screen");
  const loginButton = document.getElementById("login-button");
  const groupInput = document.getElementById("login-group-number");
  const groupInfo = document.querySelector(".group-info");

  loginButton.addEventListener("click", () => {
    if (!groupInput.value.trim()) return;

    groupInfo.textContent = `Group: ${groupInput.value}`;
    loginScreen.style.display = "none";
    scheduleScreen.style.display = "flex";

    // later this pulls REAL data per department
    loadDemoSchedule();
  });

  function loadDemoSchedule() {
    // placeholder demo logic
    console.log("Schedule loaded (demo)");
  }
});
