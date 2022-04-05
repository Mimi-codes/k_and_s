import classes from './AvailableItems.module.css';
// import cakeParfait from '../../../assets/cakeparfait.jpg';
import data from '../Recipe/RecipeData';




const AvailableItems = () => {   
        return (
            <div>
{data.map(({ id, img, name, description}) => (
    <ul>
    <li key={id}>
        <div className='img-container'>
            <img src = {img} alt = {name} />
        </div>
        <span>{name}</span>
        <span>{description}</span>
    </li>
    </ul>
))}
            </div>
        )      
  }
    export default AvailableItems//rendered in Recipe.js
