const THEME_KEY = "theme";

// системная тема
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// применить тему
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

// инициализация
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || getSystemTheme();
  applyTheme(theme);
}

// переключатель
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem(THEME_KEY, newTheme);
}

// синхронизация вкладок
window.addEventListener("storage", (e) => {
  if (e.key === THEME_KEY) {
    applyTheme(e.newValue);
  }
});

// кнопка (если есть)
document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", toggleTheme);
  }
});
