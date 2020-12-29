import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBugs, toggleResolveBug } from "../store/bugs";

class Bugs extends Component {

	componentDidMount() {
		this.props.loadBugs();
	}
	
	render() {
		return (
			<ul>
				{this.props.bugs.map(bug => (
					<li key={bug.id}>
						{bug.description} 
						<button onClick={() => this.props.toggleResolveBug(bug.id)}> Resolve </button>
					</li>)
				)}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	bugs: state.entities.bugs.list,
});

const mapDispatchToProps = dispatch => ({
	loadBugs: () => dispatch(loadBugs()),
	toggleResolveBug: (bugId) => dispatch(toggleResolveBug(bugId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);