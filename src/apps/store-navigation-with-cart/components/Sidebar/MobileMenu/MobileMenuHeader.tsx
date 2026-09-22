import { HiXMark } from "react-icons/hi2";
import { LOGO_IMAGE_URL } from "../../../../../lib/constants";
import { Link } from "react-router";

export default function MobileMenuHeader() {
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="flex h-10 gap-x-2.5">
        <img src={LOGO_IMAGE_URL} alt="logo" />
      </Link>
      <label htmlFor="menu-drawer" className="btn btn-ghost px-2">
        <HiXMark className="size-5" />
      </label>
    </div>
  );
}
