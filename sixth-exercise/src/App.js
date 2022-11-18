import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { FormLogin, FormRegister } from "./pages";
import { TasksList } from "./components";

export const App = () => {

    const loggetIn = true;

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {
                        loggetIn ? 
                        <Redirect from='/' to='/tasks'/> 
                        :
                        <Redirect from='/' to='/login'/>
                    }
                </Route>
                <Route path='/tasks' component={TasksList}>
                    {
                        loggetIn ? 
                        <TasksList/>
                        :
                        <Redirect to='/register'/>
                    }
                </Route>
                <Route path='/login' component={FormLogin}/>
                <Route path='/register' component={FormRegister}/>
            </Switch>
        </Router>
    );
}