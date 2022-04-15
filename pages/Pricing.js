import {
  Footer,
  Frequentlyaskedquestions,
  Header,
  Ourpricing,
  Loader,
  Bottombar,
  Hide,
} from "../components";
import { Image } from "react-bootstrap";
import { useState } from "react";
import BannerStyle from "../styles/Banner.module.css";

export default function Pricing() {
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
      <Ourpricing />
      <Frequentlyaskedquestions />
      <Footer />
    </div>
  );
}
