import { Link } from "react-router";
import Menu from "./Components/Menu";
import Theme from "./Components/Theme";

function Navbar() {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-200 w-full flex justify-between px-3 lg:px-5">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden flex-none lg:flex items-center gap-2">
            <Link to={"/"}>
              <img
                className="w-24 h-full hidden lg:inline-block"
                src="/images/logo.png"
                alt="logo"
                loading="lazy"
              />
            </Link>
            <Menu />
          </div>
          <Link to={"/"}>
            <img
              className="w-24 h-full lg:hidden"
              src="/images/logo.png"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <Theme />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
