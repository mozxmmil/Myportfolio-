import About from "./About";
import Experience from "./Experience";
import Home from "./Home";
import Project from "./Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./Contex/Toggle";
import { useEffect, useState } from "react";



function App() {
  

  const [thememode, setThememode] = useState(() => {
    return localStorage.getItem("thememode") || "light";
  });

  const darkTheme = () => {
    setThememode("dark");
    localStorage.setItem("thememode", "dark");
  };
  const lightTheme = () => {
    setThememode("light");
    localStorage.setItem("thememode", "light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(thememode);
  }, [thememode]);

  return (
    <ThemeProvider value={{ thememode, darkTheme, lightTheme }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/project" element={<Project />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
