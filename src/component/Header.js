import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DownloadIcon from "@mui/icons-material/Download";

function Header() {
  return (
    <>
      <div className="paratag" style={{ width: "100%" }}>
        <Navbar
          collapseOnSelect
          expand="md"
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
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end text-center"
          >
            <Nav>
              <Nav.Link href="/home" className="header-title ">
                Home
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link href="/aboutme" className="header-title ">
                About me
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link href="/skills" className="header-title ">
                Skills
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link href="/project" className="header-title ">
                My Work
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                className="header-title mr-1"
              >
                Contact Me
              </Nav.Link>
              &nbsp;&nbsp;
              <Nav.Link
                href="https://drive.google.com/file/d/1Zr9GA9FSwxFFhmuwpVIVNl9Oofi_wRLg/view?usp=sharing"
                className="header-title mr-1"
                target="_blank"
                download
              >
                Resume <DownloadIcon />
              </Nav.Link>
              &nbsp;&nbsp;
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
