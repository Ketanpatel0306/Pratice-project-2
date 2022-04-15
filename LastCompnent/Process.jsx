import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Style from "../styles/_Process.module.css";
import ProcessJson from "../json/Process.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
export const Process = () => {
  const [data] = useState(ProcessJson);

  return (
    <div className={Style.Process}>
      <Container>
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOnce={true}>
          <Row className={Style.ProcessRow}>
            <h2 className={Style.ProcessHeading}>The process we follow</h2>
            {data.map((i, k) => {
              return (
                <Col xl={3} lg={3} md={6} sm={12} xs={12} key={k + "Process"}>
                  <div className={Style.ProcessColFirstDiv}>
                    <div className={Style.ProcessColFirstDivCircle}></div>
                    <div className={Style.ProcessColFirstDivLine}></div>
                    <h3 className={Style.ProcessColFirstDivContent}>
                      {i.contenct}
                    </h3>
                    <p className={Style.ProcessColFirstDivText}>{i.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </AnimationOnScroll>
      </Container>
    </div>
  );
};
