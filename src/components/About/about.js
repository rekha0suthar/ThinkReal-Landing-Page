import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="about">
          <Container>
            <SectionTitle
              title1="About "
              title2="Us"
              desc="Think Real is equipped with essentials that inject grounding and freshness into every construction project. We aim at providing affordable and fine homes to that section of society which seeks pleasure in simplicity, minimalism, and fineness."
            />

            <Row>
              {/* <Col md={4}>
                <h2 className="font-weight-light line-height-1_6 text-dark mb-4">
                  Passionate About Creating Templates For Setup
                </h2>
              </Col> */}
              <Col md={{ size: 8, offset: 1 }}>
                <Row style={{ marginLeft: "120px" }}>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Our Mission
                    </h6>
                    <p className="text-muted font-weight-light">
                      Think Real is fueled by the willingness to provide homes
                      that incorporate the best of civil and architecture
                      disciplines. For us, values are not abstract. We will
                      deliver what is promised. Punctuality, fairness,
                      responsibility, authenticity, and honesty are our stimuli.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h6 className="text-dark font-weight-light f-20 mb-3">
                      Our Vision
                    </h6>
                    <p className="text-muted font-weight-light">
                      Mokokoma Mokhonoana said, “Some things are made way more
                      appealing than they are by our lack of them.” True, but
                      Think Real says, “Don’t let the deficit fool you.
                      Experience the appealing.” We vision to provide the finest
                      homes, without over-peopling your surroundings.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
