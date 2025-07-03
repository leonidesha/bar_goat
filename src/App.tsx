//import { useState } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import imagen from "./assets/img/background2.jpg";
import imagen2 from "./assets/img/background.jpg";
import imagen4 from "./assets/img/carousel1.jpg";
import imagen5 from "./assets/img/carousel2.jpg";
import imagen6 from "./assets/img/carousel3.jpg";
import CustomButton from "./components/CustomButton";
import Productos from "./productos";
import AdminLogin from "./AdminLogin";
/*
function btnClick() {
  // Aquí puedes agregar la lógica que desees al hacer clic en el botón
  console.log("Botón clickeado");
  3;
  // Dentro de un componente React o función
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Maneja la respuesta aquí
      if (data && data.mensaje) {
        alert(data.mensaje); // Muestra el mensaje en una alerta
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    }); text2="Contáctanos"
}*/

function Home() {
  return (
    <>
      <div className="fixed-center">
        <h1 className="bienvenida">Bar GOAT</h1>
        <div className="buttons">
          <Link to="/menu">
            <CustomButton text1="Ofertas"></CustomButton>
          </Link>
          <a href="https://api.whatsapp.com/send?phone=5356558380&text=Hola">
            <CustomButton text1="Contáctanos"></CustomButton>
          </a>
        </div>
      </div>
      <div className="sticky-container">
        <section className="sticky-slide">
          <img src={imagen} alt="slide 1" />
          <div className="slide-content"></div>
        </section>
        <section className="sticky-slide">
          <img src={imagen2} alt="slide 2" />
          <div className="slide-content"></div>
        </section>
        <section className="sticky-slide">
          <img src={imagen4} alt="slide 3" />
          <div className="slide-content"></div>
        </section>
        <section className="sticky-slide">
          <img src={imagen5} alt="slide 3" />
          <div className="slide-content"></div>
        </section>
        <section className="sticky-slide">
          <img src={imagen6} alt="slide 3" />
          <div className="slide-content"></div>
        </section>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Productos />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
/*
function App() {
  return (
    <>
      <div className="contenedor">
        <div className="texto">
          <h1 className="bienvenida">Bienvenido a Piano Bar GOAT</h1>
          <p className="descripcion">
            Esto es un párrafo descriptivo de la bienvenida, aunque sea algo
            largo que se ajuste correctamente en la pantalla.
          </p>
          <div className="boton-container">
            <button type="button" className="btn btn-primary">
              Ver contenido del menú
            </button>
            <button type="button" className="btn btn-primary">
              Contactar por Whatsapp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
/*
    <>
      <ParticlesNew />
      <img className="imgback" src={imagen} />
      <div className="container">
        <img className="logo" src={imglogo} />
        <h1 className="bienvenida">Bienvenido a Piano Bar GOAT</h1>
        <p className="descripcion">
          Esto es un párrafo descriptivo de la bienvenida, aunque sea algo largo
          que se ajuste correctamente en la pantalla.
        </p>
        <button onClick={btnClick} type="button" className="btn btn-primary">
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
}*/

export default App;
