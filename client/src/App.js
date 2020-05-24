import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import "./css/App.css";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;