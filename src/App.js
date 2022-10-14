import './App.css';
import AboutBlock from './components/AboutBlock/AboutBlock';
import Header from './components/Header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBlock />
      <AboutBlock />
    </div>
  );
}

export default App;
