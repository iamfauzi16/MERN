import React from 'react'

import { BrowserRouter as Router, Switch} from 'react-router-dom' // jika ingin ganti browse router tinggal menambahkan as
import { Login, Home, Register, MainApp } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Router path="/login">
                    <Login />
                </Router>
                <Router path="/register">
                    <Register />
                </Router>
                <Router path="/">
                    <MainApp/>
                </Router>  
            </Switch>
        </Router>
    )
}

export default Routes
