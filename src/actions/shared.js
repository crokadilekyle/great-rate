import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveCategories } from './categories'
import { receiveSubmissions } from './submissions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'mathewgries'

export function handleInitialData(){
    return (dispatch) => {
        return getInitialData()
            .then(({users, categories, submissios}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveCategories(categories))
                dispatch(receiveSubmissions(submissios))
                dispatch(setAuthedUser(AUTHED_ID))
            })
            .catch((error) => console.error('handleInitialData:' ,error))
    }
}