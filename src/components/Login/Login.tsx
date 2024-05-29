"use client";
import React from 'react';
import ImagenRegistro from "../../../public/images/logoregister.jpg";
import "./styles.css";
export type LoginProps = {
	// types...
}

const Login: React.FC<LoginProps>  = ({}) => {
	return (
		<div>
		<div className="contenedor-registro">
		  <div className="contenedor-registro-imagen">
			<img
			  src={ImagenRegistro}
			  alt="Imagen de Registro"
			  className="img-register"
			/>
		  </div>
		  <div className="contenedor-registro-formulario">
			<h3>Login</h3>
			<form>

			  <input type="text" id="email" name="email" placeholder= "Email"/>
			  <input type="password" id="password" name="password" placeholder= "Password"/>
			 
  
			  <button type="submit">Enviar</button>
			</form>
			
		  </div>
		</div>
	  </div>
	);
};

export default Login;
