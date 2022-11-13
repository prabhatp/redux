import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    console.log('items', items);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span className="logo">Redux Store</span>
            <div>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/products" className="navLink">Products</Link>
                <Link to="/cart" className="navLink">Cart</Link>
                <span className="cartCount">
                    Cart Items: {items.length}
                </span>
            </div>
        </div>
    )
}
export default Navbar;