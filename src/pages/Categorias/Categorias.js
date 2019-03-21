import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import data from "../../data/jsoncategorias/categorias.json";
import cats from "../../data/jsoncategorias/index";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'

const Categorias = () => {
    const [categorias, setCategorias] = useState({
        cat: data,
        catSelect: 10
    });

    const mostrarCategoria = id => {
        setCategorias({
            catSelect: id,
            cat: data
        });
    };
    const contenido = cats[categorias.catSelect];

    return (
        <Container>
            <Row>
                <Col>
                    <ButtonToolbar>
                        {categorias.cat.map((categoria, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant="primary"
                                    onClick={() =>
                                        mostrarCategoria(categoria.id)
                                    }
                                    className="mr-1 mb-1"
                                >
                                    {categoria.nombre}
                                </Button>
                            );
                        })}
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col>
                <CardDeck>
                    <Row>
                        {!contenido
                            ? "no hay productos"
                            : !contenido.productos
                            ? "no hay productos"
                            : contenido.productos.map((contenido, index) => {
                                console.log(contenido)
                                  return (
                                      <Col md={4}>
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
