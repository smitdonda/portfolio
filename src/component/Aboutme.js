import React from "react";
import DownloadIcon from "@mui/icons-material/Download";

function Aboutme() {
  return (
    <>
      <div className="container mt-5 paratag home portfolio">
        <div
          className="d-flex flex-row justify-content-center align-items-center row "
          style={{ height: "80vh" }}
        >
          <div className="col" style={{ fontSize: "22px", color: "azure" }}>
            <div>
              <h1 className="font-weight-bold">About Me</h1>
            </div>
            <div>
              <p>
                Hello, I'm Donda Smit. I have completed My BBA at Bhavnagar
                University and also I have completed a full-stack development
                course at GUVI. My expertise is in the area of responsive
                design. Specialised in HTML, CSS, Bootstrap, JavaScript for
                Frontend, Node js for backend, MongoDB for databases.
              </p>
              <a
                href="https://drive.google.com/file/d/17Mf2X2P4M7A5Ohnv2zRaRwhSE1J1Kbiv/view?usp=sharing"
                className="btn text-while border border-white button shadow-none mt-2"
                target="_blank"
                rel="noreferrer"
                download
              >
                Resume <DownloadIcon />
              </a>
            </div>
          </div>
          <div className="text-center col">
            <img
              src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="rounded-circle code-images"
              width="450px"
              height="450px"
              alt="Code img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
