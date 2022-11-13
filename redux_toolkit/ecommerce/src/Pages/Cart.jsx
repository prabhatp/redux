import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import CartPage from '../Pages/CartPage';

const Cart = () => {
    const [totalamount, setTotalAmount] = useState();
    const cartItems = useSelector((state) => state.cart);
    function calculateAmount (quantity) {
        let total_amount= cartItems.reduce((sum, item) => sum + Number(item.app_sale_price) * quantity, 0);
        setTotalAmount(total_amount);
    }
    useEffect(() => {
        calculateAmount(1);
    }, []);
    return (
        cartItems.length > 0 ?
        <div>
            <h2>Cart Items</h2>
            <div className="cart_items">
                <div className='cart_header'>
                    <div>S.No.</div>
                    <div>
                        Product
                    </div>
                    <div>
                        Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Actions
                    </div>
                </div>
                {cartItems.map((cart, index) => (
                    <CartPage cart={cart} index={index} key={index} calculateAmount={(quantity) => calculateAmount(quantity)} />
                ))}
                <div>Total Amount: {totalamount}</div>
            </div>
        </div>
        : <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>Cart is empty</h1>
    )
}

export default Cart