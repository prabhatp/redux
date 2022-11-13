import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Product = ({product}) => {
    const dispatch = useDispatch();
    const {product_id, product_main_image_url, app_sale_price_currency, app_sale_price, product_title } = product;
    
    function addToCartHandle(product) {
        console.log('product', product);
        dispatch(addToCart(product));
    }
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product_main_image_url} className="product_image" />
            </div>
            <div className="product-info">
                <h5 className='product-title'>{product_title}</h5>
                <h6>{app_sale_price_currency} {app_sale_price}</h6>
            </div>
            <div className='center'>
                <button onClick={() => addToCartHandle(product)} className="add_to_cart">Add to cart</button>
            </div>
        </div>
    )
}

export default Product