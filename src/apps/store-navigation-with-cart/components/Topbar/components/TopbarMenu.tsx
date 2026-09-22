import { LOGO_IMAGE_URL } from "../../../../../lib/constants";
import { Link, useLocation } from "react-router";
import { menu } from "../../../menu";

export default function TopbarMenu() {
  const pathname = useLocation().pathname;

  return (
    <nav className="flex gap-x-5 xl:gap-10 items-center h-14">
      <Link to={"/"}>
        <img src={LOGO_IMAGE_URL} alt="Logo" className="size-20" />
      </Link>
      <ul className="flex gap-1 lg:gap-2 mt-1">
        {menu.map((item) => (
          <li
            key={item.title}
            className={`
              relative group 
              btn btn-ghost 
              px-2
              text-lg lg:text-xl
              hover:bg-secondary/20 hover:border-secondary
              ${pathname === item.link && "font-bold bg-secondary/40"}
            `}
          >
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
