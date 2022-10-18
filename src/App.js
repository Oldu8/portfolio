import './App.css';
import AboutBlock from './components/AboutBlock/AboutBlock';
import CVBlock from './components/CVBlock/CVBlock';
import Header from './components/Header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';
import ProjectsBlock from './components/ProjectsBlock/ProjectsBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBlock />
      <AboutBlock />
      <ProjectsBlock />
      <CVBlock />
    </div>
  );
}

export default App;
