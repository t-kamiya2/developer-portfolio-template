import { Hero } from "@/components/home/Hero";
import { Strengths } from "@/components/home/Strengths";
import { About } from "@/components/home/About";
import { CareerPreview } from "@/components/home/CareerPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <About />
      <CareerPreview />
    </>
  );
}
