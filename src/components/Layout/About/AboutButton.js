import classes from './AboutButton.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const AboutButton = (props) => {
    return (
        <>
        <button className={classes['about-btn']}>get direction</button>
<AiOutlineArrowRight  className={classes.arrow}/>
    </>
    )
}

export default AboutButton; //rendered in HeroSection.js