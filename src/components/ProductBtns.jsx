import { useNavigate } from "react-router-dom";
import { useWishList } from "../store";
import toast from "react-hot-toast";

export default function ProductBtns({ product }) {
  // wishlist handling
  const navigate = useNavigate();
  const { wishList, setWishList } = useWishList.getState();
  const isItemInWishList = wishList.some(
    (item) => item.documentId === product.documentId
  );
  const handleWishList = () => {
    if (isItemInWishList) {
      toast.error("This item is already in the wishlist");
    } else {
      setWishList(product);
      toast.success("This item is added to the wishlist successfully");
      navigate("/wishlist");
    }
  };
  return (
    <div className="w-full flex flex-col lg:flex-row gap-[20px]">
      <button
        onClick={() => handleWishList()}
        className="w-full lg:w-fit py-[16px] px-[55px] bg-[#FFFFFF] border-[#000000] border-[1px] rounded-[6px] text-[#000000] text-[16px] font-[500] cursor-pointer hover:text-[#FFFFFF] hover:bg-[#000000] transition-all hover:"
      >
        Add To Wishlist
      </button>
      <button className="w-full lg:w-fit py-[16px] px-[70px] bg-[#000000]  rounded-[6px] text-[#FFFFFF] text-[16px] font-[500] cursor-pointer hover:text-[#000000] hover:bg-[#FFFFFF] transition-all hover:border-[#000000] hover:border-[1px]">
        Add To Cart
      </button>
    </div>
  );
}
