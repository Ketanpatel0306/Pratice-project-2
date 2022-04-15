import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/_Ourpricing.module.css";
import Ourpricingjson from "../json/Ourpricing.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Ourpricing = () => {
  const [setData] = useState(Ourpricingjson);

  return (
    <div className={Style.Ourpricing}>
      <Container>
        <Row className={Style.OurpricingRow}>
          <AnimationOnScroll
            animateIn="animate__slideInRight"
            animateOnce={true}
          >
            <h2 className={Style.OurpricingHeading}>Our Pricing Plans</h2>
            <p className={Style.OurpricingText}>
              When you’re ready to go beyond prototyping in Figma, Webflow is
              <br />
              ready to help you bring your designs to life — without coding
              them.
            </p>
          </AnimationOnScroll>
          {setData.map((i, k) => {
            return (
              <Col xl={4} lg={4} md={4} sm={12} xs={12} key={k + "Ourpricing"}>
                <AnimationOnScroll
                  animateIn="animate__slideInRight"
                  animateOnce={true}
                >
                  <div
                    className={Style.OurpricingColDiv}
                    style={{ background: k % 2 == 0 ? "#f4f6fc" : "#1C1E53" }}
                  >
                    <h2
                      className={Style.OurpricingColDivHeading}
                      style={{ color: k % 2 == 0 ? "#282938" : "#FFFFFF" }}
                    >
                      {i.Heading}
                      <span
                        className={Style.OurpricingColDivHeadingSpan}
                        style={{ color: k % 2 == 0 ? "#2405f2" : "#FCD980" }}
                      >
                        {i.span}
                      </span>
                    </h2>
                    <h3
                      className={Style.OurpricingColDivH3}
                      style={{ color: k % 2 == 0 ? "#282938" : "#FFFFFF" }}
                    >
                      {i.h3}
                    </h3>
                    <p
                      className={Style.OurpricingColDivText}
                      style={{ color: k % 2 == 0 ? "#282938" : "#FFFFFF" }}
                    >
                      {i.text}
                    </p>
                    <div
                      className={Style.OurpricingColDivListDivMain}
                      style={{
                        marginTop: k % 2 == 0 ? "50px" : "35px",
                        marginBottom: k % 2 == 0 ? "50px" : "35px",
                      }}
                    >
                      <Row>
                        {i.List.map((item, t) => {
                          return (
                            <Col
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                              className={Style.OurpricingColDivListDiv}
                              key={t + "Ourpricinglist"}
                            >
                              <div>
                                {k == 0 && t > 2 && t < 4 ? (
                                  <Image
                                    src="./Images/Pointer (6).svg"
                                    className={
                                      Style.OurpricingColDivListDivTextH32
                                    }
                                  />
                                ) : (
                                  <Image
                                    src="./Images/Pointer (6).svg"
                                    className={
                                      Style.OurpricingColDivListDivTextH31
                                    }
                                  />
                                )}
                              </div>
                              {/* <h3
                                className={Style.OurpricingColDivListDivTextH3}
                                style={{
                                  borderRight:
                                    k == 0 && t > 2 ? "15px solid gray" : "",
                                  width: k == 0 && t > 2 ? "26px" : "",
                                  height: k == 0 && t > 2 ? "18px" : "",
                                  display:
                                    k == 0 && t > 2 ? " inline-block" : "",
                                  transform:
                                    k == 0 && t > 2 ? "rotate(180deg)" : "",
                                  borderTop:
                                    k == 0 && t > 2
                                      ? "15px solid transparent"
                                      : "",
                                  borderBottom:
                                    k == 0 && t > 2
                                      ? "15px solid transparent"
                                      : " ",
                                  verticalAlign:
                                    k == 0 && t > 2 ? "middle" : "",
                                  marginRight: k == 0 && t > 2 ? "10px" : "",
                                }}
                              ></h3> */}
                              <h5
                                className={Style.OurpricingColDivListDivText}
                                style={{
                                  color:
                                    k % 2 == 1
                                      ? "white"
                                      : "" && k == 0 && t > 2 && t < 4
                                      ? "gray"
                                      : "",
                                }}
                              >
                                {item}
                              </h5>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                    <button
                      className={Style.OurpricingColDivBtn}
                      style={{
                        color: k % 2 == 0 ? " #F4F6FC" : " #282938",
                        background: k % 2 == 0 ? "#282938" : "#FCD980",
                      }}
                    >
                      {i.Btn}
                    </button>
                  </div>
                </AnimationOnScroll>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
