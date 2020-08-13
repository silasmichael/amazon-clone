import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="chechout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/PrimeDelivery/DEX_2019_Prime_LP_Header_Desktop_3000x600._CB1567810399_.jpg" alt=""/>
                {basket?.length===0?(
                    <div>
                        <h2 className="checkout-title">Your Basket is Empty</h2>
                        <p>You have no items in your basket. to buy one
                            please click "add to basket" next to the item
                        </p>
                    </div>
                 ):(
                    <div>
                        <h2 className="checkout-title">Your Shopping Basket</h2>
                        {basket.map(item=>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>)
                }
            </div>
            {basket.length>0&&(
                <Subtotal/>
            )
            }
        </div>
        
    )
}

export default Checkout
