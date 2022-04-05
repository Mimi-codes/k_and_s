import classes from './AboutImage.module.css';
import plateCake from '../../../assets/crop.png'

const AboutImage = () => {
    return ( 
<img src={plateCake} className={classes['about-img']} alt='cake image' />
        )
}

export default AboutImage //rendered in About