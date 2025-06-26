import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../store";

export default function QtyCounter({ qty, id }) {
  const { incrementQty , decrementQty} = useCart();
  return (
    <div className="flex gap-[8px] items-center">
      <FaMinus 
      onClick={() => decrementQty(id)}
      className="text-[#000000] text-[16px] font-[400]" />
      <p className="text-[#000000] text-[16px] font-[400] p-2 rounded-2xl shadow-2xl bg-gray-400">
        {qty}
      </p>
      <FaPlus
        onClick={() => incrementQty(id)}
        className="text-[#000000] text-[16px] font-[400]"
      />
    </div>
  );
}
