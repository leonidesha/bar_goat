//import { useState } from 'react'
import "./App.css";
import imagen from "./assets/img/background2.jpg";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "./components/Carousel";
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
    });
}*/

function App() {
  useEffect(() => {
    const elementos = document.querySelectorAll(".scroll-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    elementos.forEach((el) => observer.observe(el));

    // Limpieza al desmontar el componente
    return () => {
      elementos.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <div className="contenedor">
        <h1 className="nombre">Bar GOAT</h1>
        <img
          className="imgback"
          src={imagen}
          alt="Background"
          data-image-dimensions="1024x1424"
          data-image-focal-point="0.5,0.5"
          data-parent-ratio="0.6"
          data-image-resolution="1500w"
        />
        <div className="texto">
          <h1 className="bienvenida scroll-item">
            Bienvenido a Piano Bar GOAT
          </h1>
          <p className="descripcion scroll-item">
            Esto es un párrafo descriptivo de la bienvenida, aunque sea algo
            largo que se ajuste correctamente en la pantalla.
          </p>
        </div>
      </div>
      <Carousel />
      <div>
        <div className="content info scroll-item">Mas información</div>
        <div className="content descripcion scroll-item">Copyright</div>
      </div>
    </>
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
    </>*/
  );
}

export default App;
