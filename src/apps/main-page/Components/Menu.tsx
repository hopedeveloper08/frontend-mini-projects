import { Link } from "react-router";

function Menu() {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box gap-5 text-base md:text-lg">
      <li>
        <Link to={"/"}>صفحه اصلی</Link>
      </li>
      <li>
        <Link to={"/spongebob-login-form"}>فرم لاگین باب اسفنجی</Link>
      </li>
      <li>
        <Link to={"/weather"}>آب و هوا </Link>
      </li>
    </ul>
  );
}

export default Menu;
