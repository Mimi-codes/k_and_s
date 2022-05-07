import classes from './FooterNewsletter.module.css';
import  { MdKeyboardArrowRight } from 'react-icons/md';

const FooterNewsletter = () => {
    return <>
    <div className={classes.newsletter}>
<p><strong>Join our newsletter to stay up to date</strong></p>
<p>Join our subscribers list to get the latest news, updates and special offers delivered directly to your inbox.</p>
    <input type='email' placeholder='Your email address' />
<MdKeyboardArrowRight  className={classes.arrow}/>
    </div>
    </>
}
export default FooterNewsletter;//rendered in Footer.js