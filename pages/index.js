import Head from "next/head";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  Header,
  Banner,
  Footer,
  Howwework,
  Viewourproject,
  Whatourclinets,
  Sendinquiry,
  Bottombar,
  Frequentlyaskedquestions,
  Loader,
  Ourblogmapcomp,
  Featuremapcomp,
} from "../components";
import styles from "../styles/Home.module.css";
import BlogStyle from "../styles/Ourblog.module.css";
import Ourblogjson from "../json/Ourblog.json";
import jsondata from "../json/Features.json";
import FeatureStyle from "../styles/Features.module.css";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [data, setData] = useState(Ourblogjson);
  const [featureData, setFeatureData] = useState(jsondata);
  const AddLoader = () => {
    setToggleMenu(true);
    setTimeout(() => {
      setToggleMenu(false);
    }, 3000);
  };
  return (
    <div className={styles.container}>
      {toggleMenu && (
        <div
          style={{
            zIndex: 999999999999,
            position: "absolute",
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header AboutClick={() => AddLoader()} />
      <Banner />
      <Howwework />
      <Bottombar />
      <Viewourproject />
      <div className={FeatureStyle.Features}>
        <Container>
          <Row className={FeatureStyle.FeaturesRow}>
            <h5 className={FeatureStyle.FeaturesH5}>Features</h5>
            <h2 className={FeatureStyle.FeaturesH2}>
              Design that solves <br />
              problems, one product at <br /> a time
            </h2>
            {featureData.map((i, k) => {
              return <Featuremapcomp img={i.img} h3={i.h3} p={i.p} />;
            })}
          </Row>
        </Container>
      </div>
      <Whatourclinets />
      <Frequentlyaskedquestions />
      <Sendinquiry />
      <div>
        <Container>
          <Row className={BlogStyle.OurblogRow}>
            <h1 className={BlogStyle.OurblogRowH1}>Our blog</h1>
            {data.map((i, k) => {
              if (k % 2 == 0) {
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
              }
            })}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
