import React,{useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import '../../styles/Header.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import AuthStateGlobal from './../../context/AuthStateGlobal'
import {DELETE_CURRENT_USER} from './../../context/actions/authentication.action'



const Header =(props) => {
	const context = useContext(AuthStateGlobal);
		function handleClick() {
			context.dispatch({type:DELETE_CURRENT_USER});
		}
		

    return (
        <Navbar sticky="top"  className="header navbar-dark">
					
					<div className="d-none d-md-flex navbar-nav">
						<Link to="/" className="nav-link active">Título</Link>
					</div>
					<Button onClick={props.control_sidebar} variant="primary" >{props.open.toString()}</Button>
					<div style={{color:'#fff'}} className="flex-grow-1 user">
					{context.stateUser.isAuthenticated?<Button onClick={handleClick} variant="danger" >Salir</Button>:<span className="btn btn-success"><Link to="/login">Log In</Link></span>}
					
					</div>
    	</Navbar>
    )
}
export default Header
