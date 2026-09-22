import { Link, useLocation } from "react-router";
import { menu } from "../../../menu";

export default function MobileMenuItems() {
  const pathname = useLocation().pathname;

  return (
    <ul className="menu w-full gap-y-1 *:px-2.5">
      {menu.map((item) => (
        <li
          key={item.title}
          className={`text-base text-base-content w-full rounded-md ${pathname === item.link && "bg-primary-soft/20 font-medium text-primary"}`}
        >
          <Link to={item.link} className="flex justify-start gap-x-2">
            {item.Icon && <item.Icon className="size-5" />}
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
