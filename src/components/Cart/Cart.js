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
        <div>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button>Close</button>
            <button>Order</button>
        </div>
        </Modal>
)

}


export default Cart; //rendered in App.js