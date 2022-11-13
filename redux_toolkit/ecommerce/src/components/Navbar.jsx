import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';

const Navbar = () => {
    const carItems = useSelector((state) => state.cart);
    return (
        <div className="navbar_main">
            <span>Logo</span>
            <div>
                <input type="search" placeholder='Enter keyword to search' className='search_input'/>
            </div>
            <div>
                <Link to="/" className='navlink'>Products</Link>
                <Link to="/about" className='navlink'>About</Link>
                <Link to="/contact" className='navlink'>Contact</Link>
                <Link to="/cart" className='navlink'>Cart {carItems.length}</Link>
            </div>
        </div>
    )
}

export default Navbar