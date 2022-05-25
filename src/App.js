// import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import Aboutme from "./component/Aboutme";
import Project from "./component/Project";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
