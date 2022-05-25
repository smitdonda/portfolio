import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Home() {
  return (
    <>
      <div className="container mt-4 paratag portfolio" >
        <div
          className="home d-flex flex-row justify-content-center align-items-center row mb-5"
          style={{ height: "80vh" }}
        >
          <div className="col text-center">
            <img
              className="main-images rounded-circle"
              src="image/smitdonda.jpg"
              alt="Smitdonda"
              width="450px"
              height="420px"
            />
          </div>
          <div className="col d-flex flex-row justify-content-center align-items-center ">
            <div>
              <h3>Hello, I'm-</h3>
              <h1 className="display-1 paratag">Donda Smit.</h1>
              <p style={{ fontSize: "20px" }}>
                <span className="display-6">Full Stack Developer.</span> A
                self-taught Developer with an interest in Computer Science.
              </p>
              <a
                href="https://www.linkedin.com/in/smit-donda-113a13217"
                className="btn text-while border border-white button shadow-none mt-2"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                &nbsp;Linkedin
              </a>
              <span>&nbsp;&nbsp;</span>
              <a
                href="https://github.com/smitdonda"
                target="_blank"
                rel="noreferrer"
                className="btn text-while border border-white button shadow-none mt-2"
              >
                <GitHubIcon />
                &nbsp;Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
