import type { IconType } from "react-icons";
import {
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlinePhoneArrowUpRight,
  HiOutlineUserGroup,
  HiOutlineCommandLine,
} from "react-icons/hi2";

type MenuItem = {
  title: string;
  link: string;
  Icon: IconType;
};

export const menu: Array<MenuItem> = [
  {
    title: "صفحه‌اصلی",
    link: "/responsive-navbar",
    Icon: HiOutlineHome,
  },
  {
    title: "خدمات",
    link: "#",
    Icon: HiOutlineCommandLine,
  },
  {
    title: "بلاگ",
    link: "#",
    Icon: HiOutlineDocumentText,
  },
  {
    title: "درباره‌ما",
    link: "#",
    Icon: HiOutlineUserGroup,
  },
  {
    title: "ارتباط‌باما",
    link: "#",
    Icon: HiOutlinePhoneArrowUpRight,
  },
];
