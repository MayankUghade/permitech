import { Title } from "@/components/Title";
import { MeteorDemo } from "@/components/card";
import { Features } from "@/components/features";
import { MarqueeDemo } from "@/components/marquee";
import { BentoDemo } from "@/components/product2";
import ProductImage from "@/components/productimage";

export default function Home() {
  return (
    <div className="p-3 ">
      <ProductImage />
      <BentoDemo />
      <Features />
      <MarqueeDemo />
      <MeteorDemo />
    </div>
  );
}
