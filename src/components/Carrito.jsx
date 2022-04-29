import React from 'react';
import { Producto } from './Producto';

export const Carrito = ({carrito, agregarProducto}) => {
    return (
        <div>
            {carrito.length === 0 ? (<p style={{textAlign: 'center'}}>No hay productos en el carrito</p>) : (
                carrito.map((producto) => (
                    <Producto 
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
                ))
            )}
        </div>
    )
}