import React,{useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../../styles/Header.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import AuthStateGlobal from './../../context/AuthStateGlobal'
import {DELETE_CURRENT_USER} from './../../context/actions/authentication.action'



const Header =(props) => {
	const {dispatch} = useContext(AuthStateGlobal);

	function handleClick() {
		dispatch({type:DELETE_CURRENT_USER});
	  }

    return (
        <Navbar sticky="top"  className="header navbar-dark">
					<Link to="/" className="navbar-brand"><img src="/img/logo.svg" alt="react-bootstrap" height="30"/></Link>
					<div className="d-none d-md-flex navbar-nav">
						<Link to="/" className="nav-link active">Título</Link>
					</div>
					<Button onClick={props.control_sidebar} variant="primary" >{props.open.toString()}</Button>
					<div style={{color:'#fff'}} className="flex-grow-1 user">
					<Button onClick={handleClick} variant="primary" >Salir</Button>
					</div>
    	</Navbar>
    )
}
export default Header
