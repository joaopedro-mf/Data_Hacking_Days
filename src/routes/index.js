import React, { useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom";

import { Context } from '../context/AuthContext';

import history from '../history'

import IntroPage from "./IntroPage/IntroPage";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard"
import Offer from "./Offer/Offer"

function CustomRoute({ isPrivate, ...rest }) {
    const { loading, authenticated, checkPermissions } = useContext(Context);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    //verifica se usuario esta logado
    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    //verifica se usuario tem permissao acessar pagina
    if (isPrivate && authenticated && !checkPermissions(rest.path.slice(1))) {
        return <Redirect to="/login" />;
    }


    return <Route {...rest} />;
}



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <IntroPage />
            </Route>
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute exact path="/dashboard" component={Dashboard} />
            <CustomRoute exact path="/offer/:id" component={Offer} />
        </Switch>
    )
}

export default Routes