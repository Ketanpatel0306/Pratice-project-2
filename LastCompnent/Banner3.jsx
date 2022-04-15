import React, { useState } from "react";
import { Button, Col, Container, Image, NavLink, Row } from "react-bootstrap";
import Style from "../styles/_Banner3.module.css";
import Banner3json from "../json/Banner3.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Banner3 = () => {
  const [data, setData] = useState(Banner3json);
  const ChangeData = (catogaryItem) => {
    const UpdataItem = Banner3json.filter((curElm) => {
      return curElm.filterdata === catogaryItem;
    });
    setData(UpdataItem);
  };
  return (
    <>
      <div className={Style.Banner3}>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Container>
            <h6 className={Style.Banner3Heading}>What we created</h6>
            <h1 className={Style.Banner3Titel}>Our Work Portfolio</h1>
            <h6 className={Style.Banner3Contant}>
              We help teams create great digital products by providing them with
              tools and technology <br />
              to make the design-to-code process universally accessible.
            </h6>
            <div className={Style.Banner3IconDiv}>
              <Image
                src="./Images/Facebook1.svg"
                className={Style.Banner3IconDivImg}
              />
              <Image
                src="./Images/Twitter1.svg"
                className={Style.Banner3IconDivImg}
              />
              <Image
                src="./Images/Instagram1.svg"
                className={Style.Banner3IconDivImg}
              />
              <Image
                src="./Images/Link1.svg"
                className={Style.Banner3IconDivImg}
              />
            </div>
          </Container>
        </AnimationOnScroll>
      </div>
      <div className={Style.Banner3Secound}>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Container>
            <div className={Style.Banner3SecoundContainerFirstDiv}>
              <NavLink
                className={Style.Banner3SecoundContainerFirstDivLink}
                onClick={() => setData(Banner3json)}
              >
                All
              </NavLink>
              <NavLink
                className={Style.Banner3SecoundContainerFirstDivLink}
                onClick={() => ChangeData("  UI Design")}
              >
                UI Design
              </NavLink>
              <NavLink
                className={Style.Banner3SecoundContainerFirstDivLink}
                onClick={() => ChangeData(" Webflow Design")}
              >
                Webflow Design
              </NavLink>
              <NavLink
                className={Style.Banner3SecoundContainerFirstDivLink}
                onClick={() => ChangeData("Figma Design")}
              >
                Figma Design
              </NavLink>
            </div>
            <Row>
              {data.map((i, k) => {
                return (
                  <Col xl={6} lg={6} md={6} sm={12} xs={12} key={k + "Banner3"}>
                    <div className={Style.Banner3SecoundContainerSecoundDiv}>
                      <Image src={i.img} className="w-100" />
                    </div>
                    <h2
                      className={Style.Banner3SecoundContainerSecoundDivTitel}
                    >
                      {i.Titel}
                    </h2>
                    <h6
                      className={Style.Banner3SecoundContainerSecoundDivContent}
                    >
                      {i.Content}
                    </h6>
                    <div className="d-flex mb-3">
                      <p
                        className={Style.Banner3SecoundContainerSecoundDivText}
                      >
                        {i.Text}
                      </p>
                      <Image
                        src={i.img1}
                        className={
                          Style.Banner3SecoundContainerSecoundDivTextImg
                        }
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
            <div className={Style.Banner3ThirdSection}>
              <h2 className={Style.Banner3ThirdSectionHeading}>
                Let's build something great <br /> together
              </h2>
              <p className={Style.Banner3ThirdSectionText}>
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies <br /> nec dolor sit amet, scelerisque cursus purus.
              </p>
              <Button className={Style.Banner3ThirdSectionBtn}>
                Contact Us
              </Button>
            </div>
          </Container>
        </AnimationOnScroll>
      </div>
    </>
  );
};
