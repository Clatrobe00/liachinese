import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return(
        <>
                <div className='navbar'>
                    <div className='navbarContainer'>
                        <ul className='menuList'>
                            <li className='menuItem'>
                                <Link to='/' className='navbarLogo'>
                                    Lia Liu Chinese
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default NavBar;
