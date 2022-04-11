
import './App.css';
import About from './components/Layout/About/About';
import HeroSection from './components/Layout/HeroSection/HeroSection';
import Recipe from './components/Layout/Recipe/Recipe';
import Menu from './components/Layout/Menu/Menu';
import {Route, Routes} from 'react-router-dom';
import Cakes from './Pages/Cakes';
import Meatpie from './Pages/Meatpie';
import ChinChin from './Pages/ChinChin';
import Donut from './Pages/Donut';
import MenuNavBar from './components/Layout/Menu/MenuNavBar';
import Drinks from './Pages/Drinks';

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
<Route path='/donut' element = {<Donut />} /> 
<Route path='/drinks' element = {<Drinks />} /> 
    </Routes>


    
    </div>
    </>
  );
}

export default App;
