import React from 'react'
import { connect } from 'react-redux'

function CategoryListItem({ item }) {
    const {name, owner, submissionTotal, totalvotes, voted } = item
    return (
        <div className='category-list-item'>
            <p>Category: {name}</p>
            <p>Voted: {voted}</p>
            <p>Submissions: {submissionTotal}</p>
            <p>Total Votes: {totalvotes}</p>
            <p>Creator: {owner}</p>
        </div>
    )
}

function mapStateToProps({ authedUser, users, categories, submissions }, { id }) {

    const submissionIDs = Object.keys(submissions)
        .filter((subs) => submissions[subs].category === id)
    const submissionTotal = submissionIDs.length

    const upvotes = submissionIDs.reduce((total, key) => total + submissions[key].upvotes.length, 0)
    const downvotes = submissionIDs.reduce((total, key) => total + submissions[key].downvotes.length, 0)

    const userVotes = submissionIDs.filter((subs) => {
        if(submissions[subs].upvotes.includes(authedUser) || submissions[subs].downvotes.includes(authedUser)){
            return subs
        }else{
            return null
        }
    })
    
    return {
        item: {
            owner: users[categories[id].owner].name,
            name: categories[id].name,
            submissionTotal,
            upvotes,
            downvotes,
            totalvotes: upvotes + downvotes,
            voted: userVotes.length > 0 ? 'Yes' : 'No',
        }
    }
}

export default connect(mapStateToProps)(CategoryListItem)