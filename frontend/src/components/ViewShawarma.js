import React from 'react';
import {Card, Col} from 'react-bootstrap';
import '../App.css';
import { addToCart } from '../redux/actions/cartActions';
import {useDispatch} from 'react-redux';

const ViewShawarma  = ({product,userInfo}) => {
    const cat = product.category;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product,userInfo));
        window.location.reload();
    };
  

    return(
        <>
            {cat === "Shawarma" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-4 rounded card">

                        <Card.Img className='image center' src={"http://localhost:5000/uploads/" + product.image}></Card.Img>

                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Title>Price: Rs.{product.price}.00</Card.Title>
                            <Card.Title>{product.quantity} in stock</Card.Title>
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                disabled={product.quantity <= 0}
                                onClick={handleAddToCart}
                                >
                                    Add to Cart
                            </button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
                
        </>                        
    )
}

export default ViewShawarma;