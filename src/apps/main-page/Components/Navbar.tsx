import Menu from "./Menu";
import Theme from "./Theme";

function Navbar() {
  return (
    <nav className="navbar bg-base-200 shadow-lg flex justify-between absolute top-0 z-50">
      <Menu />
      <Theme />
    </nav>
  );
}

export default Navbar;
