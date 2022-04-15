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
import { Row,Image } from "react-bootstrap";
import { useState } from "react";
import Useclintejson from "../json/Useclintes.json";
import Style from "../styles/_Useclintes.module.css";
import BannerStyle from "../styles/Banner.module.css";

export default function Features() {
  const [data, setData] = useState(Useclintejson);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
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
         className="loderCss"
        >
          <Loader />
        </div>
      )}
      {isOpen && (
        <Hide
          content={
            <>
              <b>Design your Popup</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <Image
        src="./Images/whatsapp.png"
        className={BannerStyle.BannerImg2}
        onClick={togglePopup}
      />

      <Image
        src="./Images/youtube.png"
        className={BannerStyle.BannerImg1}
        onClick={togglePopup}
      />
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
