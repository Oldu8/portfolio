import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import CVBlock from "./components/CVBlock/CVBlock";
import { useRef } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroBlock from "./components/HeroBlock/HeroBlock";
import ProjectsBlock from "./components/ProjectsBlock/ProjectsBlock";

function App() {
  const scrollRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="App" ref={(el) => (scrollRef.current = el)}>
        <div id="stars2"></div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HeroBlock />}></Route>
          <Route path="/projects/" element={<ProjectsBlock />}></Route>
          <Route path="/cv/" element={<CVBlock />}></Route>
        </Routes>
        <Footer scrollRef={scrollRef} />
      </div>
    </BrowserRouter>
  );
}

export default App;
