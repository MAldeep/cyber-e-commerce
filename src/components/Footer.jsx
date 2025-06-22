import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../store";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const { URL } = baseUrl();
  const [logo, setLogo] = useState();
  const [description, setDescription] = useState("");
  const [service, setService] = useState([]);
  const [assistance, setAssistance] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/api/dark-logo?populate=*`).then((res) => {
      setLogo(URL + res.data.data.img.url);
    });
    axios.get(`${URL}/api/footer-descriptions`).then((res) => {
      setDescription(res.data.data[0].title);
    });
    axios.get(`${URL}/api/footer-assistances`).then((res) => {
      setAssistance(res.data.data);
    });
    axios.get(`${URL}/api/footer-services`).then((res) => {
      setService(res.data.data);
    });
  }, []);
  return (
    <div className="w-full bg-[#121212] px-[160px] py-[104px] flex flex-col gap-[40px] items-start justify-start">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        <div>
          <img src={logo} className="w-[65px] object-cover mb-[24px]" />
          <p className="text-[#CFCFCF] text-[14px] font-[500] w-full lg:w-[384px]">
            {description}
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <p className="font-[600] text-[16px] text-[#FFFFFF]">Services</p>
          {service.map((el) => (
            <NavLink
              key={el.documentId}
              className="font-[400] text-[14px] text-[#CFCFCF]"
            >
              {el.title}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <p className="font-[600] text-[16px] text-[#FFFFFF]">
            Assistance to Buyer
          </p>
          {assistance.map((el) => (
            <NavLink
              key={el.documentId}
              className="font-[400] text-[14px] text-[#CFCFCF]"
            >
              {el.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-[40px]">
        <FaTwitter className="text-[20px] text-[#FFFFFF] cursor-pointer"/>
        <FaFacebookF className="text-[20px] text-[#FFFFFF] cursor-pointer"/>
        <FaTiktok className="text-[20px] text-[#FFFFFF] cursor-pointer"/>
        <RiInstagramFill className="text-[20px] text-[#FFFFFF] cursor-pointer"/>
      </div>
    </div>
  );
}
