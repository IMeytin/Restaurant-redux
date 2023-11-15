const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }
    const reduceQuantity = () => {
        if ( quantity <=1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div>
            <button onClick={addQuantity}>+</button>
            <span className="quantity">{quantity}</span>
            <button onClick={reduceQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;