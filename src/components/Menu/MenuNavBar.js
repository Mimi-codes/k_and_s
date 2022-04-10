import classes from './MenuNavBar.module.css';
import { NavLink} from 'react-router-dom';



const MenuNavBar = () => {
    return (
        <>
        <div className={classes['menu-nav']}>
            <ul>
                <li><NavLink activeClassName={classes.active} to="/cakes">cakes</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/chin-chin'>chin-chin</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/donut'>donut</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/pies'>meatpie</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/drinks'>drinks</NavLink></li>         
                  </ul>
        </div>
        </>
    )
}

export default MenuNavBar;//rendered in App.js