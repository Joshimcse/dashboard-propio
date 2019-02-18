import React from 'react';
import '../../styles/Workspace.css'
import {Switch , Route} from 'react-router-dom'

const Workspace = (props) => {
    const routes = props
    return (
        <div className="workspace col-xl-10 col-md-9 col-12">
            					
        <Switch>
            {routes.rutas.paginas.map((route, index) => (
                route.tipo === 'menu' ? route.submenu.map(subMenu => <Route exact path={`${route.path}${subMenu.path}`} key={index} component={subMenu.component} name={subMenu.name} />):
                <Route exact path={route.path} component={route.component} key={index} name={route.nombre}  />

            ))}
        
        </Switch>
        </div>
    );
};

export default Workspace;