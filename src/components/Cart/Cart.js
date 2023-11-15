import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart icon"/> 
            <h3>Total: ${totalPrice}</h3>
            
            {cartItems.map(cartItem => <CartItem key={cartItem.dishId} cartItem={cartItem}/>)}

        </div> 
    )
} 

export default Cart;