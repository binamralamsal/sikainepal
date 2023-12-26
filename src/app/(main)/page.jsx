import { CoursesSection } from "./courses-section";
import { HeroSection } from "./hero-section";
import { WhatWeHave } from "./what-we-have-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoursesSection />
      <WhatWeHave />
    </main>
  );
}
