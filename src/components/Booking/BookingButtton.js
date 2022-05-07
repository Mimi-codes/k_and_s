import classes from './BookingButton.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const BookingButton = () => {
    return <>
     <button className={classes['booking-btn']}>check availability</button>
     <AiOutlineArrowRight  className={classes.arrow}/>
    </>
}

export default BookingButton; //rendered in Booking.js