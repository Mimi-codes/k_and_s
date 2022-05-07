import classes from './TestimonialReviewImage.module.css';
import img1 from '../../assets/download.jpg';

const TestimonialReviewImage = () => {
    return <>
    <div className={classes['review-image']}>
<img src= {img1} className = {classes.img} alt = 'reviewImg' />
<div className={classes.text}>
    <h4>Name</h4>
    <p>CEO and Founder at halal accessories empire</p>
</div>
    </div>
    </>
}

export default TestimonialReviewImage;//rendered in TestimonialCardReview.js