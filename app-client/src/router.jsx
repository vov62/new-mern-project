import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import HomeComponent from './pages/HomeComponent';

// router אחראי על מעבר בין קומפננטות

export default function AppRouter() {

    return (
        <Router>
            <div><Link to="/">
                HOME
            </Link>
            </div>
            <Link to="/users">
                USERS
            </Link>

            <Switch>
                <Route exact path="/">
                    <HomeComponent />
                </Route>
                <Route exact path="/users">
                    <UserComponent />
                </Route>
            </Switch>
        </Router>

    )
}
