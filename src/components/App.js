import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import CategoryList from './CategoryList'


class App extends Component {
	
	componentDidMount = () => {
		this.props.dispatch(handleInitialData())
	}
	
	render() {

		return (
			<div>
				<CategoryList />
			</div>
		)
	}
}

export default connect()(App)
