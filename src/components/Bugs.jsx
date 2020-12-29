import React, { Component } from 'react';
import StoreContext from '../contexts/storeContext';
import { loadBugs } from "../store/bugs";

class Bugs extends Component {
	static contextType = StoreContext;

	state = { bugs: []};

	componentDidMount() {
		const store = this.context;
		

		this.unsubscribe = store.subscribe(() => {
			const bugsInStore = store.getState().entities.bugs.list;
			if (bugsInStore !== this.state.bugs) {
				// console.log()
				this.setState({ bugs: bugsInStore});
			}
		});

		store.dispatch(loadBugs());

		
	}

	componentWillUnmount() {
		this.unsubscribe();
	}
	
	render() {
		console.log("bugs", this.state.bugs);

		return (
			<ul>
				{this.state.bugs.map(bug => (<li key={bug.id}>{bug.description}</li>))}
			</ul>
		);
	}
}

export default Bugs;