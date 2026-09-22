import { HiXMark } from "react-icons/hi2";

export default function MobileCartHeader() {
  return (
    <div className="flex justify-between items-center py-5 text-zinc-700 dark:text-white">
      <label htmlFor="cart-drawer" className="btn btn-ghost px-2">
        <HiXMark className="size-6" />
      </label>
      <div className="font-medium text-base">سبد خرید</div>
    </div>
  );
}
