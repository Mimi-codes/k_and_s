import classes from './NavBar.module.css';
import {AiOutlineUser} from 'react-icons/ai'
 import {BsHandbag} from 'react-icons/bs'
import Badge from '../NavBar/Badge';
import Cart from '../../Cart/Cart';
import NavBarCartButton from '../NavBar/NavBarCartButton';
// import Cart from '../../Cart/Cart';



const NavBar = (props) => {

    return (
<>
<div className={classes.nav}>
<h2 className={classes.brand}>K & S Tastee Treats</h2>
<ul className={classes['nav-links']}>
    <li><a href=''>about</a></li>
    <li><a href=''>menu</a></li>
    <li><a href=''>reservations</a></li>
    <li><a href=''>order</a></li>
    <li><a href=''>contact</a></li>
    <li><a href=''><AiOutlineUser className={classes.user}/></a></li>
    <li><a href=''>my account</a></li>
    <NavBarCartButton onClick = {props.onShowCart} />
    {/* <li><Cart /></li> */}
  
</ul>
</div>
</>
    )
}

export default NavBar; //rendered in HeroSection