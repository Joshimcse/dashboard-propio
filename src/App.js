import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Login from "./pages/Authentication/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./Redux/actions/authentication.action";
import store from "./Redux/store";
library.add(faHome);

if (localStorage.jwt) {
    const decoded = jwt_decode(localStorage.jwt);
    store.dispatch(setCurrentUser(decoded));
}
const App = () => {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default App;
