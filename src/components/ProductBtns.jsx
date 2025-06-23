export default function ProductBtns() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-[20px]">
      <button className="w-full lg:w-fit py-[16px] px-[55px] bg-[#FFFFFF] border-[#000000] border-[1px] rounded-[6px] text-[#000000] text-[16px] font-[500]">
        Add To Wishlist
      </button>
      <button className="w-full lg:w-fit py-[16px] px-[70px] bg-[#000000]  rounded-[6px] text-[#FFFFFF] text-[16px] font-[500]">
        Add To Cart
      </button>
    </div>
  );
}
