import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.module.scss";
import CVBlock from "./components/CVBlock/CVBlock";
import { useRef, useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroBlock from "./components/HeroBlock/HeroBlock";
import ProjectsBlock from "./components/ProjectsBlock/ProjectsBlock";

function AppContent({ scrollRef, isScrollable, setIsScrollable }) {
  const location = useLocation();

  const checkScrollable = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    setIsScrollable(scrollHeight > clientHeight);
  };

  useEffect(() => {
    checkScrollable();
    const resizeObserver = new ResizeObserver(checkScrollable);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("resize", checkScrollable);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkScrollable, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div id="stars2"></div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HeroBlock />}></Route>
        <Route path="/projects/" element={<ProjectsBlock />}></Route>
        <Route path="/cv/" element={<CVBlock />}></Route>
      </Routes>
      <Footer scrollRef={scrollRef} isScrollable={isScrollable} />
    </>
  );
}

function App() {
  const scrollRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  return (
    <BrowserRouter>
      <div className="App" ref={(el) => (scrollRef.current = el)}>
        <AppContent
          scrollRef={scrollRef}
          isScrollable={isScrollable}
          setIsScrollable={setIsScrollable}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
