import {
  HiOutlineMagnifyingGlass,
  HiOutlineBell,
  HiOutlineSun,
  HiOutlineMoon,
} from "react-icons/hi2";
import { AVATAR_IMAGE_URL } from "../../../lib/constants";
import { themeChange } from "../../../lib/theme";
import { useRef } from "react";

export default function LeftNav() {
  const themeToggleRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:block">
        <button className="btn btn-ghost btn-circle">
          <HiOutlineMagnifyingGlass className="size-5 lg:size-6" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <HiOutlineBell className="size-5 lg:size-6" />
        </button>
        <label className="swap swap-rotate btn btn-ghost px-2 rounded-full">
          <input
            ref={themeToggleRef}
            type="checkbox"
            onChange={(e) => themeChange(e.target.checked)}
          />
          <HiOutlineSun className="swap-on size-5 lg:size-6" />
          <HiOutlineMoon className="swap-off size-5 lg:size-6" />
        </label>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden lg:block badge badge-soft badge-success">
          آنلاین
        </div>
        <div>
          <img
            src={AVATAR_IMAGE_URL}
            alt="avatar"
            className="size-12 rounded-full shadow"
          />
        </div>
      </div>
    </div>
  );
}
