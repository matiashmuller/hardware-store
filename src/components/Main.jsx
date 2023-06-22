import React from 'react';
import Producto from './Producto';
import { Container, Row } from 'react-bootstrap';

const Main = ({ productos, carrito, actualizarCarrito }) => {
    return (
        <Container fluid className='p-5 background'>
            <Container>
                <h1>Placas de video</h1>
                <div className='row-wrapper'>
                    <Row>
                        {productos.map(producto => (
                            <Producto
                                producto={producto}
                                productos={productos}
                                key={producto.id}
                                carrito={carrito}
                                actualizarCarrito={actualizarCarrito}
                            />
                        ))}
                    </Row>
                </div>
            </Container>
        </Container>
    );
}

export default Main;