import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Style from "../styles/Viewourproject.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Viewourproject = () => {
  return (
    <div className={Style.Viewourproject}>
      <Container>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.ViewourprojectRow}>
            <div className={Style.ViewourprojectHeadingDiv}>
              <h2 className={Style.ViewourprojectHeadingDivH2}>
                View our projects
              </h2>
              <p className={Style.ViewourprojectHeadingDivP}>
                View More <Image src="./Images/Arrow 3.svg" />
              </p>
            </div>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className={Style.ViewourprojectCol1Div}>
                <Image src="./Images/Card.svg" className="w-100" />
                <div className={Style.ViewourprojectCol1DivHidden}>
                  <h4 className={Style.ViewourprojectCol1DivHiddenH4}>
                    Workhub office Webflow Webflow Design
                  </h4>
                  <h6 className={Style.ViewourprojectCol1DivHiddenH6}>
                    Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                    aliquam{" "}
                  </h6>
                  <p className={Style.ViewourprojectCol1DivHiddenP}>
                    View Project{" "}
                    <Image
                      src="./Images/Arrow 1.svg"
                      style={{ color: "fcd980" }}
                    />
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <div className={Style.ViewourprojectCol2MainDiv1}>
                <Image
                  src="./Images/Rectangle 1313.svg"
                  className={Style.Image_cla}
                />
                <div className={Style.ViewourprojectCol2MainDiv2}>
                  <h3 className={Style.ViewourprojectCol2Div2h3}>
                    Unisaas Website Design
                  </h3>
                  <p className={Style.ViewourprojectCol2Div2P}>
                    View portfolio <Image src="./Images/Arrow 1.svg" />
                  </p>
                </div>
              </div>
              <div className={Style.ViewourprojectCol2MainDiv1}>
                <Image
                  src="./Images/Card (1).svg"
                  className={Style.Image_cla}
                />
                <div className={Style.ViewourprojectCol2MainDiv2}>
                  <h3 className={Style.ViewourprojectCol2Div2h3}>
                    Unisaas Website Design
                  </h3>
                  <p className={Style.ViewourprojectCol2Div2P}>
                    View portfolio <Image src="./Images/Arrow 1.svg" />
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
