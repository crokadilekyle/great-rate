import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import CategoryList from '../components/categorylists/CategoryList'
import Submissions from '../components/submissions/Submission'
import Nav from './Nav'
import Home from './Home'
import AddCategory from './AddCategory'
import AddSubmission from './AddSubmission'


class App extends Component {
	
	componentDidMount = () => {
		this.props.dispatch(handleInitialData())
	}

	render() {

		return (
			<Router>
			<div className='container'>
			<Nav/>
				{this.props.loading === true
				? null
				:<div>
					<Route path='/' exact component={Home}/>
					<Route path='/categories' exact component={CategoryList}/>
					<Route path='/categories/:id' exact component={Submissions}/>
					<Route path='/createcategory' component={AddCategory} />
					<Route path='/categories/:id/addsubmission' component={AddSubmission}/>
				</div>}
			</div>
			</Router>
		)
	}
}

function mapStateToProps({ authedUser}){
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
