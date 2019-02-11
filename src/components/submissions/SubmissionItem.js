import React from 'react'
import { connect } from 'react-redux'

class SubmissionItem extends React.Component {
    render() {
        const { submission, description, pic, submitter, upvotes, downvotes } = this.props
        return (
            <div>
                <div className='submission-description'>
                    <h3>{description}</h3>
                </div>
                <div>
                    <button>
                        Upvotes: {upvotes}
                    </button>
                    <span> | </span>
                    <button>
                        Downvotes: {downvotes}
                    </button>
                </div>
                <div style={{ width: 400 }}>
                    <img
                        src={pic}
                        alt={description}
                        style={{ width: '100%' }}
                    />
                </div>
                <p>Submitted by: {submitter}</p>
            </div>
        )
    }
}

function mapStateToProps({ users, submissions }, { id }) {
    const submission = submissions[id]
    const description = submission.description
    const pic = submission.imageURL
    const submitter = users[submission.owner].name
    return {
        submission,
        description,
        pic,
        submitter,
        upvotes: submission.upvotes.length,
        downvotes: submission.downvotes.length,
    }
}

export default connect(mapStateToProps)(SubmissionItem)