import React from 'react';
import classes from './Footer.module.css';
import FooterExplore from './FooterExplore';
import FooterNewsletter from './FooterNewsletter';
import FooterSitemap from './FooterSitemap';
import  { HiOutlineMinusSm } from 'react-icons/hi';
import { CgCopyright } from 'react-icons/cg';



const svgStyle = {fontSize: '2.3rem', color: 'gray', position: 'absolute', bottom: ''}
const Footer = () => {
    return (
        <>
    <div className={classes.text}>
    <h2>k & s tastee treats</h2>
    <div className={classes.footer}>
        <FooterSitemap />
    <FooterExplore />
    <FooterNewsletter />
    </div>
    <div className={classes.copyright}>
    < CgCopyright className={classes.icon}/>  <p className= {classes.reserved}>K & S TASTEE TREATS 2022. All rights reserved.</p>
    <ul> 
        <li><a href=''>WhatsApp</a></li>
    -
{/* <HiOutlineMinusSm style = {svgStyle}/> */}
        <li><a href=''>Instagram</a></li>
    </ul>
    <p>Website by <strong>Mimi Codes</strong></p>
    </div>
    </div>
    </>
    )
}

export default Footer; //rendered in App.js