import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { React, useEffect, useState } from 'react';
import Carrito from './components/Carrito';
import { v4 as uuid } from 'uuid';
import uno from './assets/1030.png';
import dos from './assets/550.png';
import tres from './assets/1650.png';
import cuatro from './assets/6500xt.png';
import cinco from './assets/3080.png';
import seis from './assets/3080ftw.png';
import siete from './assets/7900xt.png';
import ocho from './assets/4080.png';
import nueve from './assets/4090.png';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [productos, guardarProductos] = useState([
    { id: uuid(), nombre: "Asus Nvidia Geforce GT 1030 LP 2GB GDDR5", precio: 51318.79, img: uno },
    { id: uuid(), nombre: "PowerColor AMD Radeon Rx 550 2GB GDDR5 Low Profile", precio: 63417.55, img: dos },
    { id: uuid(), nombre: "Asus Nvidia Geforce GTX 1650 DUAL 4GB GDDR5", precio: 144764.91, img: tres },
    { id: uuid(), nombre: "Gigabyte AMD Radeon RX 6500 XT Eagle 4GB GDDR6", precio: 160724.46, img: cuatro },
    { id: uuid(), nombre: "Lenovo By MSI Nvidia Geforce RTX 3080 10GB GDDR6X", precio: 388242.74, img: cinco },
    { id: uuid(), nombre: "EVGA Nvidia Geforce RTX 3080 FTW3 12GB GDDR6X ARGB", precio: 400714.61, img: seis },
    { id: uuid(), nombre: "AMD RADEON Gigabyte RX 7900 XT Gaming Oc 20GB GDDR6", precio: 716272.05, img: siete },
    { id: uuid(), nombre: "ASUS Nvidia Geforce RTX 4080 ROG STRIX 16GB GDDR6X", precio: 943535.31, img: ocho },
    { id: uuid(), nombre: "Asus TUF Geforce RTX 4090 GAMING 24GB GDDR6X", precio: 1238229.47, img: nueve }
  ])

  let productosEnCarrito = JSON.parse(localStorage.getItem('carrito'));
  if (!productosEnCarrito) {
    productosEnCarrito = []
  };

  const [carrito, actualizarCarrito] = useState(productosEnCarrito);

  useEffect(() => {
    productosEnCarrito ?
      localStorage.setItem('carrito', JSON.stringify(carrito))
      : localStorage.setItem('carrito', JSON.stringify([]))
  }, [productosEnCarrito]);


  return (
    <>
      <Header
        carrito={carrito}
      />
      <Routes>
        <Route
          path="/hardware-store"
          element={
            <Main
              productos={productos}
              carrito={carrito}
              actualizarCarrito={actualizarCarrito}
            />
          }
        />
        <Route
          path="/hardware-store/carrito"
          element={
            <Carrito
              carrito={carrito}
              actualizarCarrito={actualizarCarrito}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
