import { useEffect, useState } from "react";
import { baseUrl, useProductStore } from "../store";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  const { URL } = baseUrl();
  const { products } = useProductStore();
  const setProducts = useProductStore((state) => state.setProducts);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  useEffect(() => {
    axios
      .get(`${URL}/api/products?populate=*`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [setProducts]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  return (
    <div>
      <p className="text-[#6C6C6C] text-[16px] font-[500] mb-[24px] text-center">
        Available Products :{" "}
        <span className="text-[#000000] text-[20px] font-[500]">85</span>
      </p>
      <div className="w-full flex flex-wrap gap-[16px] justify-center mb-[40px]">
        {currentItems.map((el) => (
          <ProductCard
            key={el.documentId}
            title={el.title}
            image={URL + el.img.url}
            specs={el.specs}
            price={el.price}
          />
        ))}
      </div>
      {/* pagination */}
      <div className="flex justify-center gap-2">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num + 1)}
            className={`px-4 py-2 rounded border 
                  ${
                    currentPage === num + 1
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }
                  `}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
