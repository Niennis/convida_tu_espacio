import Hero from "./components/ui/Hero";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Designs from "./components/ui/Designs";
import Contact from "./components/ui/Contact";

export default function Home() {
  return (
    <div className="font-sans items-center">
      <Hero />
      <FeaturedProducts />
      <Designs />
      <Contact />
    </div>
  );
}
