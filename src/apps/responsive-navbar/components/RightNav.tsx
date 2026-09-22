import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router";
import { LOGO_IMAGE_URL } from "../../../lib/constants";

export default function RightNav() {
  return (
    <>
      <label htmlFor="menu-drawer" className="md:hidden btn btn-ghost p-1">
        <HiOutlineBars3 className="size-8" />
      </label>
      <Link
        to="/"
        className="
      flex items-center 
      gap-2
      "
      >
        <img src={LOGO_IMAGE_URL} alt="logo" className="size-18 md:size-16" />
        <span className="hidden lg:block text-base lg:text-lg font-semibold tracking-tighter mt-1">
          HopeDeveloper
        </span>
      </Link>
    </>
  );
}
