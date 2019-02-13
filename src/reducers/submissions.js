import { RECEIVE_SUBMISSIONS} from '../actions/submissions'

export default function submissions(state = {}, action){
    switch(action.type){
        case RECEIVE_SUBMISSIONS:
            return {
                ...state,
                ...action.submissions,
            }
        default:
            return state
    }
}