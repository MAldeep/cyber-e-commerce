import { useEffect, useState } from "react";
import { baseUrl } from "../store";
import axios from "axios";
import SearchField from "./SearchField";
import NavLinks from "./NavLinks";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { URL } = baseUrl();
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/api/home?populate=*`).then((res) => {
      setLogo(URL + res.data.data.logo.url);
    });
  }, []);
  return (
    <header className="w-full px-[16px] md:px-[160px] py-[16px] flex justify-between items-center border-b-[#B5B5B5] border-b-[1px]">
      <img src={logo} />
      <SearchField className="bg-[#F5F5F5] hidden md:flex gap-[10px] rounded-2xl items-center p-[16px] w-[372px]" />
      <NavLinks />
      <CiHeart className="text-[#000000] text-[25px] hidden md:block" />
      <BsCart3 className="text-[#000000] text-[20px] hidden md:block" />
      <IoPersonOutline className="text-[#000000] text-[20px] hidden md:block" />
      <RxHamburgerMenu className="text-[#000000] text-[25px] md:hidden"/>
    </header>
  );
}
