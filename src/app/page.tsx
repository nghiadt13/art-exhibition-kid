import TopNavBar from "@/components/top-nav-bar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BottomMarquee from "@/components/bottom-marquee";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <BottomMarquee />
      </main>
      <Footer />
    </>
  );
}


