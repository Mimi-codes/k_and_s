import MenuAvailableItems from './AvailableMenuItems';
import classes from './Menu.module.css';
// import MenuNavBar from './MenuNavBar.';


const Menu = () => {
    return (
        <>
<div className={classes.menu}>
        <hr className={classes.hr}></hr>
            <p className={classes['menu-para']}>see</p>
            <h2 className={classes['menu-text-header']}>our menu </h2> 
        </div>
    
        </>
    )
}

export default Menu;//rendered in App.js