import React from "react";
import { Col, Image } from "react-bootstrap";
import BlogStyle from "../styles/Ourblog.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Ourblogmapcomp = (props) => {
  const { h6, h3, h5, img1, img, p } = props.item;
  return (
    <Col xl={4} lg={4} md={4} sm={12} xs={12} className={BlogStyle.OurblogCol}>
      <AnimationOnScroll animateIn="animate__slideInRight" animateOnce={true}>
        <div className={BlogStyle.OurblogColMainDiv}>
          <Image src={img} className="w-100" />
          <h6 className={BlogStyle.OurblogColMainDivH6}>{h6}</h6>
          <h3 className={BlogStyle.OurblogColMainDivH3}>{h3}</h3>
          <h5 className={BlogStyle.OurblogColMainDivH5}>{h5}</h5>
          <p className={BlogStyle.OurblogColMainDivP}>
            {p}
            <Image src={img1} className="px-3" />
          </p>
        </div>
      </AnimationOnScroll>
    </Col>
  );
};
