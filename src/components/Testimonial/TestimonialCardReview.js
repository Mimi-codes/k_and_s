import classes from './TestimonialCardReview.module.css'
import TestimonialReviewImage from './TestimonialReviewImage';


const TestimonialCardReview = () => {
return <>
<div className={classes.card}>
<p>"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet."
</p>
<TestimonialReviewImage />
</div>
</>
}

export default TestimonialCardReview; //rendered in testimonial.js