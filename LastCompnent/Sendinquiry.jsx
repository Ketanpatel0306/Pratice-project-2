import React from "react";
import { Col, Container, Image, Row, Form, Button } from "react-bootstrap";
import Style from "../styles/Sendinquiry.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Sendinquiry = () => {
  return (
    <div className={Style.Sendinquiry}>
      <Container>
        <Row className={Style.SendinquiryRow}>
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={Style.SendinquiryCol}
          >
            <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
              <div className={Style.SendinquiryColDiv}>
                <Image src="./Images/Woman.svg" className="w-100" />
                <div className={Style.SendinquiryColDivText}>
                  <h2 className={Style.SendinquiryColH2}>
                    Building stellar websites for early startups
                  </h2>
                  <p className={Style.SendinquiryColP}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>
                </div>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={Style.SendinquiryCol2}
          >
            <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
              <div className={Style.SendinquiryCol2Div}>
                <h3 className={Style.SendinquiryCol2DivH3}>Send inquiry</h3>
                <p className={Style.SendinquiryCol2DivP}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <Form className={Style.SendinquiryCol2DivForm}>
                  <Form.Control
                    type="text"
                    placeholder="Your Name "
                    className={Style.SendinquiryCol2DivFormInput}
                  />
                  <Form.Control
                    type="email"
                    placeholder="Email "
                    className={Style.SendinquiryCol2DivFormInput}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Paste your Figma design URL"
                    className={Style.SendinquiryCol2DivFormInput}
                  />
                </Form>
                <Button className={Style.SendinquiryCol2DivBtn}>
                  Send an inquiry
                </Button>
                <h4 className={Style.SendinquiryCol2DivH4}>
                  Get in touch with us <Image src="./Images/Arrow 1.svg" />
                </h4>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
