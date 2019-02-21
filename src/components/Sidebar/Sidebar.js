import React, { Component } from 'react'
import '../../styles/Sidebar.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Sidebar extends Component {
  render() {
    const rutas = this.props.rutas
    return (
      <div className="sidebar col-xl-2 col-md-3 col-12 d-flex flex-column" style={{padding:'0px'}}>
        <div className="sidenav" style={{height:'0px',display:'none'}}>
          <div className="contenedor-padding">
            {
                        rutas.paginas.map((ruta,index)=>(
                            
                            ruta.tipo === 'menu' ? ruta.submenu.map(subMenu =><NavLink  exact activeClassName="selected" key={index} to={`${ruta.path}${subMenu.path}`} name={ruta.nombre} className='a-contenedor' ><div className='a-div'><FontAwesomeIcon className='a-icon' icon="home" /><p className="a-p">{ruta.nombre}</p></div></NavLink>):

                            <NavLink exact activeClassName="selected" key={index} to={`${ruta.path}`} name={ruta.nombre} className='a-contenedor' ><div className='a-div'><FontAwesomeIcon className='a-icon' icon="home" /><p className="a-p">{ruta.nombre}</p></div></NavLink>
            
                            )
                        )
            }
          </div>
        </div>
        
      </div>
    )
  }
}
