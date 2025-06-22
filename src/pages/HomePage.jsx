import AccordionItem from "../components/AccordionItem";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <Header />
      <main className="w-full flex flex-col lg:flex-row justify-start py-[30px] lg:py-[40px] px-[15px] lg:px-[160px] gap-[30px]">
        <AccordionItem />
        <AllProducts />
      </main>
      <Footer />
    </div>
  );
}
