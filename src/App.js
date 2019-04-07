import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Login from "./pages/Authentication/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import AuthState from "./context/AuthState";

library.add(faHome);

const App = () => {
    return (
        <AuthState>
            <BrowserRouter>
                <Switch>
                <Route path="/login" component={Login} />
                    <Route path="/" component={Dashboard} />
                    
                </Switch>
            </BrowserRouter>
        </AuthState>
    );
};

export default App;
