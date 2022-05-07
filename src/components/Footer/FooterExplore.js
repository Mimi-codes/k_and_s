import classes from './FooterExplore.module.css';

const FooterExplore = () => {
    return <>
        <div className={classes['explore-links']}>
    <h4>explore</h4>
    <ul>
            <li><a href=''>Cakes</a></li>
            <li><a href=''>Pies</a></li>
            <li><a href=''>Donuts</a></li>
            <li><a href=''>ChinChin</a></li>
            <li><a href=''>Drinks</a></li>
        </ul>
    </div>
    </>
}
export default FooterExplore;//rendered in Footer.js