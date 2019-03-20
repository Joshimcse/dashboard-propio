import React,{useReducer,useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
//import AuthState from "./context/AuthState";
import { authReducer } from "./context/reducers/authentication.reducer";
import { setCurrentUser } from "./context/actions/authentication.action";


library.add(faHome);

const App = () => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: {}
    });
    useEffect(()=>{
        if (localStorage.jwt) {
            const decoded = "prueba dispatch";
          
            dispatch(setCurrentUser(decoded));
        }else{
            console.log("no hay token")
        }
    },[])
   
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;