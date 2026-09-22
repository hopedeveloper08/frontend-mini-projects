import { useEffect, useRef } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { themeChange, themeInitialization } from "../../../../../lib/theme";

export default function TopbarTheme() {
  const themeToggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    themeInitialization();
    if (themeToggleRef.current)
      themeToggleRef.current.checked = localStorage.getItem("theme") === "dark";
  }, []);

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle hover:bg-secondary/20 hover:border-secondary size-12">
      <input
        ref={themeToggleRef}
        type="checkbox"
        onChange={(e) => themeChange(e.target.checked)}
      />
      <HiOutlineSun className="swap-on size-10" />
      <HiOutlineMoon className="swap-off size-10" />
    </label>
  );
}
