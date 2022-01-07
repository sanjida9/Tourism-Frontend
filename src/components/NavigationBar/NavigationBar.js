import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/images/imagesss.png";

const NavigationBar = () => {
  const { allContext } = useAuth();
  const { user, logOut } = allContext;
  const { displayName, photoURL, email } = user;
  console.log(user);

  const activeStyle = {
    fontWeight: "bold",
    color: "orange",
  };

  return (
    <div className="sticky-top">
      <Navbar className="bg-blue" expand="lg">
        <Container>
          <Navbar.Brand
            sticky="top"
            as={NavLink}
            className="text-white "
            to="/home"
          >
            <h2>
              <img height="80px" src={logo} alt="" /> World Tours
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-md-flex align-items-center">
              {/* <Nav.Link as={NavLink} className="text-white" to="/home">
                <NavLink to="/home" activeStyle={activeStyle}>
                  Home
                </NavLink>
              </Nav.Link> */}

              <NavLink
                className="mx-3 d-block"
                to="/home"
                activeStyle={activeStyle}
              >
                Home
              </NavLink>
              <NavLink
                className="mx-3 d-block"
                to="/flight"
                activeStyle={activeStyle}
              >
                Book Flight Ticket
              </NavLink>

              {!displayName ? (
                <div>
                  {/* <Nav.Link as={NavLink} className="text-white" to="/register">
                    <NavLink to="/register" activeStyle={activeStyle}>
                      Register
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/login">
                    <NavLink to="/login" activeStyle={activeStyle}>
                      Login
                    </NavLink>
                  </Nav.Link> */}

                  <NavLink
                    className="mx-3"
                    to="/register"
                    activeStyle={activeStyle}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="mx-3"
                    to="/login"
                    activeStyle={activeStyle}
                  >
                    Login
                  </NavLink>
                </div>
              ) : (
                <div className="d-md-flex align-items-center">
                  {/* <Nav.Link as={NavLink} className="text-white" to="/contact">
                    <NavLink to="/newSpot" activeStyle={activeStyle}>
                      New Spot
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/contact">
                    <NavLink to="/myOrders" activeStyle={activeStyle}>
                      My Orders
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link as={NavLink} className="text-white" to="/contact">
                    <NavLink to="/manageAllOrders" activeStyle={activeStyle}>
                      Manage All Orders
                    </NavLink>
                  </Nav.Link> */}

                  <NavLink
                    className="mx-3 d-block"
                    to="/newSpot"
                    activeStyle={activeStyle}
                  >
                    New Spot
                  </NavLink>
                  <NavLink
                    className="mx-3 d-block"
                    to="/myOrders"
                    activeStyle={activeStyle}
                  >
                    My Orders
                  </NavLink>
                  <NavLink
                    className="mx-3 d-block"
                    to="/manageAllOrders"
                    activeStyle={activeStyle}
                  >
                    Manage All Orders
                  </NavLink>
                  <h5 className="text-light fw-bold me-2">{displayName}</h5>

                  <button onClick={logOut} className="btn btn-light">
                    Sign Out
                  </button>

                  {/* <NavDropdown
                    title={
                      <img
                        style={{ width: "45px", borderRadius: "50%" }}
                        src={photoURL || ""}
                        alt=""
                      />
                    }
                    id="basic-nav-dropdown"
                  >
                    <div className="text-center" id="profileDrop">
                      <h6>{displayName}</h6>
                      <p className="">{email}</p>
                      <button onClick={logOut} className="btn btn-success">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown> */}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
