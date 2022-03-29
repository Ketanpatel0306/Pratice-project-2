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
  Loader,
} from "../components";
import {useState} from "react"

import "animate.css/animate.min.css";
export default function Aboutus() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const AddLoader = () => {
    setToggleMenu(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 3000);
  };
  return (
    <div>
      {toggleMenu && (
        <div
          style={{
            zIndex: 999999999999,
            position: "absolute",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <Header AboutClick={() => AddLoader()} />
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
