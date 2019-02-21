import React, { Component } from 'react'
import '../../styles/Sidebar.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export default class Sidebar extends Component {

  render() {
    const {rutas,open} = this.props
    let translate = 'open-nav'
    if(open){
      translate = 'open-nav'
    }else{
      translate='close-nav'
    }
    const hola = (
      <div className={classNames("sidebar col-xl-2 col-md-3 col-12 d-flex flex-column",`${translate}`)} style={{padding:'0px'}}>
        <div className='sidenav'>
          <div className="contenedor-padding">
            {rutas.paginas.map((ruta,index)=>{

                if(ruta.tipo==='menu'){
                  return(
                    ruta.submenu.map(subMenu =><NavLink  exact activeClassName="selected" key={index} to={`${ruta.path}${subMenu.path}`} name={ruta.nombre} className='a-contenedor' ><div className='a-div'><FontAwesomeIcon className='a-icon' icon="home" /><p className="a-p">{ruta.nombre}</p></div></NavLink>)
                  )
                }else{
                  return(
                    <NavLink exact activeClassName="selected" key={index} to={`${ruta.path}`} name={ruta.nombre} className='a-contenedor' ><div className='a-div'><FontAwesomeIcon className='a-icon' icon="home" /><p className="a-p">{ruta.nombre}</p></div></NavLink>
                  )
                }

              
            })}
          </div>
        </div>
      </div>
    )
    return(hola)
  }
}
