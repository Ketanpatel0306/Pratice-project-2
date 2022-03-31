import React, { useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import {
  Bottombar,
  Footer,
  Header,
  Loader,
  Ourblogmapcomp,
  Hide
} from "../components";
import BlogStyle from "../styles/Ourblog.module.css";
import Style from "../styles/_Blog.module.css";
import Ourblogjson from "../json/Ourblog.json";
import BannerStyle from "../styles/Banner.module.css";

export default function Blog() {
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
        <div className="loderCss">
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
      <Bottombar />
      <div className={Style.Blog}>
        <Container>
          <div className={Style.BlogFirstDiv}>
            <h2 className={Style.BlogFirstDivHeading}>
              A UX Case Study on Creating a <br />
              Studious Environment for Students
            </h2>
            <h6 className={Style.BlogFirstDivText}>
              Andrew Jonson Posted on 27th January 2021
            </h6>
            <Image src="./Images/people.svg" className="w-100 my-4" />
            <p className={Style.BlogFirstDivContent}>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the <br /> stars had ceased to
              twinkle. By the same illusion which lifts the horizon of the sea
              to the level
              <br />
              of the spectator on a hillside.
            </p>
            <a className={Style.BlogFirstDivBtn}>Read more</a>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row className={BlogStyle.OurblogRow}>
            <h1 className={Style.OurblogRowH1}>Our blog</h1>
            {Ourblogjson.map((i, k) => {
              return <Ourblogmapcomp item={i} key={k + "blog"} />;
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
