import './App.css';
import AboutBlock from './components/AboutBlock/AboutBlock';
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
    </div>
  );
}

export default App;
