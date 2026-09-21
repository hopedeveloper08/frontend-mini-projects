import { useEffect, useRef } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { themeChange } from "../../lib/theme";

export default function Theme() {
  const themeToggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (themeToggleRef.current)
      themeToggleRef.current.checked = localStorage.getItem("theme") === "dark";
  }, []);

  return (
    <div className="fixed top-15 left-3 btn btn-circle z-50">
      <label className="swap swap-rotate p-3 rounded-full">
        <input
          ref={themeToggleRef}
          type="checkbox"
          onChange={(e) => themeChange(e.target.checked)}
        />
        <HiOutlineSun className="swap-on size-8" />
        <HiOutlineMoon className="swap-off size-8" />
      </label>
    </div>
  );
}
