import React, { useReducer, useEffect } from "react";
import authReducer from "./reducers/authentication.reducer";
import { setCurrentUser } from "./actions/authentication.action";
import AuthStateGlobal from "./AuthStateGlobal";
import jwt_decode from "jwt-decode";


const AuthState = (props) => {

    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: {}
    });
    
    useEffect(()=>{
        if (localStorage.jwt) {
            const decoded = jwt_decode(localStorage.jwt);
            dispatch(setCurrentUser(decoded));
        }
    },[])

    return (
        <AuthStateGlobal.Provider
            value={{
                stateUser,
                dispatch
            }}
        >
           {props.children}
        </AuthStateGlobal.Provider>
    );
};

export default AuthState;