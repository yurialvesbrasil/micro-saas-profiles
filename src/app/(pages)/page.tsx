import FAQ from "../componets/landing-page/faq";
import Header from "../componets/landing-page/header";
import Hero from "../componets/landing-page/hero";
import Pricing from "../componets/landing-page/pricing";
import VideoExplanation from "../componets/landing-page/video-explanation";

export default function Home() {
  return (
    <>
    <Header />
    <main className="max-w-7xl mx-auto">
      <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <FAQ/>
    </main>
    </>
  );
}
