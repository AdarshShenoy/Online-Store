import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './cartDropdownStyles.scss';
import Button from '../button/buttonComponent';
import CartItem from '../cart-item/cartItemComponent';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (
            <CartItem key = {item.id} cartItem={item}/>
            ))}
        </div>
        <Button>Checkout</Button>
        
    </div>
  )
}

export default CartDropdown