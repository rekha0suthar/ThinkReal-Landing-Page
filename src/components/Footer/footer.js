import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";
//Import Footer link
import FooterLinks from "./footer-links";
//Import Logo
import logodark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  state = {
    links: [
      {
        id: 1,
        title: "Services",
        child: [
          { title: "Digital Marketing", link: "/" },
          { title: "Business Analysis", link: "/" },
          { title: "How It Work", link: "/" },
          { title: "Fix & Flip", link: "/" },
          { title: "Social Activation", link: "/" },
        ],
      },
      {
        id: 2,
        title: "About Us",
        child: [
          { title: "Contact Us", link: "/" },
          { title: "FAQs", link: "/" },
          { title: "Blog", link: "/" },
          { title: "Privacy Policy", link: "/" },
        ],
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="footer">
          <Container>
            <Row>
              <Col lg={4}>
                <div className="mb-4">
                  <Link to="/">
                    <img
                      src={logodark}
                      alt=""
                      className="logo-dark"
                      height="30"
                    />
                  </Link>
                  <p className="text-muted mt-4 mb-2">
                    Web:{" "}
                    <a
                      style={{ color: "red" }}
                      href="https://www.thinkreal.in/"
                    >
                      {" "}
                      https://www.thinkreal.in/
                    </a>
                  </p>
                  <h6 className="text-muted font-weight-normal">
                    +91 9845995781, +91 9845995782
                  </h6>
                  <br />
                  <a href="https://twitter.com">
                    <FaTwitter className="icons" />
                  </a>{" "}
                  <a href="https://www.facebook.com">
                    <FaFacebook className="icons" />
                  </a>{" "}
                  <a href="https://plus.google.com/">
                    <FaGoogle className="icons" />
                  </a>{" "}
                  <a href="https://www.linkedin.com">
                    <FaLinkedin className="icons" />
                  </a>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  {this.state.links.map((link, key) => (
                    <Col key={key} md={4}>
                      <h6 className="footer-list-title text-dark mb-3">
                        {link.title}
                      </h6>
                      <ul className="list-unstyled company-sub-menu">
                        {link.child.map((fLink, key) => (
                          <li key={key}>
                            <Link to={fLink.link}>{fLink.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                  <Col md={4}>
                    <h6 className="footer-list-title text-dark mb-3">
                      Our Address
                    </h6>
                    <p className="text-muted f-14">
                      #406, basement floor 1st c cross 7th block koramangala,
                      bangalore, 560095
                    </p>
                    <h6 className="text-muted pb-2">
                      Email:{" "}
                      <a style={{ color: "red" }} href="info@thinkreal.in">
                        info@thinkreal.in
                      </a>
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            {/* Render footer links */}
            <FooterLinks />
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Footer;
