import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">Your Logo/Brand</div>
				<nav>
					<ul className="flex space-x-4">
						<li><a href="#" className="hover:text-gray-300">Home</a></li>
						<li><a href="#" className="hover:text-gray-300">About</a></li>
						<li><a href="#" className="hover:text-gray-300">Services</a></li>
						<li><a href="#" className="hover:text-gray-300">Contact</a></li>
						<Link to={'/login'}><a href="#" className="hover:text-gray-300">Login</a></Link>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
