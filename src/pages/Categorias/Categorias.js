import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import data from "../../data/jsoncategorias/categorias.json";
import cats from "../../data/jsoncategorias/index";
import Card from "react-bootstrap/Card";

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
                        {!contenido
                            ? "no hay productos"
                            : !contenido.productos
                            ? "no hay productos"
                            : contenido.productos.map((contenido, index) => {
                                  return (
                                      <Card style={{ width: '16rem' }}>
                                          <Card.Img
                                              variant="top"
                                            src='http://via.placeholder.com/130'
                                          />
                                          <Card.Body>
                                              <Card.Title>
                                                  Card title
                                              </Card.Title>
                                              <Card.Text>
                                                  This is a wider card with
                                                  supporting text below as a
                                                  natural lead-in to additional
                                                  content. This content is a
                                                  little bit longer.
                                              </Card.Text>
                                          </Card.Body>
                                          <Card.Footer>
                                              <small className="text-muted">
                                                  Last updated 3 mins ago
                                              </small>
                                          </Card.Footer>
                                      </Card>
                                  );
                              })}
                </Col>
            </Row>
        </Container>
    );
};

export default Categorias;
