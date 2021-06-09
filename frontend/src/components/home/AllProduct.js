import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';
import {  getProducts } from '../../api/apiProduct';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(30);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('createdAt');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getProducts(sortBy, order, limit)
            .then(response => setProducts(response.data))
            .catch(err => setError("Failed to load products!"))
    }, [])

    return (
        <Layout title="Home Page" className="container-fluid">
            <h2 style={{color: '#004018'}}>All Products</h2>
            <div style={{ width: "100%" }}>
                {showError(error, error)}
                {showSuccess(success, "Added to cart successfully!")}
            </div>
            <div className="row">
                {products && products.map(product => <Card product={product} key={product._id} />)}
                
            </div>
            <br/>
        </Layout>
    )
}

export default Home;