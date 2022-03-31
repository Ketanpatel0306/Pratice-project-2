import { useState } from "react";
import { Bottombar, Footer, Header, Loader, Hide } from "../components";
import ReadBlogStyle from "../styles/_Readblog.module.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import BannerStyle from "../styles/Banner.module.css";

export default function Readblog() {
  const [data, setData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const AddLoader = () => {
    setData(true);
    setTimeout(() => {
      setData(false);
    }, 3000);
  };
  return (
    <div>
      {data && (
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
      <div className={ReadBlogStyle.Blog}>
        <Container>
          <div className={ReadBlogStyle.BlogFirstDiv}>
            <h2 className={ReadBlogStyle.BlogFirstDivHeading}>
              A UX Case Study on Creating a <br />
              Studious Environment for Students
            </h2>
            <h6 className={ReadBlogStyle.BlogFirstDivText}>
              Andrew Jonson Posted on 27th January 2021
            </h6>
            <Image src="./Images/people.svg" className="w-100 my-4" />
          </div>
          <Row>
            <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <h2 className={ReadBlogStyle.BlogColFirstDivHeading}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <h6 className={ReadBlogStyle.BlogColFirstDivText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h6>
              <h2 className={ReadBlogStyle.BlogColFirstDivHeading}>
                Ut enim ad minim veniam, quis nostrud.
              </h2>
              <h6 className={ReadBlogStyle.BlogColFirstDivText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h6>
              <ul className={ReadBlogStyle.AboutProjectDivUl}>
                <li className={ReadBlogStyle.AboutProjectDivLi}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </li>
                <li className={ReadBlogStyle.AboutProjectDivLi}>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </li>
                <li className={ReadBlogStyle.AboutProjectDivLi}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </li>
              </ul>
              <h6 className={ReadBlogStyle.BlogColFirstDivText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h6>
              <Image src="./Images/photo1.svg" className="w-100 mb-4" />
              <h2 className={ReadBlogStyle.BlogColFirstDivHeading}>
                Ut enim ad minim veniam, quis nostrud.
              </h2>
              <h6 className={ReadBlogStyle.BlogColFirstDivText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </h6>
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
