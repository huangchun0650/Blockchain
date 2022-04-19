import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        this.callBackendAPI()
            .catch(err => console.log(err))
    }

    callBackendAPI = async () => {
        const response = await fetch('/checkServer', {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        })
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.setState({ data: body.express })
    };

    render() {
        console.log(contractData);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.data}</p>
            </div>
        );
    }
}

export default App;
