import AccordionItem from "../components/AccordionItem";
import AllProducts from "../components/AllProducts";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="w-full h-[100dvh] flex flex-col">
      <Header />
      <main className="flex flex-col lg:flex-row px-[160px] py-[40px] justify-center lg:justify-between items-start gap-[40px]">
        <AccordionItem />
        <AllProducts/>
      </main>
    </div>
  );
}
