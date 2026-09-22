import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import TopbarMenu from "./components/TopbarMenu";
import TopbarTheme from "./components/TopbarTheme";
import MobileTopbar from "./MobileTopbar";

export default function Topbar() {
  return (
    <>
      <MobileTopbar />
      <header className="fixed top-9 right-0 left-0 w-98/100 lg:95/100 xl:w-9/10 hidden md:flex h-24 bg-base-200/40 mx-auto rounded-3xl px-5 xl:px-10 py-5 backdrop-blur-[6px] z-50">
        <div className="flex justify-between items-center w-full">
          <TopbarMenu />
          <div className="flex items-center text-primary-soft gap-x-3 lg:gap-x-5 xl:gap-x-10">
            <div className="flex items-center gap-x-1 lg:gap-x-3 xl:gap-x-5">
              <Cart />
              <TopbarTheme />
            </div>
            <div className="bg-white/20 w-px h-14"></div>
            <Account />
          </div>
        </div>
      </header>
    </>
  );
}
