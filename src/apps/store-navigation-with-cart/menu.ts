import type { IconType } from "react-icons";
import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlinePhoneArrowUpRight,
  HiOutlineShoppingBag,
} from "react-icons/hi2";

type MenuItem = {
  title: string;
  Icon?: IconType;
  link: string;
};

export const menu: Array<MenuItem> = [
  {
    title: "صفحه‌اصلی",
    Icon: HiOutlineHome,
    link: "/store-navigation",
  },
  {
    title: "فروشگاه",
    Icon: HiOutlineShoppingBag,
    link: "#",
  },
  {
    title: "بلاگ",
    Icon: HiOutlineBriefcase,
    link: "#",
  },
  {
    title: "درباره‌ما",
    Icon: HiOutlineDocumentText,
    link: "#",
  },
  {
    title: "تماس‌باما",
    Icon: HiOutlinePhoneArrowUpRight,
    link: "#",
  },
];
