import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCart } from "../store";

export default function Cart() {
  const { cart } = useCart();
  return (
    <div>
      <Header />
      <div className="w-full py-[40px] px-[16px] lg:py-[40px] lg:px-[160px] flex flex-col lg:flex-row  gap-[25px] lg:gap-[50px]">
        <div className="w-full">
          <h1 className="font-[400] text-[#000000] text-[24px] mb-[40px]">
            Shopping Cart
          </h1>
          {cart.length === 0 && (
            <p className="text-center py-10">Your cart is empty.</p>
          )}
          <div className="flex flex-col gap-[50px] items-center">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.image}
                title={item.title}
                specs={item.specs}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
