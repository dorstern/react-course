import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home";
import { Page } from "./Page";
import { Notfound } from "./Notfound";

const About = (props) => (
    <div>About
        <h3 onClick={ () => props.history.push('/index') }>Go to index</h3>
    </div>
);

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/content" component={Page}/>
                    <Route path="*" component={Notfound}/>
                </Switch>
            </Router>
        )
    }
}