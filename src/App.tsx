import { useEffect } from "react";

import { Outlet } from "react-router";

import { themeInitialization } from "./lib/theme";
import Theme from "./apps/components/Theme";
import BackToHome from "./apps/components/BackToHome";

function App() {
  useEffect(() => {
    themeInitialization();
  }, []);

  return (
    <main className="w-screen min-h-[90vh]">
      <Theme />
      <BackToHome />
      <Outlet />
    </main>
  );
}

export default App;
