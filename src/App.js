
import './App.css';
import About from './components/Layout/About/About';
import HeroSection from './components/Layout/HeroSection/HeroSection';
import Recipe from './components/Layout/Recipe/Recipe';
import Menu from './components/Menu/Menu';
import {Route} from 'react-router-dom';
import Cakes from './Pages/Cakes';
import MenuNavBar from './components/Menu/MenuNavBar';


function App() {
  return (
    <>
    <HeroSection />
    <About />
    <Recipe />
    <Menu />
    <div>
    <MenuNavBar />
    <main>
    {/* <Route path='/cakes'> */}
      {/* <Cakes /> */}
      {/* </Route> */}
    </main>
    </div>
    </>
  );
}

export default App;
