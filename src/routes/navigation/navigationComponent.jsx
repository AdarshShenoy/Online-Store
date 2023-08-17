import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase/firebaseUtils';


const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const signOutHandler = async() => {
    await signOutUser();
    setCurrentUser(null);
  }

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
                    <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
                  ) : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                }
                
            </div>
          </div>
          <Outlet/>
        </Fragment>
      )
}

export default Navigation