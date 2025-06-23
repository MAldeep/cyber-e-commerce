import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { baseUrl } from "../store";
import { useEffect, useState } from "react";
import ProductAssure from "../components/ProductAssure";
import ProductBtns from "../components/ProductBtns";

export default function ProductDetails() {
  const params = useParams();
  const { URL } = baseUrl();
  const productId = params.productId;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchingProductData = async (id) => {
      try {
        const response = await axios.get(
          `${URL}/api/products/${id}?populate=*`
        );
        return response.data;
      } catch (error) {
        console.error(
          "there is an error trying to catch data from strapi",
          error
        );
        return null;
      }
    };
    const loadProduct = async () => {
      const data = await fetchingProductData(productId);
      data && setProduct(data.data);
      setLoading(false);
    };
    loadProduct();
  }, [URL, productId]);
  // if (!product) {
  //   return <p>product not found</p>;
  // }
  // const { attributes } = product;
  // console.log(attributes);
  if (loading) {
    return <p className="pt-24 text-[40px] font-[600]">loading ...</p>;
  }
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full px-[16px] lg:px-[160px] py-[40px]">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-start gap-[40px]">
          <img
            src={URL + product.img.url}
            className="w-[343px] lg:w-[536px] h-[329px] lg:h-[516px] object-cover rounded-2xl shadow"
          />
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <h1 className="font-[700] text-[40px] text-[#000000]">
              {product.title}
            </h1>
            <p className="font-[500] text-[32px] text-[#000000]">
              {product.price} $
            </p>
            <p className="text-[14px] text-[#6C6C6C] font-[400]">
              {product.specs} Enhanced capabilities thanks toan enlarged display
              of 6.7 inchesand work without rechargingthroughout the day.
              Incredible photosas in weak, yesand in bright lightusing the new
              systemwith two cameras
            </p>
            <ProductBtns/>
            <ProductAssure/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
