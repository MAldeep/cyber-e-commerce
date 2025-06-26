import { useEffect, useState } from "react";
import { baseUrl, useWishList } from "../store";
import axios from "axios";
import SearchField from "./SearchField";
import NavLinks from "./NavLinks";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // wishlist counter
  const { wishList } = useWishList();
  const navigate = useNavigate();
  const { URL } = baseUrl();
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/api/home?populate=*`).then((res) => {
      setLogo(URL + res.data.data.logo.url);
    });
  }, [URL]);
  return (
    <header className="w-full px-[16px] md:px-[160px] py-[16px] flex justify-between items-center border-b-[#B5B5B5] border-b-[1px]">
      <img
        src={logo}
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      <SearchField className="bg-[#F5F5F5] hidden md:flex gap-[10px] rounded-2xl items-center p-[16px] w-[372px]" />
      <NavLinks />
      <div className="relative">
        <CiHeart
          onClick={() => navigate("/wishlist")}
          className="wishlist text-[#000000] text-[30px] hidden md:block cursor-pointer"
        />
        <p className="absolute bottom-[0px] right-[0px] rounded-[50%] border-2 w-[14px] h-[14px] text-[11px] hidden md:flex justify-center items-center bg-[#000] text-[#fff] p-1.5">
          {wishList.length}
        </p>
      </div>
      <BsCart3
        onClick={() => navigate("/cart")}
        className="text-[#000000] text-[25px] hidden md:block"
      />
      <IoPersonOutline className="text-[#000000] text-[25px] hidden md:block" />
      <RxHamburgerMenu className="text-[#000000] text-[25px] md:hidden" />
    </header>
  );
}
