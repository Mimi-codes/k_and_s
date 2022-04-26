
import classes from './RecipeCarousel.module.css';
import AvailableItems from './AvailableItems';
// import data from '../Recipe/RecipeData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//react bootstrap
import Card from 'react-bootstrap/Card'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


const data = [

  {id: 'm1', name: 'CUPCAKES', description: 'Yummy', price: 800, img: require('../../../assets/cupcake.jpg')},
  {id: 'm2', name: 'MEATPIE', description: 'Yummy', price: 800, img: require('../../../assets/meatpie.jpg')},
  {id: 'm3', name: 'CAKE LOAF', description: 'Yummy', price: 800, img: require('../../../assets/cakeloaf.jpg')},
  {id: 'm4', name: 'CAKEROLL', description: 'Yummy', price: 800, img: require('../../../assets/download.jpg')},
  {id: 'm5', name: 'GLAZED DONUT', description: 'Yummy', price: 800, img: require('../../../assets/glazed doughnut.jpg')},
  {id: 'm6', name: 'CHIN CHIN', description: 'Yummy', price: 800, img: require('../../../assets/chin-chin-.jpg')},
  {id: 'm7', name: 'CAKE PARFAIT', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm8', name: 'DRINKS', description: 'Yummy', price: 800, img: require('../../../assets/zobo.jpg')},
  {id: 'm9', name: 'SMALL CHOPS', description: 'Yummy', price: 800, img: require('../../../assets/smallchops.png')},
]




function RecipeCarousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
    <Slider {...settings}>
                  
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
       
       </Slider>
  </>
  )
}


export default RecipeCarousel; //rendered in Recipe.js
