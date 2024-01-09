import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
return (
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/input">Model Predictions</Link></li>
<li><Link to="/geo">IP Tracking</Link></li>
<li><Link to="/customers">Transaction History</Link></li>

<li><Link to="/image-loader">Network Analysis</Link></li>
</ul>
</nav>
);
}
export default Navbar;