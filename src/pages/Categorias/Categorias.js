import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cats from "../../data/jsoncategorias/index";
import AuthStateGlobal from "../../context/AuthStateGlobal";
import "../../styles/Cards.css";
import {Productos} from '../../components/index.components'
const Categorias = () => {
    const context = useContext(AuthStateGlobal);

    const contenido = cats[context.state.catSelect];
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        {!contenido
                            ? "no hay productos"
                            : contenido.productos.length === 0
                            ? "no hay productos"
                            : contenido.productos.map((producto, index) => {
                                  return (
                                      <Col key={index} md={4}>
                                          <Productos producto={producto}/>
                                      </Col>
                                  );
                              })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Categorias;
