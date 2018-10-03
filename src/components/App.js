import React from 'react';
import Button from "./Button";
import Input from './Input';
import { Page } from "./Page";

export default class App extends React.Component {
    state = {
        counter: 0
    };

    //increase = () => {} - is bind function and that's why we can use this
    //increase() {} - we can not use this inside because it's another scope
    increase = () => {
        this.setState({counter: this.state.counter = this.state.counter + 1});
    };

    decrease = () => {
        this.setState({counter: this.state.counter = this.state.counter - 1});
    };

    render() {
        return (
            <div>
                <Input label={ "Insert input here"}/>
                <Button onClick={ this.increase } label={"increase"}/>
                <Button onClick={ this.decrease } label={"decrease"}/>
            </div>
        )
    }
}