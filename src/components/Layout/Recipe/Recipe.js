// import AvailableMeals from './AvailableMeals';
import AvailableItems from './AvailableItems';
import classes from './Recipe.module.css';

const Recipe = () => {
    return (
        <>
        <div className={classes.recipe}>
        <hr className={classes.hr}></hr>
            <p className={classes['recipe-para']}>explore</p>
            <h2 className={classes['recipe-text-header']}>hot selling recipe </h2>
            <p className={classes['recipe-text-para']}>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </p>
 
 <AvailableItems />
        </div>
        </>
    )
}

export default Recipe;//rendered in App.js