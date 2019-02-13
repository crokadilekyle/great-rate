import React from 'react'
import { connect } from 'react-redux'

class AddSubmission extends React.Component {
    render() {
        console.log(this.props.location.state)
        return (
            <div>
                <form>
                    <label>Testing:</label>
                    <input type="text" placeholder='Enter info'/>
                    <button type='submit'>Enter</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps)(AddSubmission)