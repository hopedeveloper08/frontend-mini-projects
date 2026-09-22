import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineMoon,
  HiOutlineShoppingCart,
  HiOutlineSun,
} from "react-icons/hi2";
import { Link } from "react-router";
import { themeChange } from "../../../../../lib/theme";

export default function MobileMenuFooter() {
  return (
    <ul className="menu w-full px-2.5 text-primary text-base flex flex-col justify-start gap-y-2">
      <li>
        <Link to="#" className="flex gap-x-2">
          <HiOutlineArrowRightOnRectangle className="size-5" />
          <span>ورود | ثبت‌نام</span>
        </Link>
      </li>
      <li
        className="cursor-pointer"
        onClick={() => themeChange(localStorage.theme !== "dark")}
      >
        <div className="flex dark:hidden gap-x-2.5">
          <HiOutlineMoon className="size-5" />
          <span>تم تاریک</span>
        </div>
        <div className="hidden dark:flex gap-x-2.5">
          <HiOutlineSun className="size-5" />
          <span>تم روشن</span>
        </div>
      </li>
      <li>
        <label htmlFor="cart-drawer" className="flex gap-x-2">
          <HiOutlineShoppingCart className="size-5" />
          <span>سبد خرید</span>
        </label>
      </li>
    </ul>
  );
}
