import classes from './About.module.css';
import AboutButton from './AboutButton';
import AboutImage from './AboutImage';

const About = () => {
    return (
        <>
        <div className={classes['about-content']}>
        <AboutImage />
        <div className={classes['about-text']}>
            <hr className={classes.hr}></hr>
            <p className={classes['about-para']}>welcome</p>
            <h2 className={classes['about-text-header']}>About K & S Tastee Treats </h2>
        <p className={classes['about-text-para']}>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
        <AboutButton />
        </div>
        </div>
        </>
    )
}

export default About//rendered in App.js