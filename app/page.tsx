import {
  Track,
  Timeline,
  Sponsor,
  Prizes,
  KeyInfo,
  Judges,
  Heroland,
  Footer,
  FAQ,
} from "./pages";
import HeroPage from "./pages/HeroPage";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Heroland />
      <KeyInfo />
      <Timeline />
      <Track />
      <Judges />
      <Prizes />
      <Sponsor />
      <FAQ />
      <Footer />
    </div>
  );
}
