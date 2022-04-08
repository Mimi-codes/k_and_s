import classes from './HeroSectionImage.module.css';
import heroSectionImg from '../../../assets/choc-cake.png';

const HeroSectionImage = () => {
    return (
        <div className={classes['hero-img']}>
<img src={heroSectionImg} className={classes['cake-img']} alt='cake image' />
</div>
    )
}

export default HeroSectionImage; //rendered in HeroSection.js