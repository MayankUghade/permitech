import { Title } from "@/components/Title";
import { Features } from "@/components/features";
import { BentoDemo } from "@/components/product2";
import ProductImage from "@/components/productimage";

export default function Home() {
  return (
    <div className="p-3">
      <ProductImage />
      <BentoDemo />
      <Features />
    </div>
  );
}
