function themeInitialization(): void {
  const html = document.documentElement;
  const savedTheme = localStorage.theme;

  const theme =
    savedTheme === "dark" || savedTheme === "custom-light"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "custom-light";

  html.classList.toggle("dark", theme === "dark");
  html.setAttribute("data-theme", theme);
}

function themeChange(dark: boolean): void {
  const theme = dark ? "dark" : "custom-light";
  const html = document.documentElement;

  localStorage.theme = theme;
  html.classList.toggle("dark", dark);
  html.setAttribute("data-theme", theme);
}

export { themeInitialization, themeChange };
