import { Link } from "react-router";


type MenuType = {
  id: number;
  title: string;
  link: string;
};

function Menu() {
  const menu = [
    { id: 1, title: "صفحه اصلی", link: "/" },
    { id: 2, title: "فرم لاگین باب اسفنجی", link: "/spongebob-login-form" },
    { id: 3, title: "آب و هوا", link: "/weather" },
    { id: 4, title: "چک‌لسیت روزانه", link: "/todo" },
  ];

  return (
    <ul className="menu lg:menu-horizontal w-80 lg:w-full bg-base-200 rounded-box gap-3 text-base min-h-full p-4 lg:p-0">
      {menu.map((item: MenuType) => (
        <li key={item.id}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
