import React, { useReducer, useEffect, useState } from "react";
import authReducer from "./reducers/authentication.reducer";
import { setCurrentUser } from "./actions/authentication.action";
import AuthStateGlobal from "./AuthStateGlobal";
import jwt_decode from "jwt-decode";

const AuthState = props => {
    let productsCart = []
    let total = 0

    if(typeof(localStorage.cartState)!=='undefined'){
            const cartState =  JSON.parse(localStorage.cartState)
            productsCart = cartState.productsCart
            total = cartState.total
    }
        
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {},
        catSelect: 10,
        productsCart,
        total
    });

    localStorage.setItem("cartState", JSON.stringify({productsCart:state.productsCart,total:state.total}));
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        if (localStorage.jwt) {
            const decoded = localStorage.jwt ? localStorage.jwt : "";
            dispatch(setCurrentUser(jwt_decode(decoded)));
        }
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    } else {
        return (
            <AuthStateGlobal.Provider
                value={{
                    state,
                    dispatch
                }}
            >
                {props.children}
            </AuthStateGlobal.Provider>
        );
    }
};

export default AuthState;
