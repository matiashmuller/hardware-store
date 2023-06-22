import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 as uuid } from 'uuid';

const Producto = ({ producto, productos, carrito, actualizarCarrito }) => {

    const { id, nombre, precio, img } = producto;

    const agregarAlCarrito = (id) => {
        const productoSeleccionado = productos.find(
            producto => producto.id === id
        );
        actualizarCarrito([
            ...carrito,
            { id: uuid(), nombre: productoSeleccionado.nombre, precio: productoSeleccionado.precio, img: productoSeleccionado.img }
        ]);
        alert("¡El producto fue agregado a tu carrito!")
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        actualizarCarrito(nuevoCarrito);
        alert("El producto fue eliminado de tu carrito.")
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} key={id} className='d-flex justify-content-center'>
            <Card style={{ width: '16rem'}} className='text-center mt-5 border-3 border-success'>
                <Card.Img variant="top" src={img} className='border-bottom border-3' />
                <Card.Body>
                    <Card.Title style={{ height: '5rem' }} >{nombre}</Card.Title>
                    <Card.Text style={{ height: '5rem', color: '#3160df'}} className='py-3'>
                        <h5 style={{ fontWeight: 'bold' }}> ${precio} </h5>
                        <span style={{ fontSize: '1rem'}}>o 12 cuotas sin interés de ${((precio / 12)).toFixed(2)}</span>
                    </Card.Text>
                    {productos ?
                        <Button
                            style={{ fontWeight: 'bold' }}
                            variant="success"
                            onClick={() => agregarAlCarrito(id)}
                        >COMPRAR</Button>
                        :
                        <Button
                            style={{ fontWeight: 'bold' }}
                            variant="danger"
                            onClick={() => eliminarDelCarrito(id)}
                        >Eliminar</Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Producto;