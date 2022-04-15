import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Style from "../styles/_Teammember.module.css";
import Teammemberjson from "../json/Teammemer.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Teammember = () => {
  const [data] = useState(Teammemberjson);
  return (
    <div className={Style.Teammember}>
      <Container>
        <Row className={Style.TeammemberRow}>
          <h2 className={Style.TeammemberHeading}>Meet our team</h2>
          {data.map((i, k) => {
            return (
              <Col xl={3} lg={3} md={6} sm={12} xs={12} key={k + "Teammember"}>
                <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
                  <div className={Style.TeammemberColFirstDiv}>
                    <div className={Style.TeammemberColFirstDivImgPosition}>
                      <Image
                        src={i.Img}
                        className={Style.TeammemberColFirstDivImg}
                      />
                      <div
                        className={Style.TeammemberColFirstDivSocialIconDiv}
                      ></div>
                      <div
                        className={Style.TeammemberColFirstDivSocialIconDiv123}
                      >
                        <Image
                          src={i.Img1}
                          className={Style.TeammemberColFirstDivSocialIcon}
                        />
                        <Image
                          src={i.Img2}
                          className={Style.TeammemberColFirstDivSocialIcon}
                        />
                        <Image
                          src={i.Img3}
                          className={Style.TeammemberColFirstDivSocialIcon}
                        />
                      </div>
                    </div>
                    <h4 className={Style.TeammemberColFirstDivHeding}>
                      {i.Heading}
                    </h4>
                    <h6 className={Style.TeammemberColFirstDivText}>
                      {i.Text}
                    </h6>
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
