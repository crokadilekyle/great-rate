import React from 'react'
import { connect } from 'react-redux'

class AddSubmission extends React.Component {
    render() {
        return (
            <div>
                Add Submission
            </div>
        )
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(AddSubmission)

