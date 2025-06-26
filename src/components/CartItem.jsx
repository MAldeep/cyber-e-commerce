import { IoMdClose } from "react-icons/io";
import QtyCounter from "./QtyCounter";
import { useCart } from "../store";

export default function CartItem({ img, title, specs, price, qty, id }) {
  const { removeFromCart } = useCart();
  return (
    <div className="w-full flex justify-start lg:justify-start gap-[30px] border-b-1 border-b-[rgba(0,0,0,0.1)] pb-4">
      <img src={img} className="w-[90px] h-[90px] object-cover rounded-2xl shadow-2xl p-2"/>
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <div>
          <p className="font-[600] text-[#000000] text-[14px]">{title}</p>{" "}
          <p className="font-[400] text-[#000000] text-[14px]">{specs}</p>
        </div>
        <div className=" flex justify-between items-center flex-nowrap lg:flex-wrap w-full lg:w-[110px] gap-5">
          <QtyCounter qty={qty} id={id}/>
          <p className="font-[500] text-[#000000] text-[14px]">{price * qty}{" "}$</p>
          <IoMdClose
            onClick={() => removeFromCart(id)}
            className="font-[400] text-[rgba(0,0,0,0.5)] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
