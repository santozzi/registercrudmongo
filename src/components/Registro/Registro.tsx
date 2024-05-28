"use client";
import React from 'react';

export type RegistroProps = {
	// types...
}

const Registro: React.FC<RegistroProps>  = ({}) => {
	return (
		<div>
 			<div className="contenedor-registro">
    <div className="contenedor-registro-imagen">
        <img src="public/images/logoregister.jpg" alt="Imagen de Registro"
            className="img-register" />
    </div>
    <div className="contenedor-registro-formulario">
        <h3>Registro</h3>
          <form action="/create" method="POST" >
            <label >Nombre</label>
            <input type="text" id="nombre" name="nombre" />
         
            <label>apellido</label>
            <input type="text" id="apellido" name="apellido" />
           
            <label >email</label>
            <input type="text" id="email" name="email" />
            
            <label >carrera</label>
            <input type="text" id="carrera" name="carrera" />

            <label >edad</label>
            <input type="number" id="edad" name="edad" />
         
            <label>password</label>
            <input type="password" id="password" name="password" />
          
            <button type="submit">Enviar</button>
        </form>
<button >click</button>
    </div>
 		</div>
        </div>
        );}
