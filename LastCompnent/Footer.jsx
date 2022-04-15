import React from "react";
import { Container, Image, Row, Col, Navbar, Nav } from "react-bootstrap";
import Style from "../styles/Footer.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Footer = () => {
  return (
    <div>
      <div className={Style.Footer}>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Container>
            <Row className={Style.FooterRow}>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className={Style.FooterCol1Div}>
                  <Image src="./Images/Finsweet white logo 1.svg" />
                  <p className={Style.FooterCol1DivP}>
                    We are always open to discuss your project and <br />
                    improve your online presence.
                  </p>
                  <div className={Style.FooterCol1Div2}>
                    <div className="">
                      <h7 className={Style.FooterCol1Div2H7}>Email me at</h7>
                      <p className={Style.FooterCol1Div2P}>
                        contact@website.com
                      </p>
                    </div>
                    <div className={Style.FooterCol1Div2TextDiv}>
                      <h7 className={Style.FooterCol1Div2H7}>Call us</h7>
                      <p className={Style.FooterCol1Div2P}>0927 6277 28525</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className={Style.FooterCol2Div}>
                  <h1 className={Style.FooterCol2DivH1}>Lets Talk!</h1>
                  <p className={Style.FooterCol2DivP}>
                    We are always open to discuss your project, improve your
                    online presence and help with your UX/UI design challenges.
                  </p>
                  <div className={Style.FooterCol2DivImgDiv}>
                    <Image
                      src="./Images/facebook.svg"
                      className={Style.FooterCol2DivImg}
                    />
                    <Image
                      src="./Images/instagram.svg"
                      className={Style.FooterCol2DivImg}
                    />
                    <Image
                      src="./Images/twetter.svg"
                      className={Style.FooterCol2DivImg}
                    />
                    <Image
                      src="./Images/linkd.svg"
                      className={Style.FooterCol2DivImg}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </AnimationOnScroll>
      </div>

      <Navbar expand="lg">
        <Container>
          <h5 className={Style.FooterH5}>Copyright 2022, Finsweet.com</h5>

          <Nav className={Style.HeaderNav}>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              Home
            </Nav.Link>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              About us
            </Nav.Link>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              Features
            </Nav.Link>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              Pricing
            </Nav.Link>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              FAQ
            </Nav.Link>
            <Nav.Link href="" className={Style.HeaderNavLink}>
              Blog
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
