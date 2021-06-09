import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../utils/config';

const Card = ({ product }) => {
    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }
    const imgStyle = {
        height: 250,
        objectFit: "cover",
        objectPosition: "0px 0px"
    }
    return (
        <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="card" style={{padding: "20px"}}>
                <img
                    src={`${API}/product/photo/${product._id}`}
                    alt={product.name}
                    style={imgStyle}
                    className="card-img-top"
                />
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={titleStyle}>{product.name}</p>
                        <hr style={{backgroundColor: '#94ff9f'}}/>
                    <Link to={`/modeldata/${product._id}`}>
                        <button className="btn btn-outline-success btn-sm">View Device</button>
                    </Link>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Card;