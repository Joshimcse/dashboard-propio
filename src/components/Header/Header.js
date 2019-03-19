import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../../styles/Header.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'



const Header =(props) => {
    return (
        <Navbar className="header navbar-dark">
					<Link to="/" className="navbar-brand"><img src="/img/logo.svg" alt="react-bootstrap" height="30"/></Link>
					<div className="d-none d-md-flex navbar-nav">
						<Link to="/" className="nav-link active">Título</Link>
					</div>
					<Button onClick={props.control_sidebar} variant="primary" >{props.open.toString()}</Button>
					<div style={{color:'#fff'}} className="flex-grow-1 user">
						Perfil
					</div>
    	</Navbar>
    )
}
export default Header
