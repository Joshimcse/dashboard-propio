import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cats from "../../data/jsoncategorias/index";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import AuthStateGlobal from "../../context/AuthStateGlobal";

const Categorias = () => {
    const context = useContext(AuthStateGlobal);

    const contenido = cats[context.stateCategoria.catSelect];
    return (
        <Container>
            
            <Row>
                <Col>
                <CardDeck>
                    <Row>
                        {!contenido
                            ? "no hay productos"
                            : contenido.productos.length === 0
                            ? "no hay productos"
                            : contenido.productos.map((contenido, index) => {
                                  return (
                                      <Col key={index} md={4}>
                                      <Card style={{width:"18rem"}} >
                                          <Card.Img
                                              variant="top"
                                            src='http://via.placeholder.com/130'
                                          />
                                          <Card.Body>
                                              <Card.Title>
                                                  {contenido.producto}
                                              </Card.Title>
                                              <Card.Text>
                                                  Descripción para {contenido.producto}
                                              </Card.Text>
                                          </Card.Body>
                                          
                                      </Card>
                                      </Col>
                                  );
                              })}
                              </Row>
                              </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default Categorias;
