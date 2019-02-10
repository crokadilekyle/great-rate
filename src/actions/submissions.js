export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS'

export function receiveSubmissions(submissions){
    return {
        type: RECEIVE_SUBMISSIONS,
        submissions,
    }
}