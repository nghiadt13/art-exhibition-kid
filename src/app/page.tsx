import TopNavBar from "@/components/top-nav-bar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ActivitiesSection from "@/components/activities-section";
import StorySection from "@/components/story-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <StorySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
