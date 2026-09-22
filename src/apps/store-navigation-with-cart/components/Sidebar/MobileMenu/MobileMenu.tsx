import MobileMenuFooter from "./MobileMenuFooter";
import MobileMenuHeader from "./MobileMenuHeader";
import MobileMenuItems from "./MobileMenuItems";

export default function MobileMenu() {
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content text-sm min-h-full w-80 p-4">
          <MobileMenuHeader />
          <div className="divider divider-secondary-soft h-0"></div>
          <MobileMenuItems />
          <div className="divider divider-secondary-soft h-0"></div>
          <MobileMenuFooter />
        </div>
      </div>
    </div>
  );
}
