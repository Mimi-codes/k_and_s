
import classes from './RecipeCarousel.module.css';
import AvailableItems from './AvailableItems';
// import Carousel from 'react-bootstrap/Carousel';
import data from '../Recipe/RecipeData';
import Card from 'react-bootstrap/Card';
import { Carousel } from '@trendyol-js/react-carousel';
import {MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import img1 from '../../../assets/cupcake.jpg';
// import MenuNavBar from '../Menu/MenuNavBar';



const recipeData = [

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


const RecipeCarousel = () => {

    return (
        <>
<Carousel show={3.5} slide={1} swiping={true} transition={0.5} leftArrow = {<MdOutlineArrowBackIosNew />} rightArrow = {<MdArrowForwardIos />}>

<p className='carousel-para'>
<a href=''>
<Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[0].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[0].price}</Card.Title>
<Card.Text>
<p>{recipeData[0].name}</p>
<p>{recipeData[0].description}</p>
</Card.Text>
</Card.Body>
</Card> 
</a>
</p>

<p className='carousel-para'>
<Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[1].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[1].price}</Card.Title>
<Card.Text>
<p>{recipeData[1].name}</p>
<p>{recipeData[1].description}</p>
</Card.Text>
</Card.Body>
</Card> 
</p>

 <p className='carousel-para'>
 <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[2].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[2].price}</Card.Title>
<Card.Text>
<p>{recipeData[2].name}</p>
<p>{recipeData[2].description}</p>
</Card.Text>
</Card.Body>
</Card> 
 </p>
    <p className='carousel-para'>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[3].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[3].price}</Card.Title>
<Card.Text>
<p>{recipeData[3].name}</p>
<p>{recipeData[3].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>

    <p>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[4].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[4].price}</Card.Title>
<Card.Text>
<p>{recipeData[4].name}</p>
<p>{recipeData[4].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>

    <p>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[5].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[5].price}</Card.Title>
<Card.Text>
<p>{recipeData[5].name}</p>
<p>{recipeData[5].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>

    <p>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[6].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[6].price}</Card.Title>
<Card.Text>
<p>{recipeData[6].name}</p>
<p>{recipeData[6].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>

    <p>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[7].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[7].price}</Card.Title>
<Card.Text>
<p>{recipeData[7].name}</p>
<p>{recipeData[7].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>

    <p>
    <Card className={classes.card}>
   <Card.Img  className={classes["card-image"]} variant="top" src = {recipeData[8].img} alt = 'cake' />
   <Card.Body className={classes.body}>
<Card.Title>#{recipeData[8].price}</Card.Title>
<Card.Text>
<p>{recipeData[8].name}</p>
<p>{recipeData[8].description}</p>
</Card.Text>
</Card.Body>
</Card> 
    </p>


    
</Carousel >
        
        </>
    )
}

export default RecipeCarousel;//rendered in Recipe.js