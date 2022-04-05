import classes from './HeroSectionImage.module.css';
import heroSectionImg from '../../../assets/choc-cake.png';

const HeroSectionImage = () => {
    return (
<img src={heroSectionImg} className={classes['cake-img']} alt='cake image' />
    )
}

export default HeroSectionImage; //rendered in HeroSection.js