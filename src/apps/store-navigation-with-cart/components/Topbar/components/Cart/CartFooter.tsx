export default function CartFooter() {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex flex-col">
        <div className="text-secondary-soft tracking-tighter text-xs font-medium">
          مبلغ قابل پرداخت
        </div>
        <div className="text-base-content text-xl font-semibold space-x-1">
          <span>3,100,000</span>
          <span className="text-sm">تومان</span>
        </div>
      </div>
      <button className="w-36 h-14 btn btn-accent text-xl transition-colors">
        ثبت سفارش
      </button>
    </div>
  );
}
