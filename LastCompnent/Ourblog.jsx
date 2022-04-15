import React from "react";
import { Container, Row } from "react-bootstrap";
import Style from "../styles/Ourblog.module.css";
import { Ourblogmapcomp } from "./Ourblogmap";

export const Ourblog = () => {
  return (
    <div className={Style.Ourblog}>
      <Container>
        <Row className={Style.OurblogRow}>
          <h1 className={Style.OurblogRowH1}>Our blog</h1>

          <Ourblogmapcomp />
        </Row>
      </Container>
    </div>
  );
};
