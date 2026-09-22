import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router";
import { LOGO_IMAGE_URL } from "../../../lib/constants";

export default function SidebarHeader() {
  return (
    <div className="flex justify-between items-center">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={LOGO_IMAGE_URL} alt="logo" className="size-12" />
        <span className="text-base font-semibold tracking-tighter mt-2">
          HopeDeveloper
        </span>
      </Link>
      <label htmlFor="menu-drawer" className="btn btn-ghost px-2">
        <HiXMark className="size-6" />
      </label>
    </div>
  );
}
