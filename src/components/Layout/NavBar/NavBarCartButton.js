import classes from './NavBarCartButton.module.css'
import {BsHandbag} from 'react-icons/bs'
import Badge from './Badge'


const NavBarCartButton = props => {
    const svgStyle = {fontSize: '1.3rem', marginRight: '0.3rem'}

return <button className={classes.btn} onClick = {props.onClick}>
    <span>
        <BsHandbag style = {svgStyle}/>
    </span>
    <span className ={classes.cart}>Cart</span>
    <span><Badge /></span>
    </button>
  
}


export default NavBarCartButton; //rendered in NavBar.js