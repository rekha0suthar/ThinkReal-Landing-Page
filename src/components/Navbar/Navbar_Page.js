import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import ScrollspyNav from "./scrollSpy";
import "../../assets/css/style.css";
//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed="top"
          style={{ backgroundColor: "wheat" }}
          className={"navbar-custom sticky sticky-dark " + this.props.navClass}
        >
          <Container>
            <NavbarBrand className="logo" href="/">
              {this.props.imglight === true ? (
                <img src={logolight} alt="" height="21" />
              ) : (
                <img src={logodark} alt="" height="35" />
              )}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>

            <Collapse id="navbarCollapse" isOpen={this.state.isOpenMenu} navbar>
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink href={"#" + item.idnm}>
                        {" "}
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
              {/* <div className="call-no">
                <NavLink
                  href="#section"
                  className={
                    this.props.isLight === true ? "text-white" : "text-warning"
                  }
                >
                  Contact Us
                </NavLink>
              </div> */}
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
