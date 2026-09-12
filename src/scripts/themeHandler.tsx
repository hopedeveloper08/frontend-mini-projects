function initializeTheme(): void {
  const html = document.documentElement;
  const savedTheme = localStorage.theme;

  const theme =
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

  // Tailwind
  html.classList.toggle("dark", theme === "dark");

  // daisyUI
  html.setAttribute("data-theme", theme);
}

function themeChange(dark: boolean): void {
  const theme = dark ? "dark" : "light";
  const html = document.documentElement;

  // ذخیره انتخاب کاربر
  localStorage.theme = theme;

  // Tailwind
  html.classList.toggle("dark", dark);

  // daisyUI
  html.setAttribute("data-theme", theme);
}

export { initializeTheme, themeChange };
