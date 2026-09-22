import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./page";
import SpongebobLoginForm from "./apps/spongebob-login-form/SpongebobLoginForm";
import Weather from "./apps/weather/Weather";
import ToDo from "./apps/to-do/ToDo";
import NotFound404 from "./apps/components/NotFound404";
import ResponsiveNavbar from "./apps/responsive-navbar/page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "spongebob-login-form",
        Component: SpongebobLoginForm,
      },
      {
        path: "weather",
        Component: Weather,
      },
      {
        path: "check-list",
        Component: ToDo,
      },
      {
        path: "responsive-navbar",
        Component: ResponsiveNavbar,
      },
    ],
    ErrorBoundary: NotFound404,
  },
]);
