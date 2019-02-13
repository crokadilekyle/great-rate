import React from 'react'
import { connect } from 'react-redux'

class AddSubmission extends React.Component {

    state = {
        category: this.props.categoryID,
        description: '',
    }

    handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }

    render() {
        const { description } = this.state
        return (
            <div className='form-container'>
                <form className='submission-form'>
                    <label htmlFor='description'>Description:</label>
                    <input 
                        type="text" 
                        placeholder='Enter description...' 
                        name='description'
                        value={description}
                        onChange={this.handleInputChange}    
                    />
                    <label htmlFor='image'>Upload image:</label>
                    <button
                        type='submit'
                        className='btn'>
                        Enter
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, { location }) {
    const { categoryID } = location.state

    return {
        categoryID
    }
}

export default connect(mapStateToProps)(AddSubmission)