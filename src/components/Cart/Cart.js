import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
  
const cartItems = <ul> {[
    {id: 1, name: 'cup cake', amount: 2, price: 250}, ].map((item) => 
    <li>{item.name}</li>
)}
    </ul>
return (
       
    <Modal>
      {cartItems}
        </Modal>
)

}


export default Cart; //rendered in NavBar.js