import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({user}) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  		<Link className="navbar-brand" to="/">
	  		Vidly
	  		</Link>	
	  		<button 
	  			className="navbar-toggler" 
	  			type="button" 
	  			data-toggle="collapse" 
	  			data-target="#navbarNavAltMarup" 
	  			aria-controls="navbarNavAltMarup" 
	  			aria-expanded="false" 
	  			aria-label="Toggle navigation"
	  		>
	    		<span className="navbar-toggler-icon" />
	  		</button>
	  		<div className="collapse navbar-collapse" id="navbarNavAltMarup">
	    		<div className="navbar-nav">
			        <Link className="nav-item nav-link" to="/movies">
			       		Movies
			        </Link>
			        <Link className="nav-item nav-link" to="/customers">
			       		Customers
			        </Link>
			        <Link className="nav-item nav-link" to="/rentals">
			       		Rentals
			        </Link>
			        {!user && (
			        <React.Fragment>
			        <Link className="nav-item nav-link" to="/login">
			       		Login
			        </Link>
			        <Link className="nav-item nav-link" to="/register">
			       		Register
			        </Link>
			    	</React.Fragment>)}
			    	{user && (
			        <React.Fragment>
			        <Link className="nav-item nav-link" to="/profile">
			       		{`Hello ${user.name}!`}
			        </Link>
			        <Link className="nav-item nav-link" to="/logout">
			       		Logout
			        </Link>
			    	</React.Fragment>)}
			    </div>
	  		</div>
		</nav>
	);
};

export default NavBar