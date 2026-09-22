import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineCog6Tooth,
  HiOutlineEnvelope,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { Link } from "react-router";

export default function AccountDropdown() {
  return (
    <div
      tabIndex={-1}
      className="dropdown-content bg-base-200/60 rounded-2xl z-1 w-52 p-4 border-t-[3px] border-primary *:text-base"
    >
      <div
        className="
          flex flex-col gap-2
          *:flex *:justify-start *:gap-1 *:rounded *:p-1
          *:btn *:btn-ghost 
          *:hover:bg-secondary/30 *:hover:border-secondary 
      "
      >
        <Link to="#">
          <HiOutlineShoppingBag className="size-5" />
          سفارشات من
        </Link>

        <Link to="#">
          <HiOutlineEnvelope className="size-5" />
          لیست پیام‌ها
        </Link>

        <Link to="#">
          <HiOutlineCog6Tooth className="size-5" />
          اطلاعات کاربری
        </Link>
      </div>
      <div className="divider divider-secondary-soft h-0 my-3"></div>
      <div>
        <Link
          to="#"
          className="          
              flex justify-start rounded p-1
              btn btn-ghost 
              hover:bg-error/30 hover:border-error "
        >
          <HiOutlineArrowRightOnRectangle className="size-5" />
          خروج از حساب
        </Link>
      </div>
    </div>
  );
}
