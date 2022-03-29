import { Col, Container, Row, Image, NavLink, Button } from "react-bootstrap";
import { Footer, Header } from "../components";
import Style from "../styles/_Readcasestudy.module.css";
export default function Readcasestudy() {
  return (
    <div>
      <Header />
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
              <div className={Style.AboutProjectSecoundDiv}>
                <NavLink className={Style.AboutProjectSecoundDivLink1}>
                  Keywords
                </NavLink>
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
      </div>
      <Footer />
    </div>
  );
}
