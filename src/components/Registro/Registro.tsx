"use client";
import React from "react";
import ImagenRegistro from "../../../public/images/logoregister.jpg";
import "./styles.css";
export type RegistroProps = {
  // types...
};

const Registro: React.FC<RegistroProps> = ({}) => {
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
          <h3>Registro</h3>
          <form>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>
            <input type="text" id="apellido" name="apellido" placeholder= "Apellido"/>
            <input type="text" id="email" name="email" placeholder= "Email"/>
            <input type="password" id="password" name="password" placeholder= "Password"/>
            <input type="password" id="repassword" name="repassword" placeholder= "Repetir password"/>

            <button type="submit">Enviar</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};
export default Registro;
