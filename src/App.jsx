import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Project from "./Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
