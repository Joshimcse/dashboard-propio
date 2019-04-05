import React from 'react'
import '../../styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import data from "../../data/jsoncategorias/categorias.json";
import {setCategoria} from '../../Redux/actions/categorias.action'
import { connect } from 'react-redux';

const Sidebar = (props) => {


    const mostrarCategoria = id => {
        props.setCategoria(id)
    };

    const {open} = props

    let translate = 'open-nav'
    if(open){
      translate = 'open-nav'
    }else{
      translate='close-nav'
    }

    return (
      <div className={classNames("sidebar col-xl-2 col-md-3 col-12 d-flex flex-column",`${translate}`)} style={{padding:'0px'}}>
        <div className='sidenav'>
          <div className="contenedor-padding">
          {data.map((categoria, index) => {
                  return(
                    <div key={categoria.id} className='a-contenedor' onClick={() =>
                      mostrarCategoria(categoria.id)
                  } ><div className='a-div'><FontAwesomeIcon className='a-icon' icon="home" /><p className="a-p"> {categoria.nombre}</p></div></div>
                  )
          })}
          </div>
        </div>
      </div>
    )


}

export  default connect(null, { setCategoria })(Sidebar)

