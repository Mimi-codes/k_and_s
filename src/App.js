
import './App.css';
import About from './components/Layout/About/About';
import HeroSection from './components/Layout/HeroSection/HeroSection';
import Recipe from './components/Layout/Recipe/Recipe';
import Menu from './components/Menu/Menu';
import {Route, Routes} from 'react-router-dom';
import MenuNavBar from './components/Menu/MenuNavBar';
import Cakes from './Pages/Cakes';
import Meatpie from './Pages/Meatpie';
import ChinChin from './Pages/ChinChin';

function App() {
  return (
    <>
    <HeroSection />
    <About />
    <Recipe />
    <Menu />
    <div>
    <MenuNavBar />
    <Routes>
    <Route path='/cakes' element ={<Cakes />} />
<Route path='/pies' element = {<Meatpie/>} /> 
<Route path='/chin-chin' element = {<ChinChin />} /> 
    </Routes>


    
    </div>
    </>
  );
}

export default App;
