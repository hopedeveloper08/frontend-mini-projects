import SpongebobLoginForm from './apps/spongebob-login-form/SpongebobLoginForm'
import Weather from './apps/weather/Weather'
import ToDo from './apps/to-do/ToDo'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [])

  return (
    <>
      {/* <ToDo /> */}
      <Weather />
      <SpongebobLoginForm />
    </>
  )
}

export default App
