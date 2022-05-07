
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
import Cart from './components/Cart/Cart';
import NavBar from './components/Layout/NavBar/NavBar';
import { useState } from 'react';
import Testimonial from './components/Testimonial/Testimonial';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
// import Cart from './components/Cart/Cart';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
      setCartIsShown (true);
    }
    
    const hideCartHandler = () => {
      setCartIsShown (false);
    }
  return (
    <>
    <HeroSection  onShowCart = {showCartHandler} />

    {cartIsShown && <Cart /> }
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
<Testimonial />
<Booking />
<Footer />

    </>
  );
}

export default App;
