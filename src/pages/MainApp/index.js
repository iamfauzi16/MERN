import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailsBlog from '../DetailsBlog'
import Home from '../Home'

import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
                <div className="content-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/create-post">
                            <CreateBlog />
                            </Route>
                            <Route path="/details-blog">
                            <DetailsBlog />
                            </Route>
                            <Route path="/">
                            <Home/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            <Footer />
        </div>
    )
}

export default MainApp
