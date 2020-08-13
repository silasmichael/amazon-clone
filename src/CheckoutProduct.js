import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log(id)
    const removeFromBasket = () =>{
        dispatch(
            {
                type:"REMOVE_FROM_BASKET",
                id,
            }
        )
    }
    return (
        <div className="checkout-product">
            <img className="checkout-product-image" src={image} alt=""/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-ratings">
                    {
                        Array(rating).fill().map(
                            (_)=>(
                                <p>⭐</p>
                            )
                        )
                    }
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
