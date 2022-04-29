import React from 'react';
import './producto.css';

export const Producto = ({producto, productos, carrito, agregarProducto}) => {

    const {id, nombre, precio} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter((producto) => producto.id === id)[0];

        agregarProducto([...carrito, producto]);
    }

    const eliminarProducto = (id) => {
        const productos = carrito.filter((producto) => producto.id !== id);
        agregarProducto(productos);
    }

    return (
        <div className="container">
            <h3>{nombre}</h3>
            <p>${precio}</p>
            {productos ? 
            (
                <button className="btn" onClick={() => seleccionarProducto(id)}>Agregar</button>
            ) : 
            (
                <button className="btn del" onClick={() => eliminarProducto(id)}>Eliminar</button>
            )
            }
        </div>
    )
}