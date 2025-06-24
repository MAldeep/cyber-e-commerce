import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../store";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const { URL } = baseUrl();
  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/api/navs`).then((res) => {
      setLinks(res.data.data);
    });
  }, [URL]);
  return (
    <nav className="justify-between items-center w-[354px] hidden md:flex">
      {links.map((el) => (
        <NavLink
          key={el.documentId}
          to={el.navigation}
          className="text-[16px] text-[#000000] font-[500] cursor-pointer"
        >
          {el.title}
        </NavLink>
      ))}
    </nav>
  );
}
