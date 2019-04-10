import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Productos = (props) => {
    return (
        <NavLink
            to={`/prod/${props.producto.id}`}
            producto={props.producto.id}
            className="card"
            style={{ width: "18rem" }}
        >
            <Card.Img variant="top" src="http://via.placeholder.com/130" />
            <Card.Body>
                <Card.Title>{props.producto.producto}</Card.Title>
                <Card.Text>Descripción para {props.producto.producto}</Card.Text>
            </Card.Body>
        </NavLink>
    );
};

export default Productos;
