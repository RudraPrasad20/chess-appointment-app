import Cards from "@/components/Cards";
import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import UpcomintCourses from "@/components/UpcomintCourses";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
<>
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

<HeroSection/>
<Courses/>
<Why/>
<Cards/>
<UpcomintCourses/>
    </main>
</>
  );
}


