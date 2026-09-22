import { HiArrowRightOnRectangle, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router";

type AccountButtonProps = {
  isLogin: boolean;
  username?: string;
};

export default function AccountButton({
  isLogin,
  username,
}: AccountButtonProps) {
  return (
    <Link
      to="#"
      className="flex items-center gap-2.5 btn btn-ghost hover:bg-secondary/20 hover:border-secondary py-6"
    >
      {isLogin ? (
        <button>
          <HiOutlineUser className="size-10" />
        </button>
      ) : (
        <HiArrowRightOnRectangle className="size-10" />
      )}
      <span className="hidden xl:inline-block text-lg font-medium">
        {isLogin ? username : "ورود | ثبت‌نام"}
      </span>
    </Link>
  );
}
