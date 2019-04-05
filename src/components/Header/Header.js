import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { logoutUser } from "./../../Redux/actions/authentication.action";
import { connect } from "react-redux";


const Header = props => {
    
    return (
        <Navbar sticky="top" className="header navbar-dark">
            <div className="d-none d-md-flex navbar-nav">
                <Link to="/" className="nav-link active">
                    Título
                </Link>
            </div>
            <Button onClick={props.control_sidebar} variant="primary">
                {props.open.toString()}
            </Button>
            <div style={{ color: "#fff" }} className="flex-grow-1 user">
                {
                    props.auth.isAuthenticated === true ? (
                        <Button onClick={props.logoutUser} variant="danger">
                            Salir
                        </Button>
                    ) : (
                        <span className="btn btn-success">
                            <Link to="/login">Log In</Link>
                        </span>
                    )
                }
            </div>
        </Navbar>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Header);
