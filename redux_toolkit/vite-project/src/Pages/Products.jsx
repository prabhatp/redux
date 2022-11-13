import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';

import { fetchProducts, STATUSES } from '../store/productsSlice';

const Products = () => {
    const {data: products, status} = useSelector((state) => state.product);
    
    console.log('products', products);
    //const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products').then(res => res.json())
        //     setProducts(res);
        // }
        // fetchProducts();
    }, []);
    console.log('products', products);
    
    function handleAdd(product) {
        dispatch(add(product));
    }
    if (status == STATUSES.LOADING) return <h2>Loading...</h2>;
    if (status == STATUSES.ERROR) return <h2>Error while fetching products</h2>;

    return (
        <div className="productsWrapper">
            {
                products.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <h5>Rs. {product.price}</h5>
                        <button className="btn" onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products