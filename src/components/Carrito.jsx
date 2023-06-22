import React from 'react';
import Producto from './Producto';
import { Container, Row } from 'react-bootstrap';

const Carrito = ({ carrito, actualizarCarrito }) => {
    return (
        <Container fluid className='p-5 background'>
            <Container>
                <div className='row-wrapper'>
                    <h1>Mi carrito</h1>
                    <Row>
                        {carrito.length > 0 ?
                            carrito.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                    carrito={carrito}
                                    actualizarCarrito={actualizarCarrito}
                                />
                            ))
                            :
                            <span className='mt-4'>¡No hay nada por aquí!</span>}
                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Carrito;