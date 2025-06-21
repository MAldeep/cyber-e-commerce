export default function ProductCard({ title, image, specs, price }) {
  return (
    <div className="w-[266px] px-[16px] py-[24px] rounded-[9px] flex flex-col gap-[16px] justify-start items-start bg-[#F6F6F6]">
      <img src={image} className="w-[234px] h-[160px] rounded-[8px] object-cover" />
      <p className="text-[16px] font-[600] text-[#121212]">{title}</p>
      <p className="text-[16px] font-[600] text-[#121212]">{specs}</p>
      <p className="text-[16px] font-[600] text-[#121212]">{price} $</p>
      <button className="w-full px-[64px] py-[12px] bg-[#000000] text-[#FFFFFF] text-[14px] font-[500] rounded-[8px] cursor-pointer">
        Add To Cart
      </button>
    </div>
  );
}
