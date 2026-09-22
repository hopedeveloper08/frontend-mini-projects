import MobileCartFooter from "./MobileCartFooter";
import MobileCartHeader from "./MobileCartHeader";
import MobileCartItem from "./MobileCartItem";

export default function MobileCart() {
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
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content text-sm min-h-full w-80 px-4">
          <MobileCartHeader />
          <div className="divider divider-secondary-soft h-0 m-0"></div>
          <div className="h-[80vh] overflow-y-auto">
            <div className="flex flex-col">
              {cart.map((item) => (
                <MobileCartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  discount={item.discount || undefined}
                  image={item.image}
                />
              ))}
            </div>
          </div>
          <div className="divider divider-secondary-soft h-0 m-0"></div>
          <MobileCartFooter />
        </div>
      </div>
    </div>
  );
}
