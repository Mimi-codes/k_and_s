
const CartContext = React.createContext({
    items: [0],
    totalAmount: 0, //initial value
    addItem: (item) => {},
    removeItem: (id) => {}
});