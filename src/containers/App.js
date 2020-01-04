import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		// react menaruh state dalam constructor
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }))

	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
	}


	render() {
		const filteredRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if (this.state.robots.length == 0) {
			return <h1 className='bg-light-purple tc'>LOADING</h1>
		}
		return (
			<div className='bg-light-purple tc' >
				<div style={{ height: '17vh', paddingTop: '10px' }}>
					<h1 className="mt0">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
				</div>

				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobot} />
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}
}

export default App;