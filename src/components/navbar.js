import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar () {
    const [click, setClick] =  useState(false);

    const handleMenuClick = () => setClick(!click); 
    return(
        <>
                <div className='navbar'>
                    <div className='navbarContainer'>
                        <Link to='/' className='navbarLogo'>
                            Lia Liu Chinese
                        </Link>
                        <div className='menuIcon' onClick={handleMenuClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className='menuList'>
                            <li className='menuItem'>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default NavBar;
