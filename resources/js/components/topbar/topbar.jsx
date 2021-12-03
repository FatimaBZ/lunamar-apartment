import React from "react";
import "./topbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Card } from "react-bootstrap";

export default function TopBar(props) {
  const { isLoggedIn, handleLogout } = props;
  const history = useHistory();

  const logout = () => {
    //axios.post("http://localhost:8888/reactProject/logout.php")
    localStorage.clear();
    history.push("/login");
    handleLogout();
  };

  return (
    <div className="top">
      {/* <div className="topLeft">
        <img className="topImg" src={logo} alt="Logo" />
      </div> */}
      {/* <div className="topCenter">
        <ul className="topList">
          <Link to="/">
            <li className="topListItem">HOME</li>
          </Link>
          

         
          {!isLoggedIn ? (
            <>
             <Link to="/services">
                <li className="topListItem">SERVICES</li>
              </Link>
              <Link to="/login">
                <li className="topListItem">LOGIN</li>
              </Link>
              <Link to="/register">
                <li className="topListItem">REGISTER</li>
              </Link>
             
            </>
          ) : (
            <li className="topListItem" onClick={logout}>
              LOGOUT
            </li>
          )}
          <Link
            to={{ pathname: "http://fxb0881.uta.cloud/blog" }}
            target="_blank"
          >
            <li className="topListItem">BLOG</li>
          </Link>
          <Link to="/about">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/contactus">
            <li className="topListItem">CONTACT US</li>
          </Link>
        </ul>
      </div> */}
      <div className="topCenter">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"> <img className="topImg" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="circle"  >
                <ul className="topList">
                  <Nav.Link href="/" >
                    <li className="topListItem">HOME</li>
                  </Nav.Link>

                  {!isLoggedIn ? (
                    <>
                      <Nav.Link href="/services" >
                        <li className="topListItem">SERVICES</li>
                      </Nav.Link>
                      <Nav.Link href="/login">
                        <li className="topListItem">LOGIN</li>
                      </Nav.Link>
                      <Nav.Link href="/register">
                        <li className="topListItem">REGISTER</li>
                      </Nav.Link>

                    </>
                  ) : (
                    <li className="topListItem" onClick={logout}>
                      LOGOUT
                    </li>
                  )}
                  <Nav.Link
                    href="http://fxb0881.uta.cloud/blog"
                    target="_blank"
                  >
                    <li className="topListItem">BLOG</li>
                  </Nav.Link>
                  <Nav.Link href="/about">
                    <li className="topListItem">ABOUT</li>
                  </Nav.Link>
                  <Nav.Link href="/contactus">
                    <li className="topListItem">CONTACT US</li>
                  </Nav.Link>
                </ul>
              </Nav>

            </Navbar.Collapse>
          </Container>
          <div className="topRight">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fas fa-rss"></i>
          </div>

        </Navbar>


      </div>
    </div>
  );
}
