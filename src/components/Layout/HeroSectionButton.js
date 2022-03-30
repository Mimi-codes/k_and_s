import classes from './HeroSectionButton.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const HeroSectionButton = (props) => {
    return (
        <>
        <button className={classes['hero-section-btn']}>discover menu</button>
<AiOutlineArrowRight  className={classes.arrow}/>
    </>
    )
}

export default HeroSectionButton; //rendered in HeroSection.js