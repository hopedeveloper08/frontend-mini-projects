import { Link } from "react-router";

export default function MobileCartFooter() {
  return (
    <div className="fixed bottom-8">
      <div className="flex justify-between items-center gap-x-4">
        <Link to="#" className="w-30 h-11 btn btn-accent text-base">
          ثبت سفارش
        </Link>
        <div className="flex flex-col">
          <div className="text-secondary-soft tracking-tighter text-xs font-medium">
            مبلغ قابل پرداخت
          </div>
          <div className="text-base-content text-base font-semibold space-x-1">
            <span>3,100,000</span>
            <span className="text-xs">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}
