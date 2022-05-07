import classes from './FooterSitemap.module.css';

const FooterSitemap = () => {
    return <>
    <div className={classes['site-links']}>
    <h4><strong>sitemap</strong></h4>
    <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About us</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservations</a></li>
            <li><a href=''>Order</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </div>
    </>
}
export default FooterSitemap;//rendered in Footer.js