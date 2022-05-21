import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import {NavLink} from './components/Navbar/NavbarElement';

function Checkout() {
    const [{ basket }] =useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

            <img className="checkout__ad" src="https://img.freepik.com/free-vector/promotion-sale-labels-best-offers_206725-127.jpg?size=626&ext=jpg" 
            alt=""/>
             <div>
             <NavLink to="/">Back To Shopping</NavLink>
            </div>
         {basket?.length == 0 ?(
         <div>
             <h2 className="checkout__title">Your shopping basket is empty</h2>
         </div>
     ) : (
        <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* list out all of the checkout product  */}
            {basket.map(item=>(

             <CheckoutProduct
            id={item.id}
             title = {item.title}
             image = {item.image}
             price = {item.price}
           
             />
            ))}
          
        </div>
     )}
     </div>
     {basket.length >0 &&(
         <div className="checkout__left">
             <Subtotal />
             </div>
     )}
   </div>
    );
}

export default Checkout