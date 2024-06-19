import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import UpComing from "@/components/UpComing";
import WhyChooeseUs from "@/components/WhyChooeseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooeseUs />
      <TestimonialCard />
      <UpComing />
    </main>
  );
}
