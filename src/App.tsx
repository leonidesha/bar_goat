//import { useState } from 'react'
import "./App.css";
import imagen from "./assets/img/back.webp";
import imglogo from "./assets/img/logo.webp";
import imgwsp from "./assets/img/whatsapp-logo.png";
import ParticlesNew from "./components/ParticlesNew";

function App() {
  return (
    <>
      <ParticlesNew />
      <img className="imgback" src={imagen} />
      <div className="container">
        <img className="logo" src={imglogo} />
        <h1 className="bienvenida">Piano Bar GOAT</h1>
        <p className="descripcion">
          Esto es un párrafo descriptivo de la bienvenida, aunque sea algo largo
          que se ajuste correctamente en la pantalla.
        </p>
        <button type="button" className="btn btn-primary">
          Ver contenido del menú
        </button>
      </div>
      <footer className="footer">
        <p>
          © 2025 Piano Bar GOAT. Todos los derechos reservados.{" "}
          <a
            className="img-hover-container"
            href="https://api.whatsapp.com/send?phone=5356558380&text=Hola"
          >
            <img className="imgwsp" src={imgwsp} alt="Whatsapp" />
            <span className="animated-text">Contactar por Whatsapp</span>
            Whatsapp
          </a>{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
