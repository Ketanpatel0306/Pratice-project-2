import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import Style from "../styles/_Useclintes.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const UseClintecomp = ({
  Heading,
  Contante,
  tex,
  img,
  left,
  backgroundColorGrey,
}) => {
  if (left) {
    return (

      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <div className={Style.OurMissinonOdd1}>
          <Container className={Style.OurMissinonOddContainer}>
            <Col xl={7} lg={7} md={7} sm={12} xs={12}>
              <div className={Style.OurMissinonColFirstdiv}>
                <h6 className={Style.OurMissinonHeading}>{Heading}</h6>
                <h3 className={Style.OurMissinonContent}>{Contante}</h3>
                <p className={Style.OurMissinonText}>{tex}</p>
              </div>
            </Col>
            <Col xl={5} lg={5} md={5} sm={12} xs={12}>
              <Image src={img} className="w-100" />
            </Col>
          </Container>
        </div>
      </AnimationOnScroll>

    );
  } else {
    return (

      <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
        <div
          style={{
            backgroundColor: backgroundColorGrey
              ? "rgba(252, 217, 128, 0.1)"
              : "#F4F6FC",
          }}
          className={Style.OurMissinonOdd}
        >
          <Container className={Style.OurMissinonOddContainer1}>
            <Col
              xl={5}
              lg={5}
              md={5}
              sm={12}
              xs={12}
              className={Style.OurMissinonColFirst1}
            >
              <Image src={img} className="w-100" />
            </Col>
            <Col
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className={Style.OurMissinonColFirst2}
            >
              <div className={Style.OurMissinonColFirstdiv1}>
                <h6 className={Style.OurMissinonHeading1}>{Heading}</h6>
                <h3 className={Style.OurMissinonContent}>{Contante}</h3>
                <p className={Style.OurMissinonText}>{tex}</p>
              </div>
            </Col>
          </Container>
        </div>
      </AnimationOnScroll>

    );
  }
};
