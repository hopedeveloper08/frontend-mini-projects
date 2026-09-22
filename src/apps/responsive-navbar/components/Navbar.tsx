import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import CenterNav from "./CenterNav";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="lg:container mx-auto px-4">
      <header
        className="
          bg-base-200 
          h-20
          mt-4
          px-4
          rounded-xl
          shadow-lg
          flex justify-between items-center
        "
      >
        <RightNav />
        <CenterNav />
        <LeftNav />
      </header>
      <Sidebar />
    </div>
  );
}
