import React, { useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Footer, Header, Ourblogmapcomp } from "../components";
import BlogStyle from "../styles/Ourblog.module.css";
import Style from "../styles/_Blog.module.css";
import Ourblogjson from "../json/Ourblog.json";
export default function Blog() {
  const [data, setData] = useState(Ourblogjson);

  return (
    <div>
      <Header />
      <div className={Style.Blog}>
        <Container>
          <div className={Style.BlogFirstDiv}>
            <h2 className={Style.BlogFirstDivHeading}>
              A UX Case Study on Creating a <br />
              Studious Environment for Students
            </h2>
            <h6 className={Style.BlogFirstDivText}>
              Andrew Jonson Posted on 27th January 2021
            </h6>
            <Image src="./Images/people.svg" className="w-100 my-4" />
            <p className={Style.BlogFirstDivContent}>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the <br /> stars had ceased to
              twinkle. By the same illusion which lifts the horizon of the sea
              to the level
              <br />
              of the spectator on a hillside.
            </p>
            <a className={Style.BlogFirstDivBtn}>Read more</a>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row className={BlogStyle.OurblogRow}>
            <h1 className={Style.OurblogRowH1}>Our blog</h1>
            {data.map((i, k) => {
              return (
                <Ourblogmapcomp
                  h6={i.h6}
                  h3={i.h3}
                  h5={i.h5}
                  img1={i.img1}
                  img={i.img}
                  p={i.p}
                />
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
