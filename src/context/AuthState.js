import React, { useReducer, useEffect ,useState} from "react";
import authReducer from "./reducers/authentication.reducer";
import { setCurrentUser } from "./actions/authentication.action";
import AuthStateGlobal from "./AuthStateGlobal";
import jwt_decode from "jwt-decode";

const AuthState = props => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {},
        catSelect:10
    });


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
