import { useNavigate } from "react-router-dom";
import { useWishList } from "../store";

export default function ProductCard({
  id,
  title,
  image,
  specs,
  price,
  context,
  removeId,
}) {
  const navigate = useNavigate();
  const { removeFromWishlist } = useWishList();
  return (
    <div
      className="w-[266px] px-[16px] py-[24px] rounded-[9px] flex flex-col gap-[16px] justify-start items-start bg-[#F6F6F6] cursor-pointer"
      onClick={() => navigate("/" + id)}
    >
      <img
        src={image}
        className="w-[234px] h-[160px] rounded-[8px] object-cover"
      />
      <p className="text-[16px] font-[600] text-[#121212]">{title}</p>
      <p className="text-[16px] font-[600] text-[#121212]">{specs}</p>
      <p className="text-[16px] font-[600] text-[#121212]">{price} $</p>
      <button className="w-full px-[64px] py-[12px] bg-[#000000] text-[#FFFFFF] text-[14px] font-[500] rounded-[8px] cursor-pointer">
        Add To Cart
      </button>
      {context === "wishlist" && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeFromWishlist(removeId);
            // navigate("/");
            // console.log(removeId);
          }}
          className="w-full px-[64px] py-[12px] bg-red-600 text-[#FFFFFF] text-[14px] font-[500] rounded-[8px] cursor-pointer"
        >
          Remove from wishlist
        </button>
      )}
    </div>
  );
}
