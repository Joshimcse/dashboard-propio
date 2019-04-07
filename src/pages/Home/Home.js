import React,{useContext} from 'react';
import AuthStateGlobal from "../../context/AuthStateGlobal";

const Home = () => {
    const context = useContext(AuthStateGlobal);
    let usuario = context.stateUser.user.usuariobd
    return (
        <div>
            {usuario?`${usuario.nombre_usuario} ${usuario.apaterno_usuario}`:'Usuario Invitado'}
        </div>
    );
};

export default Home;