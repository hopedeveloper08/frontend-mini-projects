import { Link } from "react-router";

function NotFound404() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-base-200 flex items-center justify-center p-6"
    >
      <div className="card bg-base-100 shadow-xl w-full max-w-lg">
        <div className="card-body items-center text-center py-12">
          <div className="text-8xl font-black text-primary mb-2">404</div>

          <h1 className="card-title text-2xl md:text-3xl">
            این صفحه وجود ندارد
          </h1>

          <p className="text-base-content/60 leading-8 mt-2">
            آدرس واردشده اشتباه است یا صفحه موردنظر حذف شده است.
          </p>

          <div className="card-actions mt-6">
            <Link to="/" className="btn btn-primary">
              🏠 صفحه اصلی
            </Link>

            <button
              className="btn btn-outline"
              onClick={() => window.history.back()}
            >
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound404;
