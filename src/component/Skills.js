import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
function Skills() {
  const html = 80;
  const css = 80;
  const js = 80;
  const bootstrap = 80;
  const react = 80;
  const nodejs = 70;

  return (
    <div style={{ color: "azure" }} className="container paratag portfolio">
      <div className="p-4">
        <div>
          <div className="mt-5">
            <h2>My Skills</h2>
            <hr />
            <p className=" h4">
              Here are a few technologies I've been working with recently:
            </p>
          </div>
          <div className="skills-div" style={{ maxWidth: "600px" }}>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/html-5-48.png" alt="HTML" />
              &nbsp;HTML&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={html}
                  label={`${html}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/css3-48.png" alt="CSS" />
              &nbsp;CSS&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={css}
                  label={`${css}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/javascript-48.png" alt="javascript" />
              &nbsp;JS&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={js}
                  label={`${js}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/bootstrap-48.png" alt="Bootstrap" />
              &nbsp;Bootstrap&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={bootstrap}
                  label={`${bootstrap}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/react-native-48.png" alt="React Js" />
              &nbsp;React js&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={react}
                  label={`${react}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center p-2">
              <img src="/image/nodejs-48.png" alt="Node Js" />
              &nbsp;Node js&nbsp;
              <div className="ml-auto">
                <ProgressBar
                  variant="SOME_NAME"
                  now={nodejs}
                  label={`${nodejs}%`}
                  style={{ width: "450px", height: "20px" }}
                  className="progressbar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
