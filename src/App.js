import './App.css';
import { Banner } from './components/Banner';
import { Me } from './components/Me';
import { NavBar } from './components/NavBar';
import { CoverPage } from './components/CoverPage';

function App() {
  return (
    <div className="App">
      <CoverPage />
      <NavBar />
      <Banner />
      <Me />
    </div>
  );
}

export default App;
