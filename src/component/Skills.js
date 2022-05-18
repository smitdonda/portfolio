import React from "react";
import { Chart } from "react-google-charts";
function Skills() {
  const data = [
    ["Task", "Hours per Day"],
    ["HMTL 80%", 80],
    ["CSS 80%", 80],
    ["JS 70%", 70],
    ["Bootstrap 80%", 80],
    ["React js 80%", 80],
  ];

  const options = {
    is3D: true,
    backgroundColor: "#343a40",
    legendTextStyle: { color: "azure" },
    titleTextStyle: { color: "azure" },
  };
  return (
    <div style={{ color: "azure" }} className="container paratag">
      <div className="d-flex justify-content-center align-items-center p-4">
        <div>
          <div className="mt-5">
            <h2>My Skills</h2>
            <p className=" h4">
              Here are a few technologies I've been working with recently:
            </p>
          </div>
          <div className="skiil-part float-left row">
            <ul type="none" className="col skill" style={{width: '400px'}}>
              <li>
                <img src="/image/html-5-48.png" alt="HTML" />
                HMTL
              </li>
              <li>
                <img src="/image/css3-48.png" alt="CSS" />
                CSS
              </li>
              <li>
                <img src="/image/javascript-48.png" alt="javascript" />
                JS
              </li>
            </ul>
            <ul type="none" className="col">
              <li>
                <img src="/image/bootstrap-48.png" alt="Bootstrap" />
                Bootstrap
              </li>
              <li>
                <img src="/image/react-native-48.png" alt="React Js" />
                React js
              </li>
              <li>
                <img src="/image/nodejs-48.png" alt="Node Js" />
                Node js
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Chart
          className="text-white"
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
}

export default Skills;
