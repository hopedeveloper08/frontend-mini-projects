import { HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router";

export default function BackToHome() {
  return (
    <div className="fixed top-3 left-3 btn btn-circle z-50">
      <Link to="/">
        <HiOutlineHome className="size-6" />
      </Link>
    </div>
  );
}
