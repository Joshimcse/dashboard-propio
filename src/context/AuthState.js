import React, { useReducer } from "react";
import { authReducer } from "./reducers/authentication.reducer";
import { setCurrentUser } from "./actions/authentication.action";
import AuthStateGlobal from "./AuthStateGlobal";


const AuthState = (props) => {

    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: {}
    });

    if (localStorage.jwt) {
        const decoded = "prueba dispatch";
      
        dispatch(setCurrentUser(decoded));
    }

    return (
        <AuthStateGlobal.Provider
            value={{
                stateUser
            }}
        >
           {props.children}
        </AuthStateGlobal.Provider>
    );
};

export default AuthState;