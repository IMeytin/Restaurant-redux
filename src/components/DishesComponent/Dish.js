import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="dish-container">
            <img src={`${dish.img}.jpeg`} alt={dish.name} />
            <h2>{dish.name}</h2>
            <p>${dish.price}</p>

            <ChangeQuantity quantity={quantity}
            setQuantity={setQuantity}/>

            <button className="addItemBtn" onClick={() => dispatch(addItemToCart({dish, quantity}))}>Add to cart</button>
        </div>
    )
}

export default Dish;