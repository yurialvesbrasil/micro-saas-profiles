import FAQ from "../componets/landing-page/faq";
import Hero from "../componets/landing-page/hero";
import Pricing from "../componets/landing-page/pricing";
import VideoExplanation from "../componets/landing-page/video-explanation";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero/>
      <VideoExplanation/>
      <Pricing/>
      <FAQ/>
    </main>
  );
}
