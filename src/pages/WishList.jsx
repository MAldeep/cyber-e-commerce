import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { baseUrl, useWishList } from "../store";

export default function WishList() {
  const { URL } = baseUrl();
  const { wishList } = useWishList();
  return (
    <div className="flex flex-col">
      <Header />
      <p className="text-[40px] bg-[#F6F6F6] p-4 w-fit my-[30px] mx-[16px] lg:my-[40px] lg:mx-[160px] rounded-3xl shadow">
        WishList
      </p>
      <div className="w-full py-[30px] px-[16px] lg:py-[40px] lg:px-[160px] flex flex-col lg:flex-row justify-center items-center flex-wrap gap-[20px]">
        {wishList.map((el) => (
          <ProductCard
            id={el.documentId}
            key={el.documentId}
            title={el.title}
            image={URL + el.img.url}
            specs={el.specs}
            price={el.price}
            removeId={el.id}
            context="wishlist"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
