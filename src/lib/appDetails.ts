type App = {
  title: string;
  image: string;
  desc: string;
  link: string;
};

export const apps: Array<App> = [
  {
    title: "فرم لاگین باب‌اسفنجی",
    image: "/images/spongebob-login-form/app.png",
    desc: "فرم لاگین جالب و بامزه انیمیشنی که با چشمش متن کاربر را دنبال میکند و در زمان وارد کردن پسورد به منظور حفظ حریم خصوصی کاربر نگاهش را به بالا میبرد.",
    link: "/spongebob-login-form",
  },
  {
    title: "آب و هوا",
    image: "/images/weather/app.png",
    desc: "دریافت اطلاعات آب و هوا از جمله دما، میزان ابر و میزان بارش و اعلام وضعیت کلی هوا.",
    link: "/weather",
  },
  {
    title: "چک لیست",
    image: "/images/check-list/app.jpg",
    desc: "مدیریت کارها و اولویت بندی برپایه تئوری ماتریس آیزن هاور.",
    link: "/check-list",
  },
  {
    title: "نویگیشن ریسپانسیو",
    image: "/images/responsive-navbar/app.jpg",
    desc: "نویگیشن ریسپانسیو مناسب وب و موبایل با قابلیت شخصی سازی",
    link: "/responsive-navbar",
  },
  {
    title: "نویگیشن فروشگاهی",
    image: "/images/store-navigation/app.jpg",
    desc: "نویگیشن فروشگاهی ریسپانسیو با سبد خرید",
    link: "/store-navigation",
  },
  {
    title: "هدر مدرن",
    image: "/images/modern-header/app.jpg",
    desc: "هدر مدرن برای اولین برخورد کاربران سایت",
    link: "/modern-header",
  },
];
