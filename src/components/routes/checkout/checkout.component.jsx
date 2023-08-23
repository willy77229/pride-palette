import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-blcok">
                    <span>Product</span>
                </div>
                <div className="header-blcok">
                    <span>Description</span>
                </div>
                <div className="header-blcok">
                    <span>Quantity</span>    
                </div>
                <div className="header-blcok">
                    <span>Price</span>
                </div>
                <div className="header-blcok">
                    <span>Remove</span>    
                </div>
            </div>
                {cartItems.map((cartItem)=> (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;