import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SubmissionItem from './SubmissionItem'

class Submissions extends React.Component {

    state = {
        entries: this.props.entries,
        currentEntry: 0,
    }

    viewNext = (direction) => {
        const { currentEntry, entries } = this.state
        if (direction === '<' && currentEntry !== 0) {
            this.setState((prev) => ({
                currentEntry: prev.currentEntry - 1
            }))
        } else if (direction === '>' && currentEntry < entries.length - 1) {
            this.setState((prev) => ({
                currentEntry: prev.currentEntry + 1
            }))
        }
    }

    render() {
        const { owner, name, description, totalEntries, categoryID } = this.props
        const { entries, currentEntry } = this.state
        return (
            <div className='submission-container'>
                <div>
                    <h3>Name: {name}</h3>
                    <p>Description: {description}</p>
                    <p>Entries: {totalEntries}</p>
                    <p>Created by: {owner}</p>
                    <div>
                        <Link
                            to={{ pathname: '/addsubmission', state: { categoryID: categoryID } }}
                            className='btn'>
                            Add Entry
                        </Link>
                    </div>
                </div>
                <div className='submission'>
                    <button
                        onClick={() => this.viewNext('<')}>
                        Back
                    </button>
                    <div className='submission-item'>
                        <SubmissionItem id={entries[currentEntry]} />
                    </div>
                    <button onClick={() => this.viewNext('>')}>
                        Forward
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, submissions, categories, users }, { match }) {

    const { id } = match.params
    const entries = Object.keys(submissions)
        .filter((subID) => submissions[subID].category === id)

    return {
        categoryID: id,
        owner: users[categories[id].owner].name,
        name: categories[id].name,
        description: categories[id].description,
        totalEntries: entries.length,
        entries,
    }
}

export default connect(mapStateToProps)(Submissions)

