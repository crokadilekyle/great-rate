import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import CategoryList from '../components/categorylists/CategoryList'
import Submissions from '../components/submissions/Submission'


class App extends Component {
	
	componentDidMount = () => {
		this.props.dispatch(handleInitialData())
	}
	
	render() {

		return (
			<div className='container'>
				{this.props.loading === true
				? null
				:<Submissions match={{params: {id: 'nqqh43xjkiprtbq8rk68dj'}}} />}
			</div>
		)
	}
}

function mapStateToProps({ authedUser}){
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
