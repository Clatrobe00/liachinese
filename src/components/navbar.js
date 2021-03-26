import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// function NavBarPractice () {
//     const [click, setClick] =  useState(false);

//     const handleMenuClick = () => setClick(!click);
    
//     const closeMenu = () => setClick(false);
//     return(
//         <>
//                 <div className='navbar'>
//                     <div className='navbarContainer'>
//                         <Link to='/' className='navbarLogo'>
//                             <h1>Lia Liu Chinese</h1>
//                         </Link>
//                         <div className='menuIcon' onClick={handleMenuClick}>
//                             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                         </div>
//                         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                             <li className='menuItem'>
//                                 <Link to='/' className='navLink' onClick={closeMenu}>
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className='menuItem'>
//                                 <Link to='/videos' className='navLink' onClick={closeMenu}>
//                                     Videos
//                                 </Link>
//                             </li>
//                             <li className='menuItem'>
//                                 <Link to='/sign-up' className='navLink-mobile' onClick={closeMenu}>
//                                     Sign Up!
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//         </>
//     )
// }

function NavBar () {
    return (
        <div>Hello</div>
    )
}

export default NavBar;
