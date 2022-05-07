import classes from './Testimonial.module.css';
import TestimonialCardReview from './TestimonialCardReview';
import TestimonialCustomers from './TestimonialCustomers';
import TestimonialButton from './TestimonialButton';

const Testimonial = () => {
    return <>
    <div className={classes.review}>
    <TestimonialCustomers />
    <TestimonialCardReview />
    </div>
    {/* <TestimonialButton /> */}
    </>
}

export default Testimonial; //exported in App.js