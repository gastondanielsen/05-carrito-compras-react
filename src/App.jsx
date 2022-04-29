import { Carrito } from "./components/Carrito";
import { Producto } from "./components/Producto";
import './App.css';
import { useState } from "react";

function App() {

  const [productos, setProductos] = useState([
        {id: 1, nombre: 'Monitor', precio: 30000},
        {id: 2, nombre: 'Teclado', precio: 9000},
        {id: 3, nombre: 'Mouse', precio: 8000},
        {id: 4, nombre: 'Auriculares', precio: 10000},
        {id: 5, nombre: 'Parlantes', precio: 6000}
  ]);

  const [carrito, agregarProducto] = useState([]);

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Productos</h1>
          {productos.map(producto => (
            <Producto
              key={producto.id} 
              producto={producto}
              productos={productos}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          ))}
          
        </div>
        <div className="col">
          <h1>Carrito de Compras</h1>
          <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        </div>
      </div>
    </>
  );
}

export default App;