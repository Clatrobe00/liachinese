import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return(
        <>
                <div className='navbar'>
                    <div className='navbarContainer'>
                        <Link to='/' className='navbarLogo'>
                            Lia Liu Chinese
                        </Link>
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
