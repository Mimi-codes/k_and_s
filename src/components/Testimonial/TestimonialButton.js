import classes from './TestimonialButton.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TestimonialButton = () => {
    return <>
     <button className={classes['testimonial-btn']}>check availability</button>
<AiOutlineArrowRight  className={classes.arrow}/>
    </>
}

export default TestimonialButton; //rendered in Testimonial.js