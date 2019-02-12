import { saveCategory } from '../utils/api'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'


export function handleAddCategory(category){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveCategory({
            ...category,
            owner: authedUser
        })
        .then((category) => {
            dispatch(addCategory(category))
        })
    }
}

function addCategory(category){
    return {
        type: ADD_CATEGORY,
        category
    }
}

export function receiveCategories(categories){
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    }
}