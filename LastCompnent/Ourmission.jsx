import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/_OurMission.module.css";
import Ourmissionjson from "../json/Ourmission.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const OurMissinon = () => {
  const [data] = useState(Ourmissionjson);

  return (
    <>
      <div className={Style.OurMissinon}>
        <Container>
          <Row className={Style.OurMissinonRow}>
            {data.map((i, k) => {
              {
                if (k % 2 == 0) {
                  return (
                    <>
                      <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        key={k + "OurMissionKey"}
                      >
                        <AnimationOnScroll
                          animateIn="animate__slideInRight"
                          animateOnce={true}
                        >
                          <div className={Style.OurMissinonColFirstdiv}>
                            <h6 className={Style.OurMissinonHeading}>
                              {i.Heading}
                            </h6>
                            <h3 className={Style.OurMissinonContent}>
                              {i.Contante}
                            </h3>
                            <p className={Style.OurMissinonText}>{i.tex}</p>
                          </div>
                        </AnimationOnScroll>
                      </Col>
                      <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                        <AnimationOnScroll
                          animateIn="animate__slideInRight"
                          animateOnce={true}
                        >
                          <Image src={i.Img} className="w-100" />
                        </AnimationOnScroll>
                      </Col>
                    </>
                  );
                }
                if (k % 2 == 1) {
                  return (
                    <div className={Style.OurMissinonOdd}>
                      <Col
                        xl={5}
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        className={Style.OurMissinonColFirst1}
                      >
                        <AnimationOnScroll
                          animateIn="animate__slideInRight"
                          animateOnce={true}
                        >
                          <Image src={i.Img} className="w-100" />
                        </AnimationOnScroll>
                      </Col>
                      <Col
                        xl={7}
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        className={Style.OurMissinonColFirst2}
                      >
                        <AnimationOnScroll
                          animateIn="animate__slideInRight"
                          animateOnce={true}
                        >
                          <div className={Style.OurMissinonColFirstdiv1}>
                            <h6 className={Style.OurMissinonHeading1}>
                              {i.Heading}
                            </h6>
                            <h3 className={Style.OurMissinonContent}>
                              {i.Contante}
                            </h3>
                            <p className={Style.OurMissinonText}>{i.tex}</p>
                          </div>
                        </AnimationOnScroll>
                      </Col>
                    </div>
                  );
                }
              }
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
