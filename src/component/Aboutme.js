import React from "react";

function Aboutme() {
  return (
    <>
      <div className="container mt-5 paratag">
        <div
          className="d-flex flex-row justify-content-center align-items-center row"
          style={{ height: "80vh" }}
        >
          <div className="col" style={{ fontSize: "22px", color: "azure" }}>
            <div>
              <h1 className="font-weight-bold">About Me</h1>
            </div>
            <div>
              <p>
                Hay, I'm Donda Smit. I have completed My BBA at Bhavnagar
                University and also I have completed a full-stack development
                course at GUVI.My expertise is in the area of responsive design.
                specialised in HTML, CSS, Bootstrap, JavaScript for Frontend,
                Node js for backend, MongoDB for databases.
              </p>
            </div>
          </div>
          <div className="text-center col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9e8kRfrf-gDBjRHHsYiS8qqzTg_3Q2ynVA&usqp=CAU"
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
