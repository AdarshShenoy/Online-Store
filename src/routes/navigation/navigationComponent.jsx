import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return(
        <Fragment>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
                <h1>Zelda</h1>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>Shop</Link>
                <Link className='nav-link' to='/auth'>Sign In</Link>
            </div>
          </div>
          <Outlet/>
        </Fragment>
      )
}

export default Navigation