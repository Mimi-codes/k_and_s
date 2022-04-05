import classes from './AvailableItems.module.css';
// import cakeParfait from '../../../assets/cakeparfait.jpg';
import data from '../Recipe/RecipeData';
import Card from 'react-bootstrap/Card';




const AvailableItems = () => {   
      
    return (
            <div className={classes['recipe-items']}>                
{data.map(({ id, img, name, description, price}) => (
    <Card style={{ width: '18rem' }} className={classes.card}>
    <ul>
    <li key={id}>
            <Card.Img variant="top" src = {img} alt = {name} className={classes['img-holder']} />
            <Card.Body className={classes.body}>
    <Card.Title>#{price}</Card.Title>
    <Card.Text>
    <p>{name}</p>
        <p>{description}</p>
    </Card.Text>
  </Card.Body>
    </li>
    </ul>
    </Card>
))}
            </div>
        )      
  }
    export default AvailableItems//rendered in Recipe.js
