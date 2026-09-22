import { Link } from "react-router";
import { themeChange } from "../../../lib/theme";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";

export default function SidebarFooter() {
  return (
    <ul className="flex flex-col gap-1 p-2 w-full">
      <li
        className="
            flex gap-2 items-center
            w-full
            px-2 py-1
            text-lg
            rounded-full 
            hover:bg-linear-to-r hover:from-primary/20 hover:to-accent/20 hover:font-medium
            cursor-pointer
            transition-colors
        "
        onClick={() => themeChange(localStorage.theme !== "dark")}
      >
        <HiOutlineMagnifyingGlass />
        <button className="mt-1">جستجو</button>
      </li>
      <li
        className="
            w-full
            px-2 py-1
            text-lg
            rounded-full 
            hover:bg-linear-to-r hover:from-primary/20 hover:to-accent/20 hover:font-medium
            cursor-pointer
            transition-colors
        "
        onClick={() => themeChange(localStorage.theme !== "dark")}
      >
        <span className="hidden dark:flex gap-2 items-center">
          <HiOutlineSun /> تم روشن
        </span>
        <span className="flex dark:hidden gap-2 items-center">
          <HiOutlineMoon /> تم تاریک
        </span>
      </li>
      <li
        className="
            flex gap-2 items-center
            w-full
            px-2 py-1
            text-lg
            rounded-full 
            hover:bg-linear-to-r hover:from-primary/20 hover:to-accent/20 hover:font-medium
            cursor-pointer
            transition-colors
        "
        onClick={() => themeChange(localStorage.theme !== "dark")}
      >
        <HiOutlineUser />
        <Link className="mt-1" to="#">
          حساب کاربری
        </Link>
      </li>
    </ul>
  );
}
