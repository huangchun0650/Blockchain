import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ContractData from './Contracts'
class App extends Component {
	state = {
		data: null
	}

	componentDidMount() {
		this.callBackendAPI()
			.catch(err => console.log(err))
	}
	
	callBackendAPI = async () => {
		const response = await fetch('http://localhost:5000/checkServer', {
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
		return (
			<div className="App">
				<p className="App-intro">{this.state.data}</p>
				<p>{ContractData}</p>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
			</div>
		);
	}
}

export default App;
