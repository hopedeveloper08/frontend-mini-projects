import { Link } from "react-router";
import { menu } from "../menu";

export default function SidebarBody() {
  return (
    <ul className="flex flex-col gap-1 p-2 w-full">
      {menu.map((item) => (
        <li
          key={item.title}
          className={`
            flex gap-2 items-center
            w-full
            px-2 py-1
            text-base
            rounded-full 
            hover:bg-linear-to-r hover:from-primary/20 hover:to-accent/20 hover:font-medium
            ${location.pathname === item.link && "bg-linear-to-r from-primary to-accent rounded-full p-2 font-semibold"}
            cursor-pointer
            transition-colors
        `}
        >
          <item.Icon />
          <Link className="mt-1" to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
