import {
  Benefits,
  Footer,
  Frequentlyaskedquestions,
  Header,
  UseClintecomp,
  Banner,
  Bottombar,
  Loader,
} from "../components";
import { Row } from "react-bootstrap";
import { useState } from "react";
import Useclintejson from "../json/Useclintes.json";
import Style from "../styles/_Useclintes.module.css";
export default function Features() {
  const [data, setData] = useState(Useclintejson);
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
      <Banner />
      <Bottombar />
      <Benefits />

      <div className={Style.OurMissinon}>
        {data.map((i, k) => {
          return (
            <Row className={Style.OurMissinonRow}>
              <UseClintecomp
                backgroundColorGrey={(k + 1) % 4 == 0}
                left={k % 2 == 0}
                Heading={i.Heading}
                Contante={i.Contante}
                tex={i.tex}
                img={i.img}
              />
            </Row>
          );
        })}
      </div>
      <Frequentlyaskedquestions />
      <Footer />
    </div>
  );
}
