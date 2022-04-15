import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/_Banner2.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Banner2 = () => {
  const [data, setData] = useState(true);
  setTimeout(() => {
    setData(false);
  }, 1000);

  return (
    <div className={Style.Banner2}>
      <Container>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.Banner2Row}>
            <Col xl={6} lg={6} md={6} sm={12} xs={12}>
              <div className={Style.Banner2ColFirstDiv}>
                <h4 className={Style.Banner2H4}>About us</h4>
                <h2 className={Style.Banner2Heading}>
                  Our designs solve problems
                </h2>
                <p className={Style.Banner2Content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
              className={Style.Banner2ColSecound}
            >
              <Image src="./Images/BannerImg.svg" className="w-100" />
            </Col>
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
