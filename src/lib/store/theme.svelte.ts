export const theme = $state({
  value: "light"
})

export const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
  document.documentElement.classList.toggle("dark", theme.value === "dark")
  localStorage.setItem("theme", theme.value)
}
