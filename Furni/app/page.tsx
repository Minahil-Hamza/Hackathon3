import Banner from "@/components/hero-banner";
import NewCeramics from "@/components/NewCeramics";
import TopSellingProducts from "@/components/top-selling";
import Brand from "@/components/Brand";
import ProductListing from "@/components/ProductListning";

export default function Home() {
  return (
   <div>
    <Banner/>
    <hr className="bg-black"/>
    <Brand/>
    <hr className="bg-black"/>
    <NewCeramics/>
    <hr className="bg-black"/>
    <TopSellingProducts/>
    <hr className="bg-black"/>
    <ProductListing/>
    <hr className="bg-black"/>
    <NewCeramics/>  
   </div>
  );
}
