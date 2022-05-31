import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  let navigate = useNavigate();
  return (
    <>
      <div className="paratag">
        <Navbar
          collapseOnSelect
          expand="md"
          fixed="top"
          className="header-line"
          variant="dark"
        >
          <Navbar.Brand
            href="/home"
            className="font-weight-bold ml-2"
            style={{ fontSize: "28px" }}
          >
            $mit
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="mr-2"
            style={{ fontSize: "16px" }}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end text-center"
          >
            <Nav className="float-left">
              <Nav.Link onClick={() => navigate("/")} className="header-title ">
                Home
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                onClick={() => navigate("/aboutme")}
                className="header-title "
              >
                About me
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                onClick={() => navigate("/skills")}
                className="header-title "
              >
                Skills
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                onClick={() => navigate("/project")}
                className="header-title "
              >
                My Work
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                onClick={() => navigate("/contactme")}
                className="header-title mr-1"
              >
                Contact Me
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                href="https://drive.google.com/file/d/18xBEKOzwGtjzZXbzyigY9T7PEb8cjQBs/view?usp=sharing"
                className="header-title mr-1"
                target="_blank"
                download
              >
                Resume <DownloadIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
