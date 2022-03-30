import classes from './HeroSection.module.css';
import HeroSectionButton from './HeroSectionButton';
import HeroSectionImage from './HeroSectionImage';
import NavBar from './NavBar';

const HeroSection = () => {
    return (
        <>
        <div className={classes.hero}>
        <NavBar />
<div className={classes['hero-content']}>
    <div className={classes['brand-description']}>
    <h2 className={classes.perfect}>The perfect cake every time!</h2>
    <p className={classes['brand-description-paragraph']}>We are a company dedicated to the preparation of cakes, providing our customers with a product always fresh, yummy and tasty.</p>
<HeroSectionButton />
</div>
<HeroSectionImage />
</div>
        </div>
        </>
    )
}

export default HeroSection; //exported in App.js