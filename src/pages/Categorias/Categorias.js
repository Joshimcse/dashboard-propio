import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {categoriaProductos} from '../../data/jsoncategorias/categoriasProductos'
import data from '../../data/jsoncategorias/categorias.json'

const Categorias = () => {
    const[categorias, setCategorias] = useState({
        cat:data,
        catSelect: 10,
    })

    const[contenido,setContenido]=useState({
        cont:categoriaProductos[categorias.catSelect]
    })
    
    const mostrarCategoria =(id)=>{
        setCategorias({
            catSelect:id,
            cat:data
        })
        setContenido({
            cont : categoriaProductos[id] ? categoriaProductos[id] : []
        })
    }

    return (

        <Container>
            <Row>
                <Col>
                    <ButtonToolbar>
                        {
                            categorias.cat.map((categoria,index)=>{
                                return <Button key={index} variant="primary" onClick={()=>mostrarCategoria(categoria.id)} className="mr-1 mb-1">{categoria.nombre}</Button>
                            })
                        }
                     
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col>
                {
                    contenido.cont[0] ? contenido.cont[0].productos.map((contenido,index)=>{
                        return <React.Fragment>Nombre: {contenido.producto}<br/></React.Fragment>
                    }) :"no hay productos"
                }
                </Col>
            </Row>
        </Container>
    );
};

export default Categorias;
