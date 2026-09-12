import { useEffect } from "react";

import { Route, Routes } from "react-router";
import Main from "./apps/main-page/Main";

import SpongebobLoginForm from "./apps/spongebob-login-form/SpongebobLoginForm";
import Weather from "./apps/weather/Weather";
import ToDo from "./apps/to-do/ToDo";

import { initializeTheme } from "./scripts/themeHandler";
import Navbar from "./apps/navbar/Navbar";
import NotFound404 from "./apps/not-found/NotFound404";

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <main className="w-screen h-screen bg-base-300">
      <Navbar />
      <Routes>
        <Route path="/main" Component={Main} />
        <Route path="/spongebob-login-form" Component={SpongebobLoginForm} />
        <Route path="/weather" Component={Weather} />
        <Route path="/" Component={ToDo} />
        <Route path="/*" Component={NotFound404} />
      </Routes>
    </main>
  );
}

export default App;
