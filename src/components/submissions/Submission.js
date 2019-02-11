import React from 'react'
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
        const { category, owner, name, description, totalEntries } = this.props
        const { entries, currentEntry } = this.state
        return (
            <div className='submission-container'>
                <div>
                    <h3>Name: {name}</h3>
                    <p>Description: {description}</p>
                    <p>Entries: {totalEntries}</p>
                    <p>Created by: {owner}</p>
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
    const category = categories[id]
    const owner = users[category.owner].name

    const entries = Object.keys(submissions)
        .filter((subID) => submissions[subID].category === category.id)

    console.log(entries)
    return {
        category,
        owner,
        name: category.name,
        description: category.description,
        totalEntries: entries.length,
        entries,
    }
}

export default connect(mapStateToProps)(Submissions)

