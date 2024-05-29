"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Registro } from '../Registro';


export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = ({}) => {
	return (
		
 			<nav>
				<ul>
					<li><Link to="/" >Home</Link></li>
					<li><Link to="/Registro">Registro</Link></li>
					<li><Link to="/Login">Login</Link></li>
				</ul>		
			</nav>
 		
	);
};

export default Navbar;
