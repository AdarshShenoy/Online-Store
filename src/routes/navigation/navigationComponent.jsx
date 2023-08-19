import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/userContext';
import { CartContext } from '../../contexts/cartContext';
import { signOutUser } from '../../utils/firebase/firebaseUtils';
import CartIcon from '../../components/cart-icon/cartIconComponent';
import CartDropdown from '../../components/cart-dropdown/cartDropdownComponent';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
                <h1>Zelda</h1>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>Shop</Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                  ) : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
          </div>
          <Outlet/>
        </Fragment>
      )
}

export default Navigation