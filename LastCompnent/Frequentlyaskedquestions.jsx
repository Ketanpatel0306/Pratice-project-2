import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "../styles/Frequentlyaskedquestions.module.css";
import jsondata from "../json/Frequentlyaskedquestions.json";
import { Frequentlyaskedquestionsmapcomp } from "./Frequentlyaskedquestionsmapcomp";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const Frequentlyaskedquestions = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  return (
    <div className={Style.Frequentlyaskedquestions}>
      <Container>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.FrequentlyaskedquestionsRow}>
            <Col xl={4} lg={4} md={4} sm={12} xs={12}>
              <h2 className={Style.FrequentlyaskedquestionsCol1H2}>
                Frequently asked questions
              </h2>
              <h3 className={Style.FrequentlyaskedquestionsCol1H3}>
                Contact us for more info
              </h3>
            </Col>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              {jsondata.map((i, k) => {
                return (
                  <Frequentlyaskedquestionsmapcomp
                    item={i}
                    index={k}
                    key={k + "Frequently"}
                    isOpen={k === selectedFAQ}
                    onClick={() => {
                      k === selectedFAQ
                        ? setSelectedFAQ(null)
                        : setSelectedFAQ(k);
                    }}
                  />
                );
              })}
            </Col>
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
