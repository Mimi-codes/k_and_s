import classes from './AvailableItems.module.css';
// import cakeParfait from '../../../assets/cakeparfait.jpg';
import data from '../Recipe/RecipeData';
import Card from 'react-bootstrap/Card';




const AvailableItems = () => {   
      
    return (
            <div className={classes['recipe-items']}>                
{data.map(({ id, img, name, description, price}) => (
    <Card key={id}  className={classes.card}>
   
            <Card.Img  className={classes["card-image"]} variant="top" src = {img} alt = {name} />
            <Card.Body className={classes.body}>
    <Card.Title>#{price}</Card.Title>
    <Card.Text>
    <p>{name}</p>
        <p>{description}</p>
    </Card.Text>
  </Card.Body>
  
    </Card>
))}
            </div>
        )      
  }
    export default AvailableItems//rendered in Recipe.js
