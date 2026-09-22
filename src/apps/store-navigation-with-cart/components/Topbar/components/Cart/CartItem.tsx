export type CartItemProps = {
  title: string;
  image: string;
  price: number;
  discount?: number;
};

export default function CartItem({
  title,
  image,
  price,
  discount,
}: CartItemProps) {
  return (
    <div className="flex gap-x-2.5 border-b border-b-gray-500 dark:border-b-white/5 mt-5 pb-5">
      <img src={image} alt="Product Image" className="size-30" />
      <div className="flex flex-col justify-between">
        <div className="font-medium text-base text-base-content">{title}</div>
        <div>
          {discount && (
            <div className="font-medium badge badge-accent px-1 text-xs">
              {discount.toLocaleString()} تومان تخفیف
            </div>
          )}
          <div className="text-base-content text-xl font-medium">
            {price.toLocaleString()}{" "}
            <span className="font-dana text-sm">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
