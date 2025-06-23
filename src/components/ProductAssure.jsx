import React from "react";
import { IoShieldCheckmarkOutline, IoStorefrontSharp } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";

export default function ProductAssure() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col lg:flex-row justify-center text-center gap-[16px] items-center">
        <div className="text-[#797979] bg-[#F6F6F6] p-[16px] rounded-[12px] text-[30px]">
          <LuTruck />
        </div>
        <p className="font-[500] text-[#717171] text-[14px]">
          Free Delivery <br />
          <span className="text-[#000000]">1-2 day</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center text-center gap-[16px] items-center">
        <div className="text-[#797979] bg-[#F6F6F6] p-[16px] rounded-[12px] text-[30px]">
          <IoStorefrontSharp />
        </div>
        <p className="font-[500] text-[#717171] text-[14px]">
          In Stock <br />
          <span className="text-[#000000]">Today</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center text-center gap-[16px] items-center">
        <div className="text-[#797979] bg-[#F6F6F6] p-[16px] rounded-[12px] text-[30px]">
          <IoShieldCheckmarkOutline />
        </div>
        <p className="font-[500] text-[#717171] text-[14px]">
          Gurantee <br />
          <span className="text-[#000000]">1 Year</span>
        </p>
      </div>
    </div>
  );
}
