import React ,{useContext} from "react";
import {Table,Button} from "react-bootstrap";
import AuthStateGlobal from './../../context/AuthStateGlobal'

const Productos = props => {
    const context = useContext(AuthStateGlobal);

    const {
        match: { params }
    } = props;

    let datos = "";
    let error = "";
    try {
        datos = require(`../../data/jsonproductos/${params.id}.json`);
    } catch (e) {
        error = "No hay producto";
    }
    const producto = {
        nombre: datos[params.id].nombre,
        precio: Number(datos[params.id].precio),
        stock: Number(datos[params.id].stock),
        codbarra: datos[params.id].codbarra,
        id: params.id,
        cantidad: 1
    }
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Stock</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Código</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {!error ? (
                    <tr>
                        <td>{datos[params.id].stock}</td>
                        <td>{datos[params.id].precio}</td>
                        <td>{datos[params.id].nombre}</td>
                        <td>{datos[params.id].codbarra}</td>
                        <td><Button onClick={()=>context.dispatch({'type':'addCart','payload':producto})} size='sm' type='button'>Agregar</Button></td>
                    </tr>
                ) : (
                    <tr style={{textAlign:"center"}}>
                        <td colSpan="5">No existe Producto</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default Productos;
