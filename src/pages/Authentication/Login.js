import React, { useEffect, useContext, useState,useReducer } from "react";
import AuthStateGlobal from "../../context/AuthStateGlobal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {loginUser} from "../../context/actions/authentication.action";

const Login = props => {
    const context = useContext(AuthStateGlobal);
    const [rut_usuario, setrutusuario] = useState("");
    const [clave_usuario, setclaveusuario] = useState("");

    
    useEffect(() => {
        if (context.stateUser.isAuthenticated) {
            props.history.push("/");
        }
    });
   const handleSubmit=(e) =>{
        /**/
        const user = {
          rut_usuario,
          clave_usuario
        }
        loginUser(user,context.dispatch)
        e.preventDefault();
      }
    return (
        <Container>
            <Row>
                <Col md={4}>
        <Form id="formulariousuarios" onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Usuario</Form.Label>
                <Form.Control onChange={e => setrutusuario(e.target.value)}
                      id="rut_usuario"
                      name="rut_usuario" type="text" placeholder="Ingresa usuario" />
                
            </Form.Group>

            <Form.Group >
                <Form.Label>Clave</Form.Label>
                <Form.Control onChange={e => setclaveusuario(e.target.value)}
                      id="clave_usuario"
                      name="clave_usuario" type="password" placeholder="Password" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Entrar
            </Button>
        </Form>
        </Col>
        </Row>
        </Container>
    );
};

export default Login;
