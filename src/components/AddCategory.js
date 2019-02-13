import React from 'react'
import { connect } from 'react-redux'
import { handleAddCategory } from '../actions/categories'

class AddCategory extends React.Component {
    state = {
        name: '',
        description: '',
    }

    handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, history } = this.props
        history.push('/')
        dispatch(handleAddCategory(this.state))
       
    }
    
    render(){
        return(
            <div className='form-container'>
                <form className='category-form' onSubmit={this.handleSubmit}>
                    <h2>Create a new category</h2>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text' 
                        placeholder='Category name...'
                        name='name'
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        type='textbox'
                        placeholder='Add a description for your category...'
                        style={{width: '100%'}}
                        rows='10'
                        name='description'
                        onChange={this.handleInputChange}
                    />
                    <button 
                        type='submit' 
                        className='btn'
                    >
                        Add Category
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(AddCategory)

