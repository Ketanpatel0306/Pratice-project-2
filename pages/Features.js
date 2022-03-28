import {
  Benefits,
  Footer,
  Frequentlyaskedquestions,
  Header,
  UseClintecomp,
} from "../components";
import { Row } from "react-bootstrap";
import { useState } from "react";
import Useclintejson from "../json/Useclintes.json";
import Style from "../styles/_Useclintes.module.css";
export default function Features() {
  const [data, setData] = useState(Useclintejson);
  return (
    <div>
      <Header />
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
