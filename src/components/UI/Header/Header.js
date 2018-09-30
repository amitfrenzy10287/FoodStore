import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) =>{
   		return(
			<div className="headerContainer">
				<ul className="topnav">
				    <li>
				    <NavLink to="/Menu"
		            activeClassName="active">Menu</NavLink></li>
				    <li>
				        <NavLink to="/"
		            activeClassName="active" >Settings</NavLink> 
				        <span>
				            <Link to="/StoreSettings" >Store Settings</Link> 
				            <Link to="/" >Address Settings</Link> 
				            <Link to="/" >Takout Settings</Link> 
				            <Link to="/" >Delivery Settings</Link> 
				        </span>
				    </li>
				    <li>
				    	<NavLink to="/Notification" 
		            	activeClassName="active">Notification</NavLink>
				    </li>
				    <li>
				    	<NavLink to="/Configuration" 
		            	activeClassName="active">Configuration</NavLink>
				    </li>
				</ul>
			</div>
		);
}


export default Header;