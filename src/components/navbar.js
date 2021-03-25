import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Home from './Home';
import Videos from './Videos';

function NavBar () {
    return(
        <>
            <Router>
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
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/videos'>
                        <Videos />
                    </Route>
                </Switch>
            </Router>    
        </>
    )
}

export default NavBar;
