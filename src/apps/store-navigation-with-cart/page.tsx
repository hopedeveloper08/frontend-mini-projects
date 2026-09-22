import MobileCart from "./components/Sidebar/MobileCart/MobileCart";
import MobileMenu from "./components/Sidebar/MobileMenu/MobileMenu";
import Topbar from "./components/Topbar/Topbar";

export default function StoreNavigation() {
  return (
    <main className="h-screen md:bg-[url(/images/store-navigation/bg.jpg)] bg-no-repeat">
      <Topbar />
      <MobileMenu />
      <MobileCart />
    </main>
  );
}
