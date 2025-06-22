import { useEffect } from "react";
import { baseUrl, useProductStore } from "../store";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  const { URL } = baseUrl();
  const { products } = useProductStore();
  const setProducts = useProductStore((state) => state.setProducts);
  useEffect(() => {
    axios
      .get(`${URL}/api/products?populate=*`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [setProducts]);
  return (
    <div>
      <p className="text-[#6C6C6C] text-[16px] font-[500] mb-[24px]">
        Available Products :{" "}
        <span className="text-[#000000] text-[20px] font-[500]">85</span>
      </p>
      <div className="w-full flex flex-wrap gap-[16px] justify-center">
        {products.map((el) => (
          <ProductCard
            key={el.documentId}
            title={el.title}
            image={URL + el.img.url}
            specs={el.specs}
            price={el.price}
          />
        ))}
      </div>
    </div>
  );
}
