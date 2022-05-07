import classes from './Donut.module.css';
import data from './DonutData';
import Card from 'react-bootstrap/Card';


const Donut = () => {
    return (
        <>
            <div className={classes['donut-items']}>                
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

export default Donut; //rendered in App.js