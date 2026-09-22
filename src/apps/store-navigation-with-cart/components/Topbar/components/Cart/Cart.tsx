import { HiOutlineShoppingCart } from "react-icons/hi2";
// import CartHeader from "./CartHeader";
// import CartItem from "./CartItem";
// import CartFooter from "./HeaderCartFooter";
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

export default function Cart() {
  const cart = [
    {
      id: 1,
      title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
      price: 1350000,
      discount: 350000,
      image: "/images/store-navigation/p2.png",
    },
    {
      id: 2,
      title: "قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی",
      price: 1700000,
      image: "/images/store-navigation/p1.png",
    },
  ];

  return (
    <div className="relative group">
      <div className="btn btn-ghost btn-circle hover:bg-secondary/20 hover:border-secondary size-12">
        <HiOutlineShoppingCart className="size-10" />
      </div>
      <div className="absolute top-full left-0 w-100 p-5 opacity-0 invisible group-hover:visible group-hover:opacity-100 border-t-[3px] border-primary bg-base-200/60 shadow-normal rounded-2xl text-base-content transition-all delay-75">
        {cart.length ? (
          <>
            <CartHeader cartLength={cart.length} />
            <div className="flex flex-col max-h-125 overflow-y-auto">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  discount={item.discount || undefined}
                  image={item.image}
                />
              ))}
            </div>
            <div className="w-90 mx-auto h-px bg-secondary-soft dark:bg-white/10"></div>
            <CartFooter />
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}
