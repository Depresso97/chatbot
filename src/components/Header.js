import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
    	<div className="nav-wrapper">
            <Link to={'/'} className="brand-logo">Global Sandbox Page</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to={'/sandboxes'}>Sandboxes</Link></li>
                <li><Link to={'/about'}>About us</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header; 