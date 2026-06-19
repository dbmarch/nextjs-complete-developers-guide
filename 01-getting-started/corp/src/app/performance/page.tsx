import Hero from "@/components/hero";
import img from "public/performance.jpg";
export default function PerformancePage() {
  return (
    <Hero
      imgData={img}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
