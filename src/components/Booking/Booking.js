import classes from './Booking.module.css';
import  { HiOutlineMinusSm } from 'react-icons/hi';
import BookingForm from './BookingForm';
import BookingButton from './BookingButtton';


const svgStyle = {fontSize: '3.3rem', color: 'red'}
const Booking = () => {
    return <>
    <div className={classes.booking}>
<HiOutlineMinusSm style = {svgStyle}/>
    <h5>booking</h5>
    <p className={classes.reservation}>Book a Reservation</p>
    <p>K & S Tastee Treats opened its first location on lorem ipsum dolor sit amet.</p>
    <BookingForm />
<BookingButton />
    </div>
    </>
}

export default Booking; //rendered in App.js