import React, { useState} from 'react'

import { useDispatch} from 'react-redux';
import {removeFromCart} from '../store/cartSlice';


const CartPage = ({cart, index, calculateAmount}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
        calculateAmount(event.target.value);
    }
    function removeFromCartHandle(product_id) {
        dispatch(removeFromCart(product_id));
    }
    
    return (
        <div className='cart_product'>
        <div>{index+1}</div>
        <div>
            <img src={cart.product_main_image_url} className='cart_poduct_image' />
        </div>
        <div>
            <span>{cart.app_sale_price_currency} {quantity * cart.app_sale_price}</span>
        </div>
        <div>
            <input type="number" placeholder='quantity' value={quantity} onChange={(e) => handleQuantityChange(e)} />
        </div>
        <div>
            <button onClick={() => removeFromCartHandle(cart.product_id)} className="add_to_cart">Remove</button>
        </div>
    </div>
    )
}

export default CartPage;