const themeButton = document.getElementById("themeButton");
const statusMessage = document.getElementById("statusMessage");
const image = document.getElementById("animatedImage");

// Load and apply theme from localStorage
function applyStoredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    statusMessage.textContent = "Dark theme enabled 🌙";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    statusMessage.textContent = "Light theme enabled ☀️";
  }
}

// Toggle theme and store in localStorage
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyStoredTheme();

  // Animate image when theme is toggled
  image.classList.add("animate");
  setTimeout(() => image.classList.remove("animate"), 600);
}

themeButton.addEventListener("click", toggleTheme);

// Initialize on load
applyStoredTheme();
