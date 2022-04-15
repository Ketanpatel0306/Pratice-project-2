import React from "react";
import { Col, Image } from "react-bootstrap";
import FeatureStyle from "../styles/Features.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// export const Featuremapcomp = ({ img, h3, p }) => {
export const Featuremapcomp = (props) => {
  const { h3, p, img } = props.data;
  return (
    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
      <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
        <div className={FeatureStyle.FeaturesColDiv}>
          <Image src={img} className={FeatureStyle.FeaturesColDivImg} />
          <h3 className={FeatureStyle.FeaturesColDivH3}>{h3}</h3>
          <p className={FeatureStyle.FeaturesColDivP}>{p}</p>
        </div>
      </AnimationOnScroll>
    </Col>
  );
};
