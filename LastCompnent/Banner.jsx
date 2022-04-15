import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Style from "../styles/Banner.module.css";
import { Hide } from "./Hide";

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={Style.Banner}>
      {isOpen && (
        <Hide
          content={
            <>
              <b>Design your Popup</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <Image
        src="./Images/whatsapp.png"
        className={Style.BannerImg2}
        onClick={togglePopup}
      />

      <Image
        src="./Images/youtube.png"
        className={Style.BannerImg1}
        onClick={togglePopup}
      />
      <Container>
        <Row className={Style.BannerRow}>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <h2 className={Style.BannerH2}>
              Building stellar <br /> websites for early <br /> startups
            </h2>
            <p className={Style.BannerP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className={Style.BannerCol1Div1}>
              <Button className={Style.BannerCol1Div1Btn}>View our work</Button>
              <h5 className={Style.BannerCol1Div1H5}>
                View Pricing <Image src="./Images/Arrow 1.svg" />
              </h5>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Image
              src="./Images/Illustration.svg"
              className={Style.BannerImg}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
