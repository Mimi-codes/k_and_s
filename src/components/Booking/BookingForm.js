import React from 'react';
import classes from './BookingForm.js';
import {  HiMail, HiPhone  } from 'react-icons/hi';
import {  FaUser } from 'react-icons/fa';
import {   BsFillPeopleFill } from 'react-icons/bs';
import {  AiFillMessage } from 'react-icons/ai';
import { useForm } from "react-hook-form";


const BookingForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
return <>
  <form>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName")}
                    />
                </form>
    </>
   
}

export default BookingForm; //rendered in Booking.js