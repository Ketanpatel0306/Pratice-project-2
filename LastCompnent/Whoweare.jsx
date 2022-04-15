import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/_Whoweare.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Whoweare = () => {
  return (
    <div className={Style.Whoweare}>
      <Container className={Style.WhoweareContainer}>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.WhoweareRow}>
            <h4 className={Style.WhoweareColFirstDivHeading}>Who we are</h4>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={Style.WhoweareColFirst}
            >
              <div className={Style.WhoweareColFirstDiv}>
                <h2 className={Style.WhoweareColFirstDivContent}>
                  Goal focussed
                </h2>
                <p className={Style.WhoweareColFirstDivText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={Style.WhoweareColSecound}
            >
              <div className={Style.WhoweareColFirstDiv}>
                <h2 className={Style.WhoweareColFirstDivContent}>
                  Continuous improvement
                </h2>
                <p className={Style.WhoweareColFirstDivText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Col>
          </Row>
        </AnimationOnScroll>
        <div className={Style.WhoweareColThirdDiv}>
          <Image src="./Images/WhoWeAreImg.svg" className="w-100" />
        </div>
      </Container>
    </div>
  );
};
