import classes from './TestimonialCustomers.module.css';
import  { HiOutlineMinusSm } from 'react-icons/hi';
import  { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import img1 from '../../assets/download.jpg';

const svgStyle = {fontSize: '3.3rem', color: 'red'}

const TestimonialCustomers = () => {
    return <>
    <div className={classes.customers}>
<HiOutlineMinusSm style = {svgStyle}/>
<p>testimonial</p>
<h2>hear from our customers</h2>
<p  className={classes.text}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet.
</p>
<div className={classes.arrow}>
< MdKeyboardArrowLeft/>
<MdKeyboardArrowRight />
</div>

<img src= {img1} className = {classes.img} alt = 'reviewImg' />
    </div>
    </>
}
export default TestimonialCustomers// rendered in Testimonial.js