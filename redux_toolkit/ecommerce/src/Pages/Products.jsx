import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Product from './Product';

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true);
            const options = {
                method: 'GET',
                url: 'https://amazon24.p.rapidapi.com/api/product',
                headers: {
                    'X-RapidAPI-Key': '14d7a8cb93msh108cf9033a2dbc2p18df9ajsne44b17e6d376',
                    'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
                }
            };
            
            axios.request(options).then(function (response) {
                console.log(response.data.docs);
                setProducts(response.data.docs);
                setLoading(false);
            }).catch(function (error) {
                console.error(error);
            });
        }
        fetchProducts();
    }, []);

    if (loading) return 'Products loading...';
    return (
        <div className='products'>
            {
                products.map((product) => (
                    <Product product={product} key={product.product_id} />
                ))
            }
        </div>
    )
}

export default Products