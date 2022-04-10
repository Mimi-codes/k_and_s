import classes from './Cakes.module.css';
import data from './CakesData';
import Card from 'react-bootstrap/Card';


const Cakes = () => {
    return (
        <>
            <div className={classes['cake-items']}>                
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
        </>
    )
}

export default Cakes; //rendered in App.js