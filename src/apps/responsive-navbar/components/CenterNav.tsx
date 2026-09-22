import { Link, useLocation } from "react-router";
import { menu } from "../menu";

export default function CenterNav() {
  const location = useLocation();

  return (
    <ul className="hidden md:flex gap-2">
      {menu.map((item) => (
        <li
          key={item.title}
          className={`
            flex gap-1 items-center
            px-4 py-1
            text-base
            rounded-full
            btn btn-ghost
            hover:bg-linear-to-r hover:from-primary/50 hover:to-accent/50
            ${location.pathname === item.link && "bg-linear-to-r from-primary to-accent rounded-full p-2 font-semibold"}
            cursor-pointer
            transition-colors
        `}
        >
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
