import classes from './MenuNavBar.module.css';
import { NavLink} from 'react-router-dom';



const MenuNavBar = () => {
    return (
        <>
    
        <div className={classes['menu-nav']}>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/cakes" id='cakes'>cakes</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/chin-chin' id='chin-chin'>chin-chin</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/donut' id='donut'>donut</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/pies' id='pie'>meatpie</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/drinks' id='drinks'>drinks</NavLink></li>         
                  </ul>
        </div>
        </>
    )
}

export default MenuNavBar;//rendered in App.js