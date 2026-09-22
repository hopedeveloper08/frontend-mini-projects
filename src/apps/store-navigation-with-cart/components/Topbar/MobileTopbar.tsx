import { HiOutlineBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router";
import { LOGO_IMAGE_URL } from "../../../../lib/constants";

export default function MobileTopbar() {
  return (
    <div className="w-full h-16 bg-base-200 text-base-content flex md:hidden justify-between items-center px-4 py-3 shadow">
      <label htmlFor="menu-drawer" className="btn btn-ghost p-2">
        <HiOutlineBars3 className="size-6" />
      </label>
      <Link to={"/"}>
        <img src={LOGO_IMAGE_URL} alt="logo" className="size-20" />
      </Link>
      <label htmlFor="cart-drawer" className="btn btn-ghost p-2">
        <HiOutlineShoppingCart className="size-6" />
      </label>
    </div>
  );
}
