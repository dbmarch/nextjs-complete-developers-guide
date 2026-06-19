import Hero from "@/components/hero";
import img from "public/reliability.jpg";
export default function ReliabilityPage() {
  return (
    <Hero
      imgData={img}
      imgAlt="welding"
      title="Super high reliabilty hosting"
    />
  );
}
