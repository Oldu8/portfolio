import './App.module.scss';
import AboutBlock from './components/AboutBlock/AboutBlock';
import CVBlock from './components/CVBlock/CVBlock';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';
import ProjectsBlock from './components/ProjectsBlock/ProjectsBlock';

function App() {
  return (
    <div className="App" >
      <div id='stars2'></div>
      <Header />
      <HeroBlock />
      <AboutBlock />
      <ProjectsBlock />
      <CVBlock />
      <Footer />
    </div>
  );
}

export default App;
