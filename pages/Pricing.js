import {
  Footer,
  Frequentlyaskedquestions,
  Header,
  Ourpricing,
  Loader,
} from "../components";
import { useState } from "react";

export default function Pricing() {
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
      <Ourpricing />
      <Frequentlyaskedquestions />
      <Footer />
    </div>
  );
}
