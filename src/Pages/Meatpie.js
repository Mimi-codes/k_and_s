import classes from './Meatpie.module.css';
import data from './MeatpieData';
import Card from 'react-bootstrap/Card';


const Meatpie = () => {
    return (
        <>
            <div className={classes['pie-items']}>                
{data.map(({ id, img, name, description, price}) => (
    <Card key={id}  className={classes.card}>
   
            <Card.Img  className={classes["card-image"]} variant="top" src = {img} alt = {name} />
            <Card.Body className={classes.body}>
    <Card.Title>#{price}</Card.Title>
    <Card.Text>
    <p>{name}</p>
        <p>{description}</p>
  <button type='submit' className={classes.btn}>Add to Cart</button>
    </Card.Text>
  </Card.Body>
  
    </Card>
))}
            </div>
        </>
    )
}

export default Meatpie; //rendered in App.js