import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function ContactMe() {
  return (
    <div
      className="container  contact-me"
      style={{ color: "azure", height: "80vh" }}
    >
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div>
          <div className="text-center">
            <h1>Contact Me</h1>
            <h3>
              <span style={{ fontSize: "40px" }}>&#10508;</span>&nbsp;&nbsp;Get
              in Touch&nbsp;&nbsp;
              <span style={{ fontSize: "40px" }}>&#10509;</span>
            </h3>
            <hr />
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center row">
            <div className="col mb-3">
              <div>
                <h4>Let's build Something Great</h4>
                <div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div>
                      <PersonIcon
                        style={{ fontSize: "45px" }}
                        className="mb-2"
                      />
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <span>Name</span>
                      <br />
                      <span>Smit Donda</span>
                    </div>
                  </div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div>
                      <LocationOnIcon
                        style={{ fontSize: "45px" }}
                        className="mb-2"
                      />
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <span>Address</span>
                      <br />
                      <span className="text-wrap">
                        Plot No:32, Devkrupa, Street No:2, Desainagar,
                        Bhavnagar,Gujarat.
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div>
                      <PhoneAndroidIcon
                        style={{ fontSize: "45px" }}
                        className="mb-2"
                      />
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <span>Mobile</span>
                      <br />
                      <span>+91-7575017504</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <h4>Mail for any other queries </h4>
                <div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div className="ml-1">
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/gmail-new.png"
                          alt="Gmail"
                        />&nbsp;
                      </a>
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <span>Email</span>
                      <br />
                      <span>
                        <a
                          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-white"
                        >
                          smitdonda7575@gmail.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div>
                      <a
                        href="https://www.linkedin.com/in/smit-donda-113a13217"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/linkedin.png"
                          alt="Linkedin"
                          style={{ width: "60px" }}
                        />
                      </a>
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <span>Linkedin</span>
                      <br />
                      <span>
                        <a
                          href="https://www.linkedin.com/in/smit-donda-113a13217"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-white"
                        >
                          /smit-donda-113a13217
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 d-flex flex-row align-items-center">
                    <div className="mt-4">
                      <a
                        href="https://github.com/smitdonda"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://img.icons8.com/glyph-neue/64/000000/github.png"
                          alt="Github"
                          width="59px"
                        />
                      </a>
                    </div>
                    <div style={{ fontSize: "18px" }}>
                      <div>
                        <h4>See my all work in GitHub</h4>
                      </div>
                      <div>
                        <span>Github</span>
                        <br />
                        <span>
                          <a
                            href="https://github.com/smitdonda"
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none text-white"
                          >
                            /smitdonda
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
