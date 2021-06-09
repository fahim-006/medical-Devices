import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { API } from '../../utils/config';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../../api/apiProduct';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';

const ProductDetails = (props) => {
    console.log(props);
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [modalOpen, setmodalOpen] = useState(true);

    useEffect(() => {
        const id = props.match.params.id;
        getProductDetails(id)
            .then(response => setProduct(response.data))
            .catch(err => setError("Failed to load products"))
    })


    return (
        <Layout title="Product Page">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><a href="#">Product</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{product.category ? product.category.name : ""}</li>
                </ol>
            </nav>
        <div className="container">
            
                <div id="myModal" className="modal" style={{display:'block'}}>
                    <div className="modal-content">
                    <div className="row container">
                        <div className="col-6">
                            <img
                                src={`${API}/product/photo/${product._id}`}
                                alt={product.name}
                                width="100%"
                            />
                        </div>
                <div className="col-6">
                    <h3>{product.name}</h3>    
                    <p>{product.description}</p>
                    <Link to={`/`}>
                        <button className="btn btn-outline-success btn-sm">Go back to Home</button>
                    </Link>
                </div>
             </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}

window.onload = document.getElementById('myModal');

export default ProductDetails;