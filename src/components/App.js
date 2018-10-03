import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const About = (props) => (
    <div>About
        <h3 onClick={ () => props.history.push('/index') }>Go to index</h3>
    </div>
);
const Home = () => (<div>Home</div>);
const Index = () => (<div>Index</div>);
const Notfound = () => (<div>404 Page not found</div>);
const User = (props) => (
    <div>
        <span>User:</span>
        <span>{props.match.params.id}</span>
    </div>
);

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/index" component={Index}/>
                    <Route exact path="/users/:id?" component={User}/>
                    <Route path="*" component={Notfound}/>
                </Switch>
            </Router>
        )
    }
}