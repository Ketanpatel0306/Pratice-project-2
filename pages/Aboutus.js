import { useState } from "react";
import { Image } from "react-bootstrap";
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
  Hide,
} from "../components";
import BannerStyle from "../styles/Banner.module.css";
import "animate.css/animate.min.css";
export default function Aboutus() {
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
      <Banner2 />
      <Whoweare />
      <Process />
      <OurMissinon />
      <Benefits />
      <Teammember />

      <Footer />
    </div>
  );
}
