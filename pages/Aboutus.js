import {
  Banner2,
  Benefits,
  Bottombar,
  Footer,
  Header,
  OurMissinon,
  Process,
  Teammember,
  Whoweare,
} from "../components";

import "animate.css/animate.min.css";
export default function Aboutus() {
  return (
    <div>
      <Header />
      <Banner2 />
      <Whoweare />
      <Process />
      <OurMissinon />
      <Benefits />
      <Teammember />
      <Bottombar />
      <Footer />
    </div>
  );
}
