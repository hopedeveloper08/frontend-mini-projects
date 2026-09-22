import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <div className="drawer">
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="menu-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 min-h-full w-80 p-4">
          <SidebarHeader />
          <div className="divider h-0"></div>
          <SidebarBody />
          <div className="divider h-0"></div>
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
}
