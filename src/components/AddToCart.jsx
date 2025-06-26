import { useNavigate } from "react-router-dom";
import { useCart } from "../store";
export default function AddToCart({ className, product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCart(product);
        navigate("/cart");
      }}
      className={className}
    >
      Add To Cart
    </button>
  );
}
