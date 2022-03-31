import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  NavLink,
  Button,
  Form,
} from "react-bootstrap";
import { Bottombar, Footer, Header, Loader, Hide } from "../components";
import Style from "../styles/_Readcasestudy.module.css";
import ReadBlogStyle from "../styles/_Readblog.module.css";
import BannerStyle from "../styles/Banner.module.css";

export default function Readcasestudy() {
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
      <div>
        <Container>
          <Row className={Style.ReadcasestudyFirstRow}>
            <Col xl={9} lg={9} md={9} sm={12} xs={12}>
              <div className={Style.ReadcasestudyFirstDiv}>
                <h6 className={Style.ReadcasestudyFirstDivHeading}>
                  Web design and development
                </h6>
                <h1 className={Style.ReadcasestudyFirstDivTItel}>
                  Finsweet Design case studies
                </h1>
                <p className={Style.ReadcasestudyFirstDivContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={3} md={3} sm={12} xs={12}></Col>
            <div className={Style.ReadcasestudySecoundDivImg}>
              <Image src="./Images/image 15.svg" className="w-100" />
            </div>
            <div className={Style.ReadcasestudyThirdDiv}>
              <div className={Style.ReadcasestudyThirdDivInnerDiv1}>
                <h6 className={Style.ReadcasestudyThirdDivInnerDiv1H6}>
                  Client
                </h6>
                <h3 className={Style.ReadcasestudyThirdDivInnerDiv1H3}>
                  facebook.com
                </h3>
              </div>
              <div className={Style.ReadcasestudyThirdDivInnerDiv1}>
                <h6 className={Style.ReadcasestudyThirdDivInnerDiv1H6}>
                  Service
                </h6>
                <h3 className={Style.ReadcasestudyThirdDivInnerDiv1H3}>
                  Product Design
                </h3>
              </div>
              <div className={Style.ReadcasestudyThirdDivInnerDiv1}>
                <h6 className={Style.ReadcasestudyThirdDivInnerDiv1H6}>
                  Deliverable
                </h6>
                <h3 className={Style.ReadcasestudyThirdDivInnerDiv1H3}>
                  UI Screens, UX Flow & Prototype
                </h3>
              </div>
            </div>
          </Row>
        </Container>
        <Container>
          <div className={Style.AboutProjectDiv}>
            <h2 className={Style.AboutProjectDivHeading}>About the project</h2>
            <p className={Style.AboutProjectDivContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className={Style.AboutProjectDivUl}>
              <li className={Style.AboutProjectDivLi}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className={Style.AboutProjectDivLi}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className={Style.AboutProjectDivLi}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className={Style.AboutProjectDivLi}>
                DExcepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>
            <div className={Style.AboutProjectDivImgDiv}>
              <Image src="./Images/image 15 (6).svg" className="w-100" />
            </div>
            <h2 className={Style.AboutProjectDivHeading2}>How we do it</h2>
            <p className={Style.AboutProjectDivContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className={Style.AboutProjectDivUl}>
              <li className={Style.AboutProjectDivLi}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <li className={Style.AboutProjectDivLi}>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </li>
              <li className={Style.AboutProjectDivLi}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </li>
              <li className={Style.AboutProjectDivLi}>
                DExcepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>
            <Row>
              <div className={Style.AboutProjectSecoundDivMain}>
                <div className={Style.AboutProjectSecoundDiv}>
                  {/* <Col xl={3} lg={3} md={12} sm={12} xs={12}> */}
                  <NavLink className={Style.AboutProjectSecoundDivLink1}>
                    Keywords
                  </NavLink>
                  {/* </Col> */}
                  {/* <Col
                    xl={9}
                    lg={9}
                    md={12}
                    sm={12}
                    xs={12}
                    className={Style.AboutProjectSecoundDivSecound}
                  > */}
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    Design
                  </NavLink>
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    UI/UX
                  </NavLink>
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    Wireframing
                  </NavLink>
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    Branding
                  </NavLink>
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    Development
                  </NavLink>
                  <NavLink className={Style.AboutProjectSecoundDivLink}>
                    webflow
                  </NavLink>
                  {/* </Col> */}
                </div>
              </div>
            </Row>
          </div>
          <div className={Style.Banner3ThirdSection}>
            <h2 className={Style.Banner3ThirdSectionHeading}>
              Let's build something great <br /> together
            </h2>
            <p className={Style.Banner3ThirdSectionText}>
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies <br /> nec dolor sit amet, scelerisque cursus purus.
            </p>
            <Button className={Style.Banner3ThirdSectionBtn}>Contact Us</Button>
          </div>
        </Container>
        {/* contect us page */}
        <Container>
          <h2 className={Style.AboutProjectDivHeading1}>Contact Us</h2>
          <h6 className={Style.FormContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore.
          </h6>
          <Form className={Style.Form} style={{}}>
            <Form.Group
              className={Style.FormGroup}
              controlId="exampleForm.ControlInput1"
            >
              <div className={Style.FormDiv}>
                <Form.Label className={Style.FormDivTitel}>Name</Form.Label>
                <Form.Control
                  className={Style.FormDivBody}
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className={Style.FormDiv1}>
                <Form.Label className={Style.FormDivTitel}>Email </Form.Label>
                <Form.Control
                  className={Style.FormDivBody}
                  type="email"
                  placeholder="Enter your Emial"
                />
              </div>
            </Form.Group>
            <Form.Group
              className={Style.FormGroup}
              controlId="exampleForm.ControlInput1"
            >
              <div className={Style.FormDiv}>
                <Form.Label className={Style.FormDivTitel}>Subject</Form.Label>
                <Form.Control
                  className={Style.FormDivBody}
                  type="email"
                  placeholder="Provide context"
                />
              </div>
              <div className={Style.FormDiv1}>
                <Form.Label className={Style.FormDivTitel}>Subject</Form.Label>
                <Form.Control
                  className={Style.FormDivBody}
                  type="email"
                  placeholder="Select Subject"
                />
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className={Style.FormDivTitel}>Message</Form.Label>
              <Form.Control
                className={Style.FormDivBody}
                as="textarea"
                placeholder="Write your  question here"
                rows={3}
              />
            </Form.Group>
            <Button className={Style.FormDivBtn}>Send Messege</Button>
          </Form>
        </Container>
        {/* Privacy Policy */}
        <Container>
          <Row className={Style.PrivacypolicyRow}>
            <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <h2 className={Style.AboutProjectDivHeading1}>Privacy Policy</h2>
              <h6 className={Style.FormContent}>
                When you’re ready to go beyond prototyping in Figma, Webflow’s
                <br /> ready to help you bring your
              </h6>
              <h3 className={Style.AboutProjectDivHeading}>
                Lorem ipsum dolor.
              </h3>
              <p className={Style.AboutProjectDivContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
                <span style={{ color: "blue" }}> Excepteur sint occaecat </span>{" "}
                cupidatat non proident.
              </p>
              <p className={Style.AboutProjectDivContent}>
                Sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <h3 className={Style.AboutProjectDivHeading}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className={Style.AboutProjectDivContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat{" "}
                <span style={{ color: "blue" }}> cupidatat </span>
                non proident. Dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
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
              <p className={Style.AboutProjectDivContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi.
              </p>
            </Col>
            <Col xl={2} lg={2} md={2} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
