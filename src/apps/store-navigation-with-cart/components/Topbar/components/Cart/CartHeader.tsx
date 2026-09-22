import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router";

type CartHeaderProps = {
  cartLength: number;
};

export default function CartHeader({ cartLength }: CartHeaderProps) {
  return (
    <div className="flex justify-between items-center text-xs font-medium tracking-tighter">
      <span>{cartLength} مورد</span>
      <Link
        to="#"
        className="flex items-center text-primary hover:bg-secondary/20 hover:pr-1 transition-colors rounded-xl"
      >
        مشاهده سبد خرید
        <HiChevronLeft />
      </Link>
    </div>
  );
}
