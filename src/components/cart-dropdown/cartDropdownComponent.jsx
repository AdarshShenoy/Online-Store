import React from 'react';
import './cartDropdownStyles.scss';
import Button from '../button/buttonComponent';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button>Checkout</Button>
        
    </div>
  )
}

export default CartDropdown