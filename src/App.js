import './App.css';
import { Banner } from './components/Banner';
import { Me } from './components/Me';
import { NavBar } from './components/NavBar';
import { CoverPage } from './components/CoverPage';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <CoverPage />
      <NavBar />
      <Banner />
      <Me />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
