import { combineReducers } from 'redux'
import users from './users'
import categories from './categories'
import submissions from './submissions'
import authedUser from './authedUser'

export default combineReducers({
    users,
    categories,
    submissions,
    authedUser,
})