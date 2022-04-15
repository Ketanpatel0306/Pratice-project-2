import React, { useState } from "react";
import Featurecompjson from "../json/Features.json";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/_Benefits.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
export const Benefits = () => {
  const [setData] = useState(Featurecompjson);
  return (
    <div className={Style.TheBenefits}>
      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <Container>
          <Row className={Style.TheBenefitsRow}>
            <h2 className={Style.TheBenefitsHeading}>
              The benefits of working
              <br /> with us
            </h2>
            {setData.map((i, k) => {
              if (k % 2 == 0) {
                return (
                  <Col
                    xl={4}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    key={k + "Features"}
                  >
                    <div className={Style.FeaturesColDiv}>
                      <Image src={i.img} className={Style.FeaturesColDivImg} />
                      <h3 className={Style.FeaturesColDivH3}>{i.h3}</h3>
                      <p className={Style.FeaturesColDivP}>{i.p}</p>
                    </div>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <Container>
          <Row className={Style.TheBenefitsRow1}>
            <div className={Style.BenefitsLastLogoMainDiv}>
              <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                <div className={Style.BenefitsLastTextDiv}>
                  <h2 className={Style.BenefitsLastTextDivH2}>100.000+</h2>
                  <h5 className={Style.BenefitsLastTextDivH5}>
                    Finsweet Users
                  </h5>
                </div>
              </Col>
              <Col
                xl={9}
                lg={9}
                md={9}
                sm={12}
                xs={12}
                className={Style.BenefitsLastLogoMainDivImg}
              >
                <div className={Style.BenefitsLastLogoMainDivImg}>
                  <Image
                    src="./Images/BenefitsLogo 1.svg"
                    className={Style.BenefitsLastLogoMainDivImg1}
                  />
                  <Image
                    src="./Images/BenefitsLogo 2.svg"
                    className={Style.BenefitsLastLogoMainDivImg1}
                  />
                  <Image
                    src="./Images/BenefitsLogo 3.svg"
                    className={Style.BenefitsLastLogoMainDivImg1}
                  />
                  <Image
                    src="./Images/BenefitsLogo 4.svg"
                    className={Style.BenefitsLastLogoMainDivImg1}
                  />
                  <Image
                    src="./Images/BenefitsLogo 5.svg"
                    className={Style.BenefitsLastLogoMainDivImg1}
                  />
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </AnimationOnScroll>
    </div>
  );
};
