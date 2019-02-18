import React, { Component } from 'react'
import '../../styles/Sidebar.css'
import {NavLink} from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    const rutas = this.props.rutas
    return (
      <div className="sidebar col-xl-2 col-md-3 col-12 d-flex flex-column">
        <div className="sidenav" style={{height:'0px',display:'none'}}>
        <ul>
          {
            rutas.paginas.map((ruta,index)=>(
                
                ruta.tipo === 'menu' ? ruta.submenu.map(subMenu => <li  key={index} ><NavLink to={`${ruta.path}${subMenu.path}`} name={ruta.nombre}>{ruta.nombre}</NavLink></li>):
                <li  key={index} ><NavLink to={`${ruta.path}`}  name={ruta.nombre}>{ruta.nombre}</NavLink></li>
 
                )
            )
          }
        </ul>
        </div>
        
      </div>
    )
  }
}
