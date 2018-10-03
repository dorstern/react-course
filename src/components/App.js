import React from 'react';
import Button from "./Button";
import Input from './Input';
import { ThemeProvider } from 'styled-components';
import { Page } from "./Page";

export default class App extends React.Component {
    state = {
        counter: 0
    };

    render() {
        return (
            <div>
                <Input label={ this.state.counter }/>
                <Button onClick={ () => this.setState({counter: this.state.counter = this.state.counter + 1 }) } label={"increase"}/>
                <Button onClick={ () => this.setState({counter: this.state.counter = this.state.counter -1 }) } label={"decrease"}/>
            </div>
        )
    }
}