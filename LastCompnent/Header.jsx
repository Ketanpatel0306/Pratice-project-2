import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Button,
  Offcanvas,
  NavLink,
} from "react-bootstrap";
import Style from "../styles/Header.module.css";
import "animate.css/animate.min.css";

export const Header = ({ AboutClick }) => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window.location.pathname);
  });
  return (
    <div className={Style.Header}>
      <div className="desktop">
        <Navbar expand="lg">
          <Container>
            <Image src="./Images/Finsweet white logo 1.svg" />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={Style.HeaderToggle}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={Style.HeaderNav}>
                <NavLink
                  href="/home"
                  active={activeLink == "/home"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  Home
                </NavLink>
                <NavLink
                  href="/aboutus"
                  active={activeLink == "/aboutus"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  About us
                </NavLink>
                <NavLink
                  href="/readblog"
                  active={activeLink == "/readblog"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  Features
                </NavLink>
                <NavLink
                  href="/pricing"
                  active={activeLink == "/pricing"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  Pricing
                </NavLink>
                <NavLink
                  href="/work"
                  active={activeLink == "/work"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  FAQ
                </NavLink>
                <NavLink
                  href="/readcasestudy"
                  active={activeLink == "/readcasestudy"}
                  className={Style.HeaderNavLink}
                  onClick={() => AboutClick()}
                >
                  Blog
                </NavLink>
              </Nav>
              <Button
                href="/features"
                active={activeLink == "/features"}
                className={Style.HeaderBtn}
                onClick={() => AboutClick()}
              >
                Contact Us
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <div className={Style.Header}> */}
      <div className="mobile">
        <Navbar expand={false}>
          <Container>
            <Image src="./Images/Finsweet white logo 1.svg" />
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className={Style.HeaderToggle}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton className={Style.Header}>
                <Image src="./Images/Finsweet white logo 1.svg" />
              </Offcanvas.Header>
              <Offcanvas.Body className={Style.Header}>
                <Nav className={Style.HeaderNav}>
                  <Nav.Link
                    href="/home"
                    active={activeLink == "/home"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/aboutus"
                    active={activeLink == "/aboutus"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    About us
                  </Nav.Link>
                  <Nav.Link
                    href="/readblog"
                    active={activeLink == "/readblog"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    Features
                  </Nav.Link>
                  <Nav.Link
                    href="/pricing"
                    active={activeLink == "/pricing"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    Pricing
                  </Nav.Link>
                  <Nav.Link
                    href="/work"
                    active={activeLink == "/work"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    FAQ
                  </Nav.Link>
                  <Nav.Link
                    href="/readcasestudy"
                    active={activeLink == "/readcasestudy"}
                    className={Style.HeaderNavLink}
                    onClick={() => AboutClick()}
                  >
                    Blog
                  </Nav.Link>
                </Nav>
                <Button
                  href="/blog"
                  active={activeLink == "/blog"}
                  className={Style.HeaderBtn}
                  onClick={() => AboutClick()}
                >
                  Contact Us
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
    // </div>
  );
};
