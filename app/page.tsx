import { AdPopup } from "./component/AdPopup";
import FAQ from "./component/FAQ";
import HeroLander from "./component/HeroLander";
import KeyInfo from "./component/KeyInfo";
import Prizes from "./component/Prizes";
import Sponsor from "./component/Sponsor";
import Timeline from "./component/Timeline";
import Track from "./component/Track";

export default function Home() {
  return (
    <>
      <AdPopup />
      <HeroLander />
      <KeyInfo />
      <Timeline />
      <Track />
      <Prizes />
      <Sponsor />
      <FAQ />
    </>
  );
}
