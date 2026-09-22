import type { CartItemProps } from "../../Topbar/components/Cart/CartItem";

export default function MobileCartItem({
  title,
  price,
  image,
  discount,
}: CartItemProps) {
  return (
    <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/5 mt-5 pb-5">
      <img src={image} alt="Product Image" className="size-22" />
      <div className="flex flex-col justify-between">
        <div className="font-medium text-sm text-base-content">{title}</div>
        <div>
          {discount && (
            <div className="font-medium text-accent text-xs">
              {discount.toLocaleString()} تومان تخفیف
            </div>
          )}
          <div className="text-base-content text-base font-dana-demibold">
            {price.toLocaleString()}{" "}
            <span className="font-dana text-xs">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
